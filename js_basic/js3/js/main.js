let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');
let operator = prompt("Enter math operator");

while (isNaN(firstNum) || !firstNum ){
    firstNum = +prompt('Enter first number');
}

while (isNaN(secondNum) || !secondNum){
    secondNum = +prompt('Enter second number');
}

function math()  {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

console.log(math())