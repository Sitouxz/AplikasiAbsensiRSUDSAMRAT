package rsud.samrat.springboot.Locations;

import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;

public interface LocationsService {
    LocationsCreateResponseDTO createLocation(LocationsCreateRequestDTO requestDTO);
}

