package rsud.samrat.springboot.Schedule;

import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;

import java.util.List;

public interface ScheduleService {
    ScheduleResponseDTO addEmptySchedule(AddEmptyScheduleRequestDTO requestDTO);
    ScheduleResponseDTO getScheduleById(Long scheduleId);
    List<ScheduleResponseDTO> getAllSchedules();
}
