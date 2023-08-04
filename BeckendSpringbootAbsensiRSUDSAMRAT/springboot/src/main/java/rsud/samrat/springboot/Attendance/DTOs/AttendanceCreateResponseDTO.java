package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.AttendanceStatus;
import rsud.samrat.springboot.Schedule.ScheduleModel;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceCreateResponseDTO {
    private Long attendanceId;
    private Long scheduleId;
    private Long employeeId; // Include the employee ID in the response
    private LocalDate scheduleDate;
    private ShiftResponseDTO shift;
    private AttendanceStatus status; // Include the attendance status in the response
    private LocalDateTime clockIn;
    private LocalDateTime clockOut;
    private Double locationLat;
    private Double locationLong;
    private String selfieUrl;
}
