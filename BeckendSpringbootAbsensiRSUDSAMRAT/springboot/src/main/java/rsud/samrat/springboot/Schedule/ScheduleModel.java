package rsud.samrat.springboot.Schedule;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import rsud.samrat.springboot.Attendance.AttendanceModel;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Locations.LocationModel;
import rsud.samrat.springboot.Shift.ShiftModel;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "schedule")
public class ScheduleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long schedule_id;

    @ManyToMany
    @JoinTable(
            name = "schedule_employee",
            joinColumns = @JoinColumn(name = "schedule_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    @JsonBackReference
    private List<EmployeeModel> employees;
    public List<EmployeeModel> getEmployees() {
        return employees != null ? employees : Collections.emptyList();
    }

    @ManyToOne
    @JoinColumn(name = "shift_id")
    private ShiftModel shift;

    private LocalDate schedule_date;

    @OneToMany(mappedBy = "schedule")
    @JsonIgnoreProperties("schedule")
    private List<AttendanceModel> attendances = new ArrayList<>();

    public LocationModel getLocation() {
        return location;
    }

    public void setLocation(LocationModel location) {
        this.location = location;
    }

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "schedule")
    private LocationModel location;

    public Long getSchedule_id() {
        return schedule_id;
    }

    public void setSchedule_id(Long schedule_id) {
        this.schedule_id = schedule_id;
    }

    public void setEmployees(List<EmployeeModel> employees) {
        this.employees = employees;
    }

    public ShiftModel getShift() {
        return shift;
    }

    public void setShift(ShiftModel shift) {
        this.shift = shift;
    }

    public LocalDate getSchedule_date() {
        return schedule_date;
    }

    public void setSchedule_date(LocalDate schedule_date) {
        this.schedule_date = schedule_date;
    }

    public List<AttendanceModel> getAttendances() {
        return attendances;
    }

    public void setAttendances(List<AttendanceModel> attendances) {
        this.attendances = attendances;
    }
}


