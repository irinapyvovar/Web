/*1. створити функцію function expression та 
	function declaration
2. в кожну функцію передати значення (не одне)
 (функція має якось змінити його і повернути або в 
 консоль або return або alert або ....)
3. пояснити на прикладі у чому різниця 
   між function expression та function declaration
4. опрацювати значення аргументу за замовчуванням
5. опрацювати масив arguments
6. створити просту логіку перевірки аргументів 
		(наявності/значення/...)*/

function firstfunc(number1, number2, number3) {
  alert(arguments.length);
  if (number1 > number2) {
    return number1* number3;
  } else {
     return number2 * number3;
  }
}
var number1 = prompt("Введите число №1:", '');
var number2 = prompt("Bведите число №2:", '');
var number3 = prompt("Bведите число №3:", '');
number1= number1 || 4;
number2= number2 || 3;
number3= number3 || 2;
alert("Результат вычисления: " + firstfunc(number1, number2, number3));

var secfunc = function(number1, number2, number3){
	alert(arguments.length);
	if (number1 > number2) {
	  return number1 * number3;
	} else {
	   return number2 * number3;
	  } 
	}
var number1 = prompt("Введите число №1:", '');
var number2 = prompt("Bведите число №2:", '');
var number3 = prompt("Bведите число №3:", '');
number1= number1 || 4;
number2= number2 || 3;
number3= number3 || 2;
alert("Результат: " + secfunc(number1, number2, number3));

