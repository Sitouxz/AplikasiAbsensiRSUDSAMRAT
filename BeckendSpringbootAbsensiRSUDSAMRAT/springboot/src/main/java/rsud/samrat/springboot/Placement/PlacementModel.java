package rsud.samrat.springboot.Placement;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "placement")

public class PlacementModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long placement_id;
    private String name;


}

