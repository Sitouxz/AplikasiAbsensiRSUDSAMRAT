package rsud.samrat.springboot.Employee;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Placement.PlacementModel;
import rsud.samrat.springboot.Schedule.ScheduleModel;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employee")
public class EmployeeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employee_id;
    private String name;
    private String role;

    @ManyToOne
    @JoinColumn(name = "placement_id")
    @JsonBackReference
    private PlacementModel placement;

    @ManyToMany(mappedBy = "employees")
    @JsonManagedReference
    private List<ScheduleModel> schedules;

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public PlacementModel getPlacement() {
        return placement;
    }

    public void setPlacement(PlacementModel placement) {
        this.placement = placement;
    }

    public List<ScheduleModel> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<ScheduleModel> schedules) {
        this.schedules = schedules;
    }
}




