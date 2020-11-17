const newMessage = (text = dots, build = true, from = 'user') => {
	const html = `
		<div class='message' data-build='${build}'>
			<div class='message__avatar message__avatar_${from}'></div>
			<div class='message__buble message__buble_${from}'>${text}</div>
		</div>
	`;

	return html;
}
