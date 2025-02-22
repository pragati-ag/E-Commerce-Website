// js for toggle menu

var MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '210px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}

//js for toggle form

var LoginForm = document.getElementById('LoginForm');
var RegForm = document.getElementById('RegForm');
var Indicator = document.getElementById('Indicator');

function register() {
  RegForm.style.transform = 'translateX(0px)';
  LoginForm.style.transform = 'translateX(0px)';
  Indicator.style.transform = 'translateX(100px)';
}
function login() {
  RegForm.style.transform = 'translateX(300px)';
  LoginForm.style.transform = 'translateX(300px)';
  Indicator.style.transform = 'translateX(0px)';
}

// js for product gallery

var ProductImg = document.getElementById('ProductImg');
var SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};

// let info = {
//   fName: 'Pragati',
//   lName: 'Agrawal',
//   age: 22
// };

// console.log(info);
// console.log(info.age);

// let fruits = ['mango', 'banana', 'papaya'];
// console.log(fruits);

// fruits.push('dragonfruit');
// console.log(fruits[0]);
// console.log(fruits);

// let age = 15;

// if (age === 25) {
//   console.log("Hi!You're eligible");
// } else if (age > 20) {
//   console.log("Sorry!You're not eligible");
// } else {
//   console.log('Sorry!');
// }

// let num = 18;

// switch(num) {
//   case 17:
//     console.log('no is 17');
//     break;
//   case 20:
//     console.log('no is correct');
//     break;
//   case 22:
//     console.log('no is 22');
//     break;
//   case 25:
//     console.log('no is 25');
//     break;
//   default:
//     console.log('no is not correct');
//     break;
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i, "Hi! I'm here to say that you are valid!");
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i, "Hello World");
// }

// let fruits = [
//   'Apple',
//   'Mango',
//   'Papaya',
//   'Banana',
//   'Watermelon',
//   'Litchi',
//   'Strawberry',
//   'Dragonfruit',
//   'Kiwi',
// ];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let x = 0;
// while(x < fruits.length) {
//   console.log(fruits[x]);
//   x++;
// }

// let codingLang = ['HTML', 'CSS', 'javaScript'];

// function getElement(myArray) {
//   for (f of myArray) {
//     console.log(f);
//   }
// }

// getElement(fruits);
// getElement(codingLang);

// const sum = (num1, num2, num3) => {
//   const sum = num1 + num2 + num3;
//   console.log(sum);
// };

// sum(12, 13, 45);

// Coding challenge 1 :- Find The Simple Interset.

// function simpleInterest(p, r, t) {
//   return (p * r * t) / 100;
// }

// console.log(simpleInterest(300000, 2, 9));

// Coding challenge 2 :- Sum of list of numbers.

// function sum(...num) {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i];
//   }
//   return total;
// }

// console.log(sum(1, 2, 6, 8, 89, 76.6, 8, 7, 900));

// Coding challenge 3 :- Print a table.

// function myTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num * i}`);
//   }
// }

// myTable(12);

// Coding challenge 4 :- Average of Array.

// function average(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// console.log(average([1, 16, 39, 89, 24, 43, 67, 65]));

// Coding challenge 5 :- Find a number in Array.

// function findNumInArray(num, numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (num === numbers[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findNumInArray(5, [35, 34, 57, 8, 15, 9, 10]));

// Coding challenge 6 :- Get Positive Number from Array.

// function positiveNumInArray(numbers) {
//   let positiveNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       positiveNumbers.push(numbers[i]);
//     }
//   }
//   return positiveNumbers;
// }

// console.log(positiveNumInArray([0, 1, 4, 6, -7, -9, 10, -34, 56]));

// Coding challenge 7 :- Get Negative Number from Array.

// function negativeNumInArray(numbers) {
//   let negativeNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       negativeNumbers.push(numbers[i]);
//     }
//   }
//   return negativeNumbers;
// }

// console.log(negativeNumInArray([2, -4, -7, 8, 9, -67, -9, 0, -234, 23, -78]));

// Coding challenge 8 :- Find Largest Number.

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (largestNumber < numbers[i]) {
//       largestNumber = numbers[i];
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([1, 3, 6, 8, -9, 34, 89, 65, 45, 5]));

// Coding challenge 9 :- FizzBuzz.

// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (num % 3 === 0) {
//     console.log('Fizz');
//   } else if (num % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(num);
//   }
// }

// fizzBuzz(15);

// Coding challenge 10 :- Reverse an Array.

// function reverseAnArray(array) {
//   let reversedArray = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }

//   return reversedArray;
// }

// let array1 = [2, 7, 8, 9, 10, 35, 78];
// console.log(reverseAnArray(array1));

// Coding challenge 11 :- Reverse a String.

// function reverseAString(array) {
//   let reversedString = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedString.push(array[i]);
//   }

//   return reversedString;
// }

// let array1 = ['Priya', 'emma', 'smith', 'golu', 'dunith'];
// console.log(reverseAString(array1));

// Coding challenge 12 :- Merge An Array.

// function mergeAnArray(firstArray, secondArray) {
//   let mergedArray = [];
//   for (element of firstArray) {
//     mergedArray.push(element);
//   }
//   for (element of secondArray) {
//     mergedArray.push(element);
//   }

//   return mergedArray;
// }

// let firstArray = [1, 4, 7.9, 6, 9, 0];
// let secondArray = [2.9, 5, 7, 91, 34];

// console.log(mergeAnArray(firstArray, secondArray));

//Concat two Arrays(Concat Method).

// let petAnimal = ['cat', 'dog', 'rabbit', 'mouse'];
// let wildAnimal = ['lion', 'elephant', 'tiger', 'snake'];

// let animal = petAnimal.concat(wildAnimal);

// console.log(animal);

//Check if element exists(Includes method).

// let array = ['kushi', 'roshini', 'rohit', 'romil'];

// let isPresent = array.includes('ronit');

// console.log(isPresent);

//Find the index of element.

// let array = [3, 7, 9, 8, 2, 5];

// let index = array.indexOf(18);

// console.log(index);

//Reverse an Array.

// let array = [22, 71, 40, 65, 42, 34];

// array.reverse();

// console.log(array);

//Convert an Array to String.

// let array = [2, 8, 5, 6, 12, 24];

// let myString = array.toString();

// console.log(array);
// console.log(myString);

// Math.random();
// var dec = Math.random();
// console.log(dec);
// console.log(dec * 5);

// var Bike = {};
// Bike.color = 'Matte Black';
// Bike.Model = 7897;
// Bike.Mileage = function () {
//   console.log('The engine is ruuning good');
//   console.log('You have a good mileage');
// };
// console.log(Bike);
// Bike.Mileage();

// using typeof
