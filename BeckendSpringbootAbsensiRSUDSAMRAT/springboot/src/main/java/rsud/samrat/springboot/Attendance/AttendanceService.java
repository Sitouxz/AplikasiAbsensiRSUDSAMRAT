package rsud.samrat.springboot.Attendance;

import rsud.samrat.springboot.Attendance.DTOs.*;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceService {
    AttendanceCreateResponseDTO addAttendanceToSchedule(AttendanceCreateRequestDTO requestDTO);
    List<AttendanceCreateResponseDTO> getAllAttendanceByDate(LocalDate attendanceDate);
    AttendanceCreateResponseDTO updateAttendanceStatusAndCheckoutDetails(AttendanceUpdateRequestDTO requestDTO);

    List<AttendanceCreateResponseDTO> getAllAttendanceByDateAndEmployee(LocalDate attendanceDate, Long employeeId);

    List<AttendanceScheduleDTO> getAllAttendanceWithSchedule();
    List<AttendanceScheduleIdDTO> getAllAttendanceWithScheduleId();
}

