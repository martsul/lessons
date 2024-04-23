let sumArray = [];
let endSum = 0;
let tempNum = prompt("Введите число");

while (Boolean(+tempNum) || tempNum === "0") {
		sumArray.push(+tempNum);
		tempNum = prompt('Введите число')
}

sumArray.forEach(element => endSum += element);

alert(endSum);