package rsud.samrat.springboot.Locations;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;

@RestController
@RequestMapping("/api/v1/dev/locations")
public class LocationsController {

    private final LocationsService locationsService;

    @Autowired
    public LocationsController(LocationsService locationsService) {
        this.locationsService = locationsService;
    }

    @PostMapping
    public ResponseEntity<LocationsCreateResponseDTO> createLocation(@RequestBody LocationsCreateRequestDTO requestDTO) {
        LocationsCreateResponseDTO responseDTO = locationsService.createLocation(requestDTO);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }
}

