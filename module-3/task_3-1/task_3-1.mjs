"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8) */
printOut("Task 1, 2 and 3");

let wakeUpTime = 2;

if (wakeUpTime === 2) {
  printOut("I wake up and take a shower.");
}

if (wakeUpTime === 9) {
  printOut("I can make breakfast");
}

printOut(newLine);
if (wakeUpTime === 10) {
  printOut("I can watch my favorite tv show");
} else {
  printOut("I have to wait one more week to watch it");
}

if (wakeUpTime === 7) {
  printOut("I can take the bus to school");
} else {
  printOut("I have to take the car to school");
}

if (wakeUpTime === 7){
  printOut("I can take the bus to school");
}  
else if(wakeUpTime === 8){
  printOut("I can take the train to school");
}  
else {
  printOut("I have to take the car to school");
}
printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement */

let integer = 5
if(integer>0)
printOut("positive")
else if(integer<0)
  printOut("negative")

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small" */

let imagesize = Math.floor(Math.random()*8)+1;

printOut(imagesize)
if(imagesize >= 4)
  printOut("Thank you")
else if(imagesize < 4)
  printOut("Image is too small")



printOut();
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.*/

imagesize = Math.floor(Math.random()*8)+1;

printOut(imagesize)
 if(imagesize < 4)
  printOut("Image is too small")
else if(imagesize >= 6)
  printOut("Image is too large")
else 
  printOut("Thank you")

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Print the code, Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(monthName);
if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}


printOut();
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Expand exercise 8 to print how many days there are in the current month. And do not use date object.
*/
{
 const monthList = [
    "January","February","Mars","April","Mai",
    "Jun","Juli","August","September","October","November","December"
  ];

  const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; // Feb = 28

  const index = Math.floor(Math.random() * monthList.length);
  const monthName = monthList[index];
  const days = daysInMonth[index];

  printOut(`The month of ${monthName} has ${days} days`);
}

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month*/

if(monthName ==="Mars")
  printOut("closed")
else if(monthName ==="Mai")
  printOut("closed")
else if(monthName === "April")
  printOut("next door")
else printOut("Open")

printOut();
printOut(newLine);
