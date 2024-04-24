let orderForm = document.querySelector('.order')
let allInputs = document.querySelectorAll('input')

orderForm.addEventListener('submit', event => {
	allInputs.forEach(element => {
		if (element.value === '') {
			alert('Заполните поле')
			event.preventDefault()
		}
		if (
			element.getAttribute('type' === 'tel') &&
			!+element.value &&
			element.value !== ''
		) {
			alert('Некорректный номер телефона')
			event.preventDefault()
		}
    if (element.getAttribute('type' === 'radio')) {
		}
	})
})
