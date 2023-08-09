package rsud.samrat.springboot.Placement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateRequestDTO;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

@RestController
@RequestMapping("/api/v1/dev/placements")
public class PlacementController {

    private final PlacementService placementService;


    @Autowired
    public PlacementController(PlacementService placementService) {
        this.placementService = placementService;
    }

    @PostMapping
    public ResponseEntity<PlacementCreateResponseDTO> createPlacement(
            @RequestBody PlacementCreateRequestDTO placementCreateRequestDTO) {
        PlacementCreateResponseDTO createdPlacement = placementService.createPlacement(placementCreateRequestDTO);
        return new ResponseEntity<>(createdPlacement, HttpStatus.CREATED);
    }


}

