// function makeDecrementor() {
//   let currentCount = 0;

//   return function() {
//     return currentCount++;
//   };
// }

function scrollToBottom(scrollElem) {
	const curentHeight = scrollElem.scrollHeight;

	scrollElem.scrollTop = curentHeight;
}

