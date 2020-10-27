inputText.addEventListener('input', () => {
	submitBtn.disabled = !isValid(inputText.value);
	typping();
})
