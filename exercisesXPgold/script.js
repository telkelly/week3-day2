// exercise-1

let sentence = ["my", "favorite", "color", "is", "blue"];
let joinArr = sentence.join(' ');

console.log(joinArr)

// exercise-2

let str1 = 'mix';
let str2 = 'pod';

let replace1 = str1.replace('x', 'd')
let replace2 = str2.replace('d', 'x')

let concatStr = replace2 + " " + replace1;
console.log(concatStr);

// exercise-3 

let num1 = window.prompt("Put your fav number");
let num2 = window.prompt("Put your other number");



let calculate = Number(num1) + Number(num2)

alert(`It's your new fav number ${calculate}`)