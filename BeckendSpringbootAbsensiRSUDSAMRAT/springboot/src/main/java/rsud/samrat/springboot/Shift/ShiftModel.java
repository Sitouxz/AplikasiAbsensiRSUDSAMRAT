package rsud.samrat.springboot.Shift;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "shift")
public class ShiftModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shift_id;
    private String name;
    private LocalTime start_time;
    private LocalTime end_time;

    public static List<ShiftModel> initializeShifts() {
        List<ShiftModel> shifts = new ArrayList<>();

        ShiftModel morningShift = new ShiftModel();
        morningShift.setName("Pagi");
        morningShift.setStart_time(LocalTime.of(8, 0));
        morningShift.setEnd_time(LocalTime.of(14, 0));
        shifts.add(morningShift);

        ShiftModel noonShift = new ShiftModel();
        noonShift.setName("Sore");
        noonShift.setStart_time(LocalTime.of(14, 0));
        noonShift.setEnd_time(LocalTime.of(20, 0));
        shifts.add(noonShift);

        ShiftModel nightShift = new ShiftModel();
        nightShift.setName("Malam");
        nightShift.setStart_time(LocalTime.of(20, 0));
        nightShift.setEnd_time(LocalTime.of(8, 0));
        shifts.add(nightShift);

        ShiftModel managementShift = new ShiftModel();
        managementShift.setName("Management");
        managementShift.setStart_time(LocalTime.of(8, 0));
        managementShift.setEnd_time(LocalTime.of(16, 0));
        shifts.add(managementShift);

        return shifts;
    }


}

