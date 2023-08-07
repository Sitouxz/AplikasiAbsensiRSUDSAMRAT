package rsud.samrat.springboot.Attendance;

import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceService {
    AttendanceCreateResponseDTO addAttendanceToSchedule(AttendanceCreateRequestDTO requestDTO);
    List<AttendanceCreateResponseDTO> getAllAttendanceByDate(LocalDate attendanceDate);
}

