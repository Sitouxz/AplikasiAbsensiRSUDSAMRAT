package rsud.samrat.springboot.Utility.Token;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TokenValidationController {

    @Autowired
    private TokenValidationService tokenValidationService;

    @PostMapping("/validate-token")
    public ResponseEntity<TokenValidationResult> validateToken(@RequestBody TokenValidationRequest request) {
        TokenValidationResult validationResult = tokenValidationService.validateToken(request.getToken());
        return ResponseEntity.ok(validationResult);
    }
}

