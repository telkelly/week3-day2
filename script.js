// exercise-1

let myFavFood = "mac&cheese";
let myFavMeal = "breakfast";

console.log(`I eat ${myFavFood} at every ${myFavMeal}.`);

// exercise-2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log(
  `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
);

let theBBT = myWatchedSeries.indexOf("the big bang theory");
myWatchedSeries.splice(theBBT, 1, "friends");
myWatchedSeries.push("the office");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);

console.log(myWatchedSeries[0][2]);
console.log(myWatchedSeries);

// exercise-3

let celsius = 30;
let fahrenheit = (celsius / 5) * 9 + 32;

console.log(`${celsius}°C is ${fahrenheit}°F`);

// exercise-4

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: it'll output 55 cause value a and b are numbers
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: it'll output 23 cause we changed value a to another number
// Actual: 23

//third exxpression
// value c is undefined cause we didn't put there anything

//fourth exxpresion
console.log(3 + 4 + '5')
// Prediction: it'll output 75 cause we calculate numbers and then add a string to it
// Actual: 75

// exercise-5

typeof(15)
// Prediction: number 15
// Actual: number

typeof(5.5)
// Prediction: number 5.5 
// Actual: number

typeof(NaN)
// Prediction: NaN
// Actual: undefiend

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: boolean

1 == "1"
// Prediction: true
// Actual: boolean

1 === "1"
// Prediction: false
// Actual: boolean