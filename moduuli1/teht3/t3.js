const num1 = prompt('Anna numero');
const number1 = parseInt(num1);

const num2 = prompt('Anna numero');
const number2 = parseInt(num2);

const num3 = prompt('Anna numero');
const number3 = parseInt(num3);

document.querySelector('#summa').innerText = number1 + number2 + number3
;

document.querySelector('#tulo').innerHTML = number1 * number2 * number3
;

document.querySelector('#keskiarvo').innerText = (number1 + number2 + number3) /
    3
;
