const encInput = document.querySelector('.encInput');
const submitBtn = document.querySelector('.SubmitBtn');
const encOutput = document.querySelector('.encOutput');
const copyBtn = document.querySelector('.copyEnc1');
const alert = document.querySelector('.alert');
const secKeyInp = document.querySelector('.secret');

const copyToClip = (copyText) => {
	copyText.select(); /* Select the text field */
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	navigator.clipboard.writeText(copyText.value);
	// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
};

submitBtn.addEventListener('click', () => {
	console.log(encInput.value);
	if (encInput.value !== '') {
		crypt.secret = secKeyInp.value;
		const cipher = crypt.encrypt(encInput.value);
		if (cipher !== '') {
			encOutput.value = cipher;
		} else {
			encOutput.value = 'Not a valid input!';
		}
	} else {
		encOutput.value = 'Not a valid input!';
	}
});
copyBtn.addEventListener('click', () => {
	alert.style.display = 'block';
	setTimeout(() => {
		alert.style.display = 'none';
	}, 1500);
	copyToClip(encOutput);
});

const decInput = document.querySelector('.decInput');
const decSubmitBtn = document.querySelector('.decSubmitBtn');
const decOutput = document.querySelector('.decOutput');
const copyBtn2 = document.querySelector('.copyEnc2');
const alert2 = document.querySelector('.alert2');
const oldSec = document.querySelector('.oldSecret');

decSubmitBtn.addEventListener('click', () => {
	crypt.secret = oldSec.value;
	const decipher = crypt.decrypt(decInput.value);
	if (decipher !== '') {
		decOutput.value = decipher;
	} else {
		decOutput.value = 'Not a valid key or secret!';
	}
});
copyBtn2.addEventListener('click', (e) => {
	alert2.style.display = 'block';
	setTimeout(() => {
		alert2.style.display = 'none';
	}, 1500);
	copyToClip(decOutput);
});
