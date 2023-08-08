package rsud.samrat.springboot.Schedule.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleUpdateRequestDTO {
    private Long scheduleId;
    private LocalDate scheduleDate;
    private Long shiftId;

}

