package rsud.samrat.springboot.Locations;

import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import java.util.List;

public interface LocationsService {
    LocationsCreateResponseDTO createLocation(LocationsCreateRequestDTO requestDTO);
    List<LocationsCreateResponseDTO> getAllLocations();
    LocationsCreateResponseDTO getLocationById(Long locationId);
    LocationsCreateResponseDTO updateLocation(Long locationId, LocationsCreateRequestDTO requestDTO);
    void deleteLocation(Long locationId);
}


