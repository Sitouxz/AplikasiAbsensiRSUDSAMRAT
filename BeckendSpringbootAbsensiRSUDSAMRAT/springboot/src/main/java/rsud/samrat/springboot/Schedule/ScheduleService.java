package rsud.samrat.springboot.Schedule;

import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;

public interface ScheduleService {
    ScheduleResponseDTO addEmptySchedule(AddEmptyScheduleRequestDTO requestDTO);
}
