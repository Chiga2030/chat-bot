function  searchLastElement( search, into = document ) {
	const el = into.querySelectorAll(search);

	return el[el.length-1];
}
