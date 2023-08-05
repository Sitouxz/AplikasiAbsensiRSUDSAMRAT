package rsud.samrat.springboot.Schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
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
    public ResponseEntity<ScheduleResponseDTO> getScheduleById(@PathVariable Long id) {
        ScheduleResponseDTO responseDTO = scheduleService.getScheduleById(id);
        if (responseDTO != null) {
            return new ResponseEntity<>(responseDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping()
    public ResponseEntity<List<ScheduleResponseDTO>> getAllSchedules() {
        List<ScheduleResponseDTO> responseDTOList = scheduleService.getAllSchedules();
        if (!responseDTOList.isEmpty()) {
            return new ResponseEntity<>(responseDTOList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
