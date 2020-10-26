const searchLastElement = (search) => {
	const el = document.querySelectorAll(search);

	return el[el.length-1];
}

// const lastMessage = searchLastElement('.message');
// const lastBuble = searchLastElement('.message__buble_user');
