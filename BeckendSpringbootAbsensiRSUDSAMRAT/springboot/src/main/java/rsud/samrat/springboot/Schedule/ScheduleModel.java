package rsud.samrat.springboot.Schedule;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.AttendanceModel;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Shift.ShiftModel;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "schedule")
public class ScheduleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long schedule_id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    @JsonBackReference // Prevents infinite recursion during JSON serialization
    private EmployeeModel employee;

    @ManyToOne
    @JoinColumn(name = "shift_id")
    private ShiftModel shift;

    private LocalDate schedule_date;

    @OneToMany(mappedBy = "schedule")
    @JsonManagedReference // Handles serialization of attendance in the opposite direction
    private List<AttendanceModel> attendances = new ArrayList<>();



}

