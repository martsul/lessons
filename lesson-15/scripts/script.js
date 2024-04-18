let orderForm = document.querySelector(".order")

orderForm.addEventListener("submit", event => {
  let textInput = orderForm.querySelectorAll("input")
  console.log(textInput);
  event.preventDefault();
})
