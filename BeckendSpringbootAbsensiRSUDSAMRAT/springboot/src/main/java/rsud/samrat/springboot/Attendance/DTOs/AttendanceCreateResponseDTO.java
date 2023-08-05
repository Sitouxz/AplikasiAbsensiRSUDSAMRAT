package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.AttendanceStatus;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Schedule.ScheduleModel;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;


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
    private Double locationLat;
    private Double locationLong;
    private String selfieUrl;
    private LocationsCreateResponseDTO location;

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public CreateEmployeeResponseDTO getEmployee() {
        return employee;
    }

    public void setEmployee(CreateEmployeeResponseDTO employee) {
        this.employee = employee;
    }

    public LocalDate getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDate scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public ShiftResponseDTO getShift() {
        return shift;
    }

    public void setShift(ShiftResponseDTO shift) {
        this.shift = shift;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceStatus status) {
        this.status = status;
    }

    public LocalDateTime getClockIn() {
        return clockIn;
    }

    public void setClockIn(LocalDateTime clockIn) {
        this.clockIn = clockIn;
    }

    public LocalDateTime getClockOut() {
        return clockOut;
    }

    public void setClockOut(LocalDateTime clockOut) {
        this.clockOut = clockOut;
    }

    public Double getLocationLat() {
        return locationLat;
    }

    public void setLocationLat(Double locationLat) {
        this.locationLat = locationLat;
    }

    public Double getLocationLong() {
        return locationLong;
    }

    public void setLocationLong(Double locationLong) {
        this.locationLong = locationLong;
    }

    public String getSelfieUrl() {
        return selfieUrl;
    }

    public void setSelfieUrl(String selfieUrl) {
        this.selfieUrl = selfieUrl;
    }

    public LocationsCreateResponseDTO getLocation() {
        return location;
    }

    public void setLocation(LocationsCreateResponseDTO location) {
        this.location = location;
    }
}
