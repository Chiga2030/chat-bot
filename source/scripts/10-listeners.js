inputText.addEventListener('input', () => {
	submitBtn.disabled = !isValid(inputText.value);
})

inputText.addEventListener('focus', () => {
	userBuble[userBuble.length-1].classList.add('message__buble_user_has-tail');
})

inputText.addEventListener('blur', () => {
	userBuble[userBuble.length-1].classList.remove('message__buble_user_has-tail');
})

inputText.addEventListener('click', () => {

})
