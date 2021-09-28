const accordion = (triggersSelector) => { //+ itemsSelector если через css
	const btns = document.querySelectorAll(triggersSelector);
	// ----с помощью js----
	btns.forEach(btn => { //html коллекция 
		btn.addEventListener('click', function () {
			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');

			if (this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});

	// ----с помощью css----
	//   blocks = document.querySelectorAll(itemsSelector);

	// blocks.forEach(block => {
	//     block.classList.add('animated', 'fadeInDown');
	// });

	// btns.forEach(btn => {
	//     btn.addEventListener('click', function() {
	//         if (!this.classList.contains('active')) {
	//             btns.forEach(btn => {
	//                 btn.classList.remove('active', 'active-style');
	//             });
	//             this.classList.add('active', 'active-style');
	//         }
	//     });
	// });
};

export default accordion;