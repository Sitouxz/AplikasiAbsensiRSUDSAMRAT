package rsud.samrat.springboot.Utility.Token;


public class TokenValidationResult {
    private boolean valid;
    private String userId;

    public TokenValidationResult(boolean valid, String userId) {
        this.valid = valid;
        this.userId = userId;
    }

    public boolean isValid() {
        return valid;
    }

    public String getUserId() {
        return userId;
    }
}

