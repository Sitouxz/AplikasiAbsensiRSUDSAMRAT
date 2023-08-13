package rsud.samrat.springboot.Utility.Token;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TokenRepository extends MongoRepository<TokenDocument, String> {
    @Query("{'access_token' : ?0}")
    TokenDocument findByAccessToken(String access_token);
}


