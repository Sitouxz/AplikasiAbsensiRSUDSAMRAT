package rsud.samrat.springboot.Shift;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "shift")
public class ShiftModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shift_id;
    private String name;
    private LocalTime start_time;
    private LocalTime end_time;


}

