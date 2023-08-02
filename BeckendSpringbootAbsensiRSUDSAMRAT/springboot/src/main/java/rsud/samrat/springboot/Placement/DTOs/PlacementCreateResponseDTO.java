package rsud.samrat.springboot.Placement.DTOs;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementCreateResponseDTO {

    private Long placement_id;
    private String name;

}

