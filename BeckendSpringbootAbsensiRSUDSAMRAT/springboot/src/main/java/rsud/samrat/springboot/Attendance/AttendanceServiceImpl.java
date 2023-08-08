package rsud.samrat.springboot.Attendance;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Attendance.DTOs.*;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Employee.EmployeeRepository;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Locations.LocationModel;
import rsud.samrat.springboot.Locations.LocationRepository;
import rsud.samrat.springboot.Schedule.ScheduleModel;
import rsud.samrat.springboot.Schedule.ScheduleRepository;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;
import rsud.samrat.springboot.Shift.ShiftModel;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final ScheduleRepository scheduleRepository;
    private final EmployeeRepository employeeRepository;
    private final LocationRepository locationRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public AttendanceServiceImpl(
            AttendanceRepository attendanceRepository,
            ScheduleRepository scheduleRepository,
            EmployeeRepository employeeRepository,
            LocationRepository locationRepository, ModelMapper modelMapper
    ) {
        this.attendanceRepository = attendanceRepository;
        this.scheduleRepository = scheduleRepository;
        this.employeeRepository = employeeRepository;
        this.locationRepository = locationRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public AttendanceCreateResponseDTO addAttendanceToSchedule(AttendanceCreateRequestDTO requestDTO) {
        // Fetch the ScheduleModel using the provided scheduleId
        Long scheduleId = requestDTO.getScheduleId();
        ScheduleModel schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Schedule not found with id: " + scheduleId));

        // Fetch the EmployeeModel using the provided employeeId
        Long employeeId = requestDTO.getEmployeeId();
        EmployeeModel employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new NotFoundException("Employee not found with id: " + employeeId));

        // Check if the employee is assigned to the schedule
        if (!schedule.getEmployees().contains(employee)) {
            throw new IllegalArgumentException("Employee is not assigned to the schedule with id: " + scheduleId);
        }

        // Check if the schedule contains the employee
        if (!employee.getSchedules().contains(schedule)) {
            throw new IllegalArgumentException("Schedule does not contain the employee with id: " + employeeId);
        }

        // Create the AttendanceModel from the request DTO
        AttendanceModel attendance = new AttendanceModel();
        attendance.setSchedule(schedule);
        attendance.getEmployees().add(employee);

        // Set the default status to PRESENT
        attendance.setStatus(AttendanceStatus.PRESENT);

        attendance.setAttendance_date(requestDTO.getAttendanceDate());
        attendance.setClock_in(requestDTO.getClockIn());
        attendance.setClock_out(requestDTO.getClockOut());
        attendance.setLocation_lat_In(requestDTO.getLocationLatIn());
        attendance.setLocation_long_In(requestDTO.getLocationLongIn());
        attendance.setLocation_lat_Out(requestDTO.getLocationLatOut());
        attendance.setLocation_Long_Out(requestDTO.getLocationLongOut());
        attendance.setSelfieUrlCheckIn(requestDTO.getSelfieUrlCheckIn());
        attendance.setSelfieUrlCheckOut(requestDTO.getSelfieUrlCheckOut());

        AttendanceModel savedAttendance = attendanceRepository.save(attendance);

        // Create the AttendanceCreateResponseDTO and manually set the values
        AttendanceCreateResponseDTO responseDTO = new AttendanceCreateResponseDTO();
        responseDTO.setAttendanceId(savedAttendance.getAttendance_id());
        responseDTO.setScheduleId(scheduleId);
        responseDTO.setEmployee(mapEmployeeToCreateEmployeeResponseDTO(employee));
        responseDTO.setScheduleDate(savedAttendance.getAttendance_date());
        responseDTO.setShift(mapShiftToShiftResponseDTO(schedule.getShift()));
        responseDTO.setStatus(savedAttendance.getStatus());
        responseDTO.setClockIn(savedAttendance.getClock_in());
        responseDTO.setClockOut(savedAttendance.getClock_out());
        responseDTO.setLocationLatIn(savedAttendance.getLocation_lat_In());
        responseDTO.setLocationLongIn(savedAttendance.getLocation_long_In());
        responseDTO.setLocationLatOut(savedAttendance.getLocation_lat_Out());
        responseDTO.setLocationLongOut(savedAttendance.getLocation_Long_Out());
        responseDTO.setSelfieUrlCheckIn(savedAttendance.getSelfieUrlCheckIn());
        responseDTO.setSelfieUrlCheckOut(savedAttendance.getSelfieUrlCheckOut());

        // Fetch the LocationModel from the schedule
        LocationModel location = schedule.getLocation();
        if (location != null) {
            // Manually set the location information in the response DTO
            LocationsCreateResponseDTO locationDTO = new LocationsCreateResponseDTO();
            locationDTO.setLocationId(location.getLocationId());
            locationDTO.setLocationName(location.getLocationName());
            locationDTO.setLatitude(location.getLatitude());
            locationDTO.setLongitude(location.getLongitude());
            responseDTO.setLocation(locationDTO);
        }


        return responseDTO;
    }


    @Override
    public List<AttendanceCreateResponseDTO> getAllAttendanceByDate(LocalDate attendanceDate) {
        List<AttendanceModel> attendanceRecords = attendanceRepository.findAllByAttendanceDate(attendanceDate);

        List<AttendanceCreateResponseDTO> attendanceList = new ArrayList<>();

        for (AttendanceModel attendance : attendanceRecords) {
            AttendanceCreateResponseDTO responseDTO = modelMapper.map(attendance, AttendanceCreateResponseDTO.class);
            responseDTO.setScheduleId(attendance.getSchedule().getSchedule_id());
            responseDTO.setEmployee(modelMapper.map(attendance.getEmployees().get(0), CreateEmployeeResponseDTO.class));
            responseDTO.setShift(modelMapper.map(attendance.getSchedule().getShift(), ShiftResponseDTO.class));

            LocationModel location = attendance.getSchedule().getLocation();
            if (location != null) {
                LocationsCreateResponseDTO locationDTO = modelMapper.map(location, LocationsCreateResponseDTO.class);
                responseDTO.setLocation(locationDTO);
            }

            attendanceList.add(responseDTO);
        }

        return attendanceList;
    }

    @Override
    public List<AttendanceCreateResponseDTO> getAllAttendanceByDateAndEmployee(LocalDate attendanceDate, Long employeeId) {
        List<AttendanceModel> attendanceRecords = attendanceRepository.findAllByAttendanceDateAndEmployeeId(attendanceDate, employeeId);

        List<AttendanceCreateResponseDTO> attendanceList = new ArrayList<>();

        for (AttendanceModel attendance : attendanceRecords) {
            AttendanceCreateResponseDTO responseDTO = modelMapper.map(attendance, AttendanceCreateResponseDTO.class);
            responseDTO.setScheduleId(attendance.getSchedule().getSchedule_id());
            responseDTO.setEmployee(modelMapper.map(attendance.getEmployees().get(0), CreateEmployeeResponseDTO.class));
            responseDTO.setShift(modelMapper.map(attendance.getSchedule().getShift(), ShiftResponseDTO.class));

            LocationModel location = attendance.getSchedule().getLocation();
            if (location != null) {
                LocationsCreateResponseDTO locationDTO = modelMapper.map(location, LocationsCreateResponseDTO.class);
                responseDTO.setLocation(locationDTO);
            }

            attendanceList.add(responseDTO);
        }

        return attendanceList;
    }


    @Override
    public AttendanceCreateResponseDTO updateAttendanceStatusAndCheckoutDetails(AttendanceUpdateRequestDTO requestDTO) {
        Long attendanceId = requestDTO.getAttendanceId();

        // Fetch the AttendanceModel using the provided attendanceId
        AttendanceModel attendance = attendanceRepository.findById(attendanceId)
                .orElseThrow(() -> new NotFoundException("Attendance not found with id: " + attendanceId));

        // Update the attendance status to "ONTIME"
        attendance.setStatus(AttendanceStatus.ONTIME);

        // Update checkout details
        attendance.setClock_out(requestDTO.getClockOut());
        attendance.setLocation_lat_Out(requestDTO.getLocationLatOut());
        attendance.setLocation_Long_Out(requestDTO.getLocationLongOut());
        attendance.setSelfieUrlCheckOut(requestDTO.getSelfieUrlCheckOut());

        // Save the updated attendance record
        AttendanceModel updatedAttendance = attendanceRepository.save(attendance);

        // Map the updated attendance record to AttendanceCreateResponseDTO
        AttendanceCreateResponseDTO responseDTO = modelMapper.map(updatedAttendance, AttendanceCreateResponseDTO.class);

        return responseDTO;
    }


    private ShiftResponseDTO mapShiftToShiftResponseDTO(ShiftModel shift) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(shift, ShiftResponseDTO.class);
    }

    private CreateEmployeeResponseDTO mapEmployeeToCreateEmployeeResponseDTO(EmployeeModel employee) {
        ModelMapper modelMapper = new ModelMapper();

        // Explicitly set the employeeId from the EmployeeModel to the response DTO
        CreateEmployeeResponseDTO employeeDTO = modelMapper.map(employee, CreateEmployeeResponseDTO.class);
        employeeDTO.setEmployeeId(employee.getEmployee_id());

        return employeeDTO;
    }

    @Override
    public List<AttendanceScheduleDTO> getAllAttendanceWithSchedule() {
        List<AttendanceModel> attendanceRecords = attendanceRepository.findAll();

        List<AttendanceScheduleDTO> result = new ArrayList<>();

        for (AttendanceModel attendance : attendanceRecords) {
            // Skip attendance records with no schedule
            if (attendance.getSchedule() == null) {
                continue;
            }

            // Create a new AttendanceScheduleDTO for each schedule
            AttendanceScheduleDTO scheduleDTO = new AttendanceScheduleDTO();
            scheduleDTO.setScheduleId(attendance.getSchedule().getSchedule_id());
            scheduleDTO.setScheduleDate(attendance.getSchedule().getSchedule_date());
            scheduleDTO.setShift(mapShiftToShiftResponseDTO(attendance.getSchedule().getShift()));

            // Fetch and set location information if available
            LocationModel location = attendance.getSchedule().getLocation();
            if (location != null) {
                LocationsCreateResponseDTO locationDTO = modelMapper.map(location, LocationsCreateResponseDTO.class);
                scheduleDTO.setLocation(locationDTO);
            }

            // Add attendance details to the scheduleDTO
            AttendanceCreateResponseDTO attendanceDTO = modelMapper.map(attendance, AttendanceCreateResponseDTO.class);
            attendanceDTO.setScheduleId(attendance.getSchedule().getSchedule_id());
            attendanceDTO.setEmployee(mapEmployeeToCreateEmployeeResponseDTO(attendance.getEmployees().get(0)));
            scheduleDTO.getAttendances().add(attendanceDTO);

            result.add(scheduleDTO);
        }

        return result;
    }


    public List<AttendanceScheduleIdDTO> getAllAttendanceWithScheduleId() {
        List<AttendanceModel> attendanceRecords = attendanceRepository.findAll();

        Map<Long, AttendanceScheduleIdDTO> scheduleIdMap = new HashMap<>();

        for (AttendanceModel attendance : attendanceRecords) {
            // Skip attendance records with no schedule
            if (attendance.getSchedule() == null) {
                continue;
            }

            Long scheduleId = attendance.getSchedule().getSchedule_id();
            AttendanceScheduleIdDTO scheduleIdDTO = scheduleIdMap.getOrDefault(scheduleId, new AttendanceScheduleIdDTO());

            if (scheduleIdDTO.getScheduleId() == null) {
                scheduleIdDTO.setScheduleId(scheduleId);
            }

            // Create the AttendanceCreateResponseDTO and manually set the values
            AttendanceCreateResponseDTO attendanceDTO = new AttendanceCreateResponseDTO();
            attendanceDTO.setAttendanceId(attendance.getAttendance_id());
            attendanceDTO.setScheduleId(scheduleId);
            attendanceDTO.setEmployee(mapEmployeeToCreateEmployeeResponseDTO(attendance.getEmployees().get(0)));
            attendanceDTO.setScheduleDate(attendance.getAttendance_date());
            attendanceDTO.setShift(mapShiftToShiftResponseDTO(attendance.getSchedule().getShift()));
            attendanceDTO.setStatus(attendance.getStatus());
            attendanceDTO.setClockIn(attendance.getClock_in());
            attendanceDTO.setClockOut(attendance.getClock_out());
            attendanceDTO.setLocationLatIn(attendance.getLocation_lat_In());
            attendanceDTO.setLocationLongIn(attendance.getLocation_long_In());
            attendanceDTO.setLocationLatOut(attendance.getLocation_lat_Out());
            attendanceDTO.setLocationLongOut(attendance.getLocation_Long_Out());
            attendanceDTO.setSelfieUrlCheckIn(attendance.getSelfieUrlCheckIn());
            attendanceDTO.setSelfieUrlCheckOut(attendance.getSelfieUrlCheckOut());

            scheduleIdDTO.getAttendances().add(attendanceDTO);

            scheduleIdMap.put(scheduleId, scheduleIdDTO);
        }

        return new ArrayList<>(scheduleIdMap.values());
    }


}
