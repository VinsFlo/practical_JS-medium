const mask = (selector) => {

	let setCursorPosition = (pos, elem) => { //полифил позиции курсора
		elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};

	function createMask(event) {
		let matrix = '+7 (___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''), //статичное, работает на основе матрицы
			val = this.value.replace(/\D/g, ''); //динамичное, работает на основе того, что ввел пользователь

		if (def.length >= val.length) { //если кол-во символов, которые есть в матрице, больше количества цифр, котоыре ввел пользователь, это не дает пользователю удалить "+7"
			val = def;
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a; //по всем элементам выполнится коллбэк функция
		});

		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});
};

export default mask;