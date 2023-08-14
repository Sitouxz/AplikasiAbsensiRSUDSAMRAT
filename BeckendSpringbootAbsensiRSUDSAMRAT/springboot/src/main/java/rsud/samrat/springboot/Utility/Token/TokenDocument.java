package rsud.samrat.springboot.Utility.Token;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admins")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenDocument {

    @Id
    private String id;
    private String nik;
    private String password;
    private String access_token;

}

