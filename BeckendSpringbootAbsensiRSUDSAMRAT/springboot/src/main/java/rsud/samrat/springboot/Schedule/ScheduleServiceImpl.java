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
import rsud.samrat.springboot.Schedule.DTOs.*;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;
import rsud.samrat.springboot.Shift.ShiftModel;
import rsud.samrat.springboot.Shift.ShiftRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
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
    public List<ScheduleResponseDTO> addScheduleWithTimeRange(AddScheduleWithTimeRangeRequestDTO requestDTO) {
        List<ScheduleResponseDTO> addedSchedules = new ArrayList<>();

        Long shiftId = requestDTO.getShiftId();
        LocalDate startDate = requestDTO.getStartDate();
        LocalDate endDate = requestDTO.getEndDate();
        List<Long> locationIds = requestDTO.getLocationIds();

        if (startDate.isAfter(endDate)) {
            // Invalid date range, return an empty list
            return addedSchedules;
        }

        LocalDate currentDate = startDate;
        int locationIndex = 0;

        while (!currentDate.isAfter(endDate)) {
            // Create a schedule for the current date and assign the location
            ScheduleModel emptySchedule = new ScheduleModel();
            emptySchedule.setShift(shiftRepository.findById(shiftId).orElse(null));
            emptySchedule.setSchedule_date(currentDate);
            emptySchedule.setLocation(locationRepository.findById(locationIds.get(locationIndex)).orElse(null));

            ScheduleModel savedSchedule = scheduleRepository.save(emptySchedule);
            ScheduleResponseDTO responseDTO = modelMapper.map(savedSchedule, ScheduleResponseDTO.class);
            if (responseDTO.getEmployee() == null) {
                responseDTO.setEmployee(Collections.emptyList());
            }
            addedSchedules.add(responseDTO);

            // Move to the next date and circularly select the next location ID
            currentDate = currentDate.plusDays(1);
            locationIndex = (locationIndex + 1) % locationIds.size();
        }

        return addedSchedules;
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

    @Override
    public ScheduleAndEmployeeResponseDTO updateSchedule(ScheduleUpdateRequestDTO requestDTO) {
        Long scheduleId = requestDTO.getScheduleId();
        ScheduleModel schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Schedule not found with id: " + scheduleId));


        schedule.setSchedule_date(requestDTO.getScheduleDate());

        Long shiftId = requestDTO.getShiftId();
        ShiftModel shift = shiftRepository.findById(shiftId)
                .orElseThrow(() -> new NotFoundException("Shift not found with id: " + shiftId));
        schedule.setShift(shift);

        // You can add more fields here for updating other schedule details, like location, etc.

        ScheduleModel updatedSchedule = scheduleRepository.save(schedule);

        return modelMapper.map(updatedSchedule, ScheduleAndEmployeeResponseDTO.class);
    }


    @Override
    public void removeEmployeeFromSchedule(Long scheduleId, Long employeeId) {
        ScheduleModel schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Schedule not found with id: " + scheduleId));

        EmployeeModel employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new NotFoundException("Employee not found with id: " + employeeId));

        // Remove the employee from the schedule's list of employees
        schedule.getEmployees().remove(employee);

        // Save the updated schedule to the database
        scheduleRepository.save(schedule);
    }

    @Override
    public void deleteScheduleById(Long scheduleId) {
        ScheduleModel schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Schedule not found with id: " + scheduleId));

        scheduleRepository.delete(schedule);
    }





}
