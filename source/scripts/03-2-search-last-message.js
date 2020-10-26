const searchLastElement = (search) => {
	const el = document.querySelectorAll(search);

	return el[el.length-1];
}
