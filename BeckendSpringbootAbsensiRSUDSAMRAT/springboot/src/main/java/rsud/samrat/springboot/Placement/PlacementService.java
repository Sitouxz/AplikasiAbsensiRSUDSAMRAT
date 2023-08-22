package rsud.samrat.springboot.Placement;

import rsud.samrat.springboot.Placement.DTOs.PlacementCreateRequestDTO;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

import java.util.List;

public interface PlacementService {
    PlacementCreateResponseDTO createPlacement(PlacementCreateRequestDTO placementCreateRequestDTO);
    PlacementCreateResponseDTO getPlacementById(Long placementId);
    List<PlacementCreateResponseDTO> getAllPlacements();
}

