package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceUpdateRequestDTO {
    private Long attendanceId;
    private LocalDateTime clockOut;
    private Double locationLatOut;
    private Double locationLongOut;
    private String selfieUrlCheckOut;
}

