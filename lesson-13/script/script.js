let num = +prompt("Введите число от 1 до 12");

while (num > 12 || num < 1) {
  alert("Некорректное  значение");
  num = prompt("Введите число от 1 до 12");
}

if (num < 3 || num === 12) {
  alert("Зима");
} else if (num < 6) {
  alert("Весна");
} else if (num < 9) {
  alert("Лето");
} else if (num < 12) {
  alert("Осень");
}