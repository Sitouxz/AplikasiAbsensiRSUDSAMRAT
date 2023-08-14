package rsud.samrat.springboot.Schedule;

import rsud.samrat.springboot.Schedule.DTOs.*;

import java.util.List;

public interface ScheduleService {
    ScheduleResponseDTO addEmptySchedule(AddEmptyScheduleRequestDTO requestDTO);

    List<ScheduleResponseDTO> addScheduleWithTimeRange(AddScheduleWithTimeRangeRequestDTO requestDTO);
    List<ScheduleAndEmployeeResponseDTO> getAllSchedules();
    ScheduleAndEmployeeResponseDTO getScheduleById(Long scheduleId);
    ScheduleAndEmployeeResponseDTO updateSchedule(ScheduleUpdateRequestDTO requestDTO);

    void removeEmployeeFromSchedule(Long scheduleId, Long employeeId);
    void deleteScheduleById(Long scheduleId);
}
