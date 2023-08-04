package rsud.samrat.springboot.Attendance.DTOs;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceCreateRequestDTO {
    private Long scheduleId;
    private LocalDate attendanceDate;
    private LocalDateTime clockIn;
    private LocalDateTime clockOut;
    private Double locationLat;
    private Double locationLong;
    private String selfieUrl;
}

