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


@Data
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

    @ManyToOne
    @JoinColumn(name = "shift_id")
    private ShiftModel shift;

    private LocalDate schedule_date;

    @OneToMany(mappedBy = "schedule", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("schedule")
    private List<AttendanceModel> attendances = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "schedule", fetch = FetchType.EAGER)
    private LocationModel location;

}



