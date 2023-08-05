package rsud.samrat.springboot.Attendance;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Employee.EmployeeRepository;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Locations.LocationModel;
import rsud.samrat.springboot.Schedule.ScheduleModel;
import rsud.samrat.springboot.Schedule.ScheduleRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final ScheduleRepository scheduleRepository;
    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public AttendanceServiceImpl(
            AttendanceRepository attendanceRepository,
            ScheduleRepository scheduleRepository,
            EmployeeRepository employeeRepository,
            ModelMapper modelMapper
    ) {
        this.attendanceRepository = attendanceRepository;
        this.scheduleRepository = scheduleRepository;
        this.employeeRepository = employeeRepository;
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
        attendance.setLocation_lat(requestDTO.getLocationLat());
        attendance.setLocation_long(requestDTO.getLocationLong());
        attendance.setSelfie_url(requestDTO.getSelfieUrl());

        AttendanceModel savedAttendance = attendanceRepository.save(attendance);

        // Convert the saved attendance entity to the response DTO using ModelMapper
        AttendanceCreateResponseDTO responseDTO = modelMapper.map(savedAttendance, AttendanceCreateResponseDTO.class);

        // Return the response DTO
        return responseDTO;
    }


}
