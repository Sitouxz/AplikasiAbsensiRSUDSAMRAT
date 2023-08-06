package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.AttendanceStatus;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceCreateResponseDTO {
    private Long attendanceId;
    private Long scheduleId;
    private CreateEmployeeResponseDTO employee;
    private LocalDate scheduleDate;
    private ShiftResponseDTO shift;
    private AttendanceStatus status;
    private LocalDateTime clockIn;
    private LocalDateTime clockOut;
    private Double locationLatIn;
    private Double locationLongIn;
    private Double locationLatOut;
    private Double locationLongOut;
    private String selfieUrlCheckIn;
    private String selfieUrlCheckOut;
    private LocationsCreateResponseDTO location;
}
