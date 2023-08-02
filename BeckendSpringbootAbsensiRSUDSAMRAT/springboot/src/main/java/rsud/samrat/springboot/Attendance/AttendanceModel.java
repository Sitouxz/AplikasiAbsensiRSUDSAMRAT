package rsud.samrat.springboot.Attendance;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Schedule.ScheduleModel;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attendance")
public class AttendanceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attendance_id;

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    @JsonBackReference
    private ScheduleModel schedule;
    private LocalDate attendance_date;
    private LocalDateTime clock_in;
    private LocalDateTime clock_out;
    private Double location_lat;
    private Double location_long;
    private String selfie_url;





}

