package rsud.samrat.springboot.Attendance.DTOs;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.AttendanceState;
import rsud.samrat.springboot.Attendance.AttendanceStatus;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceUpdateRequestDTO {
    private Long attendanceId;
    private LocalDateTime clockOut;
    private Double locationLatOut;
    private Double locationLongOut;
    @Lob
    private byte[] selfieCheckOut;
    private AttendanceStatus status;
}

