package rsud.samrat.springboot.Schedule;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Employee.EmployeeRepository;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Locations.LocationModel;
import rsud.samrat.springboot.Locations.LocationRepository;
import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleAndEmployeeResponseDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;
import rsud.samrat.springboot.Shift.ShiftModel;
import rsud.samrat.springboot.Shift.ShiftRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ScheduleServiceImpl implements ScheduleService {


    private final ScheduleRepository scheduleRepository;
    private final ShiftRepository shiftRepository;
    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;
    private final LocationRepository locationRepository;

    @Autowired
    public ScheduleServiceImpl(ScheduleRepository scheduleRepository, ShiftRepository shiftRepository, EmployeeRepository employeeRepository, ModelMapper modelMapper, LocationRepository locationRepository) {
        this.scheduleRepository = scheduleRepository;
        this.shiftRepository = shiftRepository;
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
        this.locationRepository = locationRepository;






    }

    @Override
    public ScheduleResponseDTO addEmptySchedule(AddEmptyScheduleRequestDTO requestDTO) {
        Optional<ShiftModel> shiftOptional = shiftRepository.findById(requestDTO.getShiftId());
        ShiftModel shift = shiftOptional.orElse(null);
        if (shift == null) {
            return null;
        }

        Optional<LocationModel> locationOptional = locationRepository.findById(requestDTO.getLocationId());
        LocationModel location = locationOptional.orElse(null);
        ScheduleModel emptySchedule = new ScheduleModel();
        emptySchedule.setShift(shift);
        emptySchedule.setSchedule_date(requestDTO.getScheduleDate());
        emptySchedule.setAttendances(Collections.emptyList());
        emptySchedule.setLocation(location);

        ScheduleModel savedSchedule = scheduleRepository.save(emptySchedule);
        ScheduleResponseDTO responseDTO = modelMapper.map(savedSchedule, ScheduleResponseDTO.class);
        if (responseDTO.getEmployee() == null) {
            responseDTO.setEmployee(Collections.emptyList());
        }
        return responseDTO;
    }

    @Override
    public ScheduleAndEmployeeResponseDTO getScheduleById(Long scheduleId) {
        ScheduleModel schedule = scheduleRepository.findByIdWithAttendances(scheduleId)
                .orElseThrow(() -> new NotFoundException("Schedule not found with id: " + scheduleId));

        ScheduleAndEmployeeResponseDTO responseDTO = new ScheduleAndEmployeeResponseDTO();
        responseDTO.setScheduleId(schedule.getSchedule_id());
        responseDTO.setShift(modelMapper.map(schedule.getShift(), ShiftResponseDTO.class));
        responseDTO.setScheduleDate(schedule.getSchedule_date());

        List<CreateEmployeeResponseDTO> employeeDTOs = schedule.getEmployees().stream()
                .map(employee -> modelMapper.map(employee, CreateEmployeeResponseDTO.class))
                .collect(Collectors.toList());
        responseDTO.setEmployees(employeeDTOs);

        LocationModel location = schedule.getLocation();
        if (location != null) {
            responseDTO.setLocation(modelMapper.map(location, LocationsCreateResponseDTO.class));
        }

        return responseDTO;
    }

    @Override
    public List<ScheduleAndEmployeeResponseDTO> getAllSchedules() {
        List<ScheduleModel> allSchedules = scheduleRepository.findAllWithEmployeesAndLocation();
        List<ScheduleAndEmployeeResponseDTO> responseDTOs = new ArrayList<>();

        for (ScheduleModel schedule : allSchedules) {
            ScheduleAndEmployeeResponseDTO responseDTO = new ScheduleAndEmployeeResponseDTO();
            responseDTO.setScheduleId(schedule.getSchedule_id());
            responseDTO.setShift(modelMapper.map(schedule.getShift(), ShiftResponseDTO.class));
            responseDTO.setScheduleDate(schedule.getSchedule_date());

            List<CreateEmployeeResponseDTO> employeeDTOs = schedule.getEmployees().stream()
                    .map(employee -> modelMapper.map(employee, CreateEmployeeResponseDTO.class))
                    .collect(Collectors.toList());
            responseDTO.setEmployees(employeeDTOs);

            LocationModel location = schedule.getLocation();
            if (location != null) {
                responseDTO.setLocation(modelMapper.map(location, LocationsCreateResponseDTO.class));
            }

            responseDTOs.add(responseDTO);
        }

        return responseDTOs;
    }




}
