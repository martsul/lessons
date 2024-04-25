let orderForm = document.querySelector("form");
let fieldInputs = document.querySelectorAll("input");

orderForm.addEventListener("submit", event => {
	let spaceInput = false;

	fieldInputs.forEach(element => {
		if (element.value === "") {
			spaceInput = true;
			element.style.setProperty("border", "1px solid red");
			event.preventDefault();
		} else if (element.getAttribute("type") === "tel" && !+element.value) {
			element.style.setProperty("border", "1px solid red");
			alert("Некорректный номер телефона");
			event.preventDefault();
		} else {
			element.style.setProperty("border", "1px solid black");
		}

		if (element.getAttribute("type") === "checkbox" && !element.checked) {
			element.nextElementSibling.style.setProperty("color", "red");
			alert("Дайте согласие");
			event.preventDefault();
		} else {
			element.nextElementSibling.style.setProperty("color", "black");
		}
	})

	if (spaceInput) {
		alert("Пустые поля");
	}
})