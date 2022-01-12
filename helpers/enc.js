// https://code-boxx.com/simple-javascript-password-encryption-decryption/
const crypt = {
	// (B1) THE SECRET KEY
	secret: 'ThisIsASecret',

	// (B2) ENCRYPT
	encrypt: function (clear) {
		let cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
		cipher = cipher.toString();
		return cipher;
	},

	// (B3) DECRYPT
	decrypt: function (cipher) {
		let decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
		decipher = decipher.toString(CryptoJS.enc.Utf8);
		return decipher;
	}
};

//   // (C) TEST
//   // (C1) ENCRYPT CLEAR TEXT
//   let cipher = crypt.encrypt("FOO BAR");
//   console.log(cipher);

//   // (C2) DECRYPT CIPHER TEXT
//   let decipher = crypt.decrypt(cipher);
//   console.log(decipher);

