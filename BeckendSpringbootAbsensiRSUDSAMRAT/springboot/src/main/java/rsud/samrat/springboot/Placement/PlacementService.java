package rsud.samrat.springboot.Placement;

import rsud.samrat.springboot.Placement.DTOs.PlacementCreateRequestDTO;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

public interface PlacementService {
    PlacementCreateResponseDTO createPlacement(PlacementCreateRequestDTO placementCreateRequestDTO);
}

