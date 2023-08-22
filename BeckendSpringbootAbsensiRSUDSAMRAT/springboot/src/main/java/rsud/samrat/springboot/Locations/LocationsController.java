package rsud.samrat.springboot.Locations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<LocationsCreateResponseDTO>> getAllLocations() {
        List<LocationsCreateResponseDTO> locations = locationsService.getAllLocations();
        return ResponseEntity.ok(locations);
    }

    @GetMapping("/{locationId}")
    public ResponseEntity<LocationsCreateResponseDTO> getLocationById(@PathVariable Long locationId) {
        LocationsCreateResponseDTO location = locationsService.getLocationById(locationId);
        return ResponseEntity.ok(location);
    }

    @PutMapping("/{locationId}")
    public ResponseEntity<LocationsCreateResponseDTO> updateLocation(
            @PathVariable Long locationId,
            @RequestBody LocationsCreateRequestDTO requestDTO) {
        LocationsCreateResponseDTO updatedLocation = locationsService.updateLocation(locationId, requestDTO);
        return ResponseEntity.ok(updatedLocation);
    }

    @DeleteMapping("/{locationId}")
    public ResponseEntity<Void> deleteLocation(@PathVariable Long locationId) {
        locationsService.deleteLocation(locationId);
        return ResponseEntity.noContent().build();
    }
}


