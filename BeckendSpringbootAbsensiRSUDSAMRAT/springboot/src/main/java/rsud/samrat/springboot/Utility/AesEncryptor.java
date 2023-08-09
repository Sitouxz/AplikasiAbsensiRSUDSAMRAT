package rsud.samrat.springboot.Utility;

import org.bouncycastle.crypto.InvalidCipherTextException;
import org.bouncycastle.crypto.digests.SHA256Digest;
import org.bouncycastle.crypto.engines.AESEngine;
import org.bouncycastle.crypto.modes.CBCBlockCipher;
import org.bouncycastle.crypto.paddings.PKCS7Padding;
import org.bouncycastle.crypto.paddings.PaddedBufferedBlockCipher;
import org.bouncycastle.crypto.params.KeyParameter;
import org.bouncycastle.crypto.params.ParametersWithIV;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Base64;

@Component
public class AesEncryptor {

    private final SecretKey key;

    public AesEncryptor() {
        this.key = AesKeyGenerator.generateAes256Key();
    }

    public String encrypt(String plainText) throws InvalidCipherTextException {
        byte[] iv = generateIV();

        byte[] input = plainText.getBytes(StandardCharsets.UTF_8);

        PaddedBufferedBlockCipher cipher = new PaddedBufferedBlockCipher(new CBCBlockCipher(new AESEngine()), new PKCS7Padding());
        cipher.init(true, new ParametersWithIV(new KeyParameter(key.getEncoded()), iv));

        byte[] output = new byte[cipher.getOutputSize(input.length)];
        int processedBytes = cipher.processBytes(input, 0, input.length, output, 0);
        int finalBytes = cipher.doFinal(output, processedBytes);

        byte[] encryptedBytes = new byte[processedBytes + finalBytes];
        System.arraycopy(output, 0, encryptedBytes, 0, encryptedBytes.length);

        byte[] ivAndEncryptedData = new byte[iv.length + encryptedBytes.length];
        System.arraycopy(iv, 0, ivAndEncryptedData, 0, iv.length);
        System.arraycopy(encryptedBytes, 0, ivAndEncryptedData, iv.length, encryptedBytes.length);

        return Base64.getEncoder().encodeToString(ivAndEncryptedData);
    }

    private byte[] generateIV() {
        SecureRandom random = new SecureRandom();
        byte[] iv = new byte[16];
        random.nextBytes(iv);
        return iv;
    }
}
