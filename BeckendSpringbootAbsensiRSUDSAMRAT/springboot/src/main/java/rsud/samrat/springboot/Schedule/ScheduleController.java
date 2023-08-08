package rsud.samrat.springboot.Schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleAndEmployeeResponseDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;

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
}
