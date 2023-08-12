package rsud.samrat.springboot.Locations.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationsCreateRequestDTO {
        private String locationName;
        private Double latitude;
        private Double longitude;
}
