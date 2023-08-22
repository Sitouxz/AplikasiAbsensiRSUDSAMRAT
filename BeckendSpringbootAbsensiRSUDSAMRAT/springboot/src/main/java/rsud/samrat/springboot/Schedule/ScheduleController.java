package rsud.samrat.springboot.Schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Schedule.DTOs.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dev/schedule")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @PostMapping()
    public ResponseEntity<ScheduleResponseDTO> addEmptySchedule(@RequestBody AddEmptyScheduleRequestDTO requestDTO) {
        ScheduleResponseDTO responseDTO = scheduleService.addEmptySchedule(requestDTO);
        if (responseDTO != null) {
            return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/add-schedule-with-time-range")
    public ResponseEntity<List<ScheduleResponseDTO>> addScheduleWithTimeRange(
            @RequestBody AddScheduleWithTimeRangeRequestDTO requestDTO) {
        List<ScheduleResponseDTO> addedSchedules = scheduleService.addScheduleWithTimeRange(requestDTO);
        if (!addedSchedules.isEmpty()) {
            return new ResponseEntity<>(addedSchedules, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<ScheduleAndEmployeeResponseDTO> getScheduleById(@PathVariable Long id) {
        ScheduleAndEmployeeResponseDTO responseDTO = scheduleService.getScheduleById(id);
        if (responseDTO != null) {
            return ResponseEntity.ok(responseDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping()
    public ResponseEntity<List<ScheduleAndEmployeeResponseDTO>> getAllSchedules() {
        List<ScheduleAndEmployeeResponseDTO> responseDTOList = scheduleService.getAllSchedules();
        if (!responseDTOList.isEmpty()) {
            return ResponseEntity.ok(responseDTOList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/schedule_detail/{id}")
    public ResponseEntity<ScheduleAndEmployeeResponseDTO> updateSchedule(@PathVariable Long id,
                                                                         @RequestBody ScheduleUpdateRequestDTO requestDTO) {
        requestDTO.setScheduleId(id);
        ScheduleAndEmployeeResponseDTO responseDTO = scheduleService.updateSchedule(requestDTO);
        if (responseDTO != null) {
            return ResponseEntity.ok(responseDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{scheduleId}/removeEmployee/{employeeId}")
    public ResponseEntity<String> removeEmployeeFromSchedule(@PathVariable Long scheduleId, @PathVariable Long employeeId) {
        scheduleService.removeEmployeeFromSchedule(scheduleId, employeeId);
        return new ResponseEntity<>("Employee removed from schedule.", HttpStatus.OK);
    }

    @DeleteMapping("/{scheduleId}")
    public ResponseEntity<String> deleteScheduleById(@PathVariable Long scheduleId) {
        scheduleService.deleteScheduleById(scheduleId);
        return new ResponseEntity<>("Schedule deleted successfully.", HttpStatus.OK);
    }


}
