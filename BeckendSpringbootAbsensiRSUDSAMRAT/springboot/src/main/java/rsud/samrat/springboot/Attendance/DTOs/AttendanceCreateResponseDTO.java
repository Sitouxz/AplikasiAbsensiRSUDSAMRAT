package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceCreateResponseDTO {
    private Long attendanceId;
    private Long scheduleId; // Include the schedule ID in the response
    private LocalDate scheduleDate; // Include the schedule date in the response
    private ShiftResponseDTO shift; // Include the shift details in the response
    private LocalDateTime clockIn;
    private LocalDateTime clockOut;
    private Double locationLat;
    private Double locationLong;
    private String selfieUrl;
}
