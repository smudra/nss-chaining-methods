const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

//1. Sort the numbers in descending order (10, 9, 8, 7, etc).
// integers = integers.sort((a, b) => b - a);


var descendingOrder = integers.sort(function(a, b) { return b - a; });

document.getElementById("decending-order").innerHTML = descendingOrder;

console.log("sort in descending order ", descendingOrder);

//2. Remove any integers greater than 19.
var newRemoveIntegers = integers.sort(function(a, b) { return a - b; }).splice(0, 10);

console.log("New remove integers greater than 19 ", newRemoveIntegers);

document.getElementById("remove-integers").innerHTML = newRemoveIntegers;


//3. Multiply each remaining number by 1.5 and then subtract 1.
var multiplySubtract = newRemoveIntegers.map(function(a, b) { return (a * 1.5) - 1});

console.log("Multiply each remaining number by 1.5 and then subtract 1 ", multiplySubtract);

document.getElementById("multiply-subtract").innerHTML =  multiplySubtract;

//4. Then output (either in the DOM or the console) the sum of all the resulting numbers.

const totalSum = multiplySubtract.reduce((runningTotal, next) => runningTotal + next);

console.log("the sum of all the resulting numbers ", totalSum);

document.getElementById("total-sum").innerHTML = totalSum;