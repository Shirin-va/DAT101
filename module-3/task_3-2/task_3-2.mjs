"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

let textPart1Line1 = "";
let textPart1Line2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  textPart1Line1 += " " + i;
  textPart1Line2 += " " + j;
}

printOut(textPart1Line1);
printOut(textPart1Line2);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/

const part1GuessNumber = 45;
let part1Random = Math.floor(Math.random() * 60) + 1;
while (part1Random !== part1GuessNumber) {
  part1Random = Math.floor(Math.random() * 60) + 1;
}
printOut("Yes! you guessed correct: " + part1Random);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/

const part3Time = Date.now();
printOut(part3Time);
const part3GuessNumber = 654321;
let part3Random;
let part3Count = 0;
do {
  part3Random = Math.floor(Math.random() * 1000000) + 1;
  part3Count++;
} while (part3Random !== part3GuessNumber);

printOut("number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time;
printOut("number of mSec: " + part3DeltaTime);

printOut();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

let textPart4Primes = "";
for (let i = 1; i < 200; i++) {
  let j = i - 1;
  let isPrime = true;
  while (j > 1 && isPrime) {
    let rest = i % j;
    isPrime = rest != 0;
    j--;
  }
  if (isPrime) {
    textPart4Primes += " " + i;
  }
}
printOut(textPart4Primes);

printOut();
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*  Part 5 Nested Loops & Patterns (15 points)
Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/

   for (let r = 1; r <= 7; r++) {           
  let line = "";
  for (let k = 1; k <= 9; k++) {         
    line += `K${k}R${r} `;
  }
  printOut(line.trim());                  
  printOut(newLine);                      
}

printOut();
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

for (let i = 1; i <= 5; i++) {
  
  let points = Math.floor(Math.random() * 236) + 1;

  
  let percent = (points / 236) * 100;

  
  let grade;
  if (percent >= 89) grade = "A";
  else if (percent >= 77) grade = "B";
  else if (percent >= 65) grade = "C";
  else if (percent >= 53) grade = "D";
  else if (percent >= 41) grade = "E";
  else grade = "F";

  
  printOut(`Student ${i}: ${points} points (${percent.toFixed(2)}%) → Grade ${grade}`);
  printOut(newLine);
}

printOut();
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Part 7 Dice Rolling Extravaganza (20 points)
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

function rollDice() {
  let dice = [];
  for (let i = 0; i < 6; i++) {
    dice.push(Math.floor(Math.random() * 6) + 1);
  }
  return dice;
}

function getFrequencies(dice) {
  let freq = {};
  for (let d of dice) {
    freq[d] = (freq[d] || 0) + 1;
  }
  return freq;
}

let throws1 = 0, found1 = false;
do {
  throws1++;
  let dice = rollDice().sort((a, b) => a - b);
  if (JSON.stringify(dice) === JSON.stringify([1,2,3,4,5,6])) {
    found1 = true;
  }
} while (!found1);
printOut(`Full straight (1-6): ${throws1} throws`);
printOut(newLine);

let throws2 = 0, found2 = false;
do {
  throws2++;
  let dice = rollDice();
  let freq = Object.values(getFrequencies(dice));
  if (freq.length === 3 && freq.every(f => f === 2)) {
    found2 = true;
  }
} while (!found2);
printOut(`3 pairs: ${throws2} throws`);
printOut(newLine);

let throws3 = 0, found3 = false;
do {
  throws3++;
  let dice = rollDice();
  let freq = Object.values(getFrequencies(dice));
  if (freq.includes(4) && freq.includes(2)) {
    found3 = true;
  }
} while (!found3);
printOut(`Tower (4+2): ${throws3} throws`);
printOut(newLine);

let throws4 = 0, found4 = false;
do {
  throws4++;
  let dice = rollDice();
  if (dice.every(val => val === dice[0])) {
    found4 = true;
  }
} while (!found4);
printOut(`Yahtzee (all same): ${throws4} throws`);
printOut(newLine);

printOut();
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
