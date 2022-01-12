const encInput = document.querySelector('.encInput');
const submitBtn = document.querySelector('.SubmitBtn');
const encOutput = document.querySelector('.encOutput');
const copyBtn = document.querySelector('.copyEnc1');
const alert = document.querySelector('.alert');

const copyToClip = (copyText) => {
	copyText.select(); /* Select the text field */
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	navigator.clipboard.writeText(copyText.value);
	// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
};

submitBtn.addEventListener('click', () => {
	const cipher = crypt.encrypt(encInput.value);
	encOutput.value = cipher;
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

decSubmitBtn.addEventListener('click', () => {
	const decipher = crypt.decrypt(decInput.value);
	decOutput.value = decipher;
});
copyBtn2.addEventListener('click', (e) => {
	alert2.style.display = 'block';
	setTimeout(() => {
		alert2.style.display = 'none';
	}, 1500);
	copyToClip(decOutput);
});
