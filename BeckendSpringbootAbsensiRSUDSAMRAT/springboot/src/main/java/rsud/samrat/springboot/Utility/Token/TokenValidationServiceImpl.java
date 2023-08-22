package rsud.samrat.springboot.Utility.Token;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenValidationServiceImpl implements TokenValidationService {

    @Autowired
    private TokenRepository tokenRepository;


    @Override
    public TokenValidationResult validateToken(String token) {
        TokenDocument tokenDocument = tokenRepository.findByAccessToken(token);
        if (tokenDocument != null) {
            // Token is valid, return user ID (NIK)
            return new TokenValidationResult(true, tokenDocument.getNik());
        } else {
            // Token is invalid
            return new TokenValidationResult(false, null);
        }
    }
}

