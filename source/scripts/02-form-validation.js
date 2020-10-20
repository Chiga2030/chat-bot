/**
* проверяем пустое ли поле ввода, если нет, то делаем кнопку активной
*/

const isValid = value => {
	return value.length > 0;
}

inputText.addEventListener('input', () => {
	submitBtn.disabled = !isValid(inputText.value);
})
