package rsud.samrat.springboot.Schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;

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
}
