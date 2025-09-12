"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Ans=(2) + (3) * (2 - 4) * 6;
printOut("(2 + 3) * 2 - 4 * 6 = "+ part1Ans);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters = 25000 + 340;
const inchPrMillimeters = 25.4;
let sumPart2 = millimeters / inchPrMillimeters;
sumPart2 = sumPart2.toFixed(2);
printOut("25 metres and 34 centimeters is" + sumPart2 + "inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes!*/
const part3Days = 3, part3Hours = 14, part3Minutes = 14, part3Seconds = 34;
let part3Answer =
(part3Days * 24 * 60) +
(part3Hours * 60 ) + 
part3Minutes +
(part3Seconds / 60);
part3Answer = part3Answer.toFixed(2);
printOut("3 days, 12 hours, 14 minutes, and 45 second is"+ part3Answer + "minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds */
const part4Minutes = 6322.52;
let part4Rest = part4Minutes / (24 * 60);
const part4Days = Math.floor(part4Rest);
part4Rest = part4Rest - part4Days;
part4Rest = part4Rest * 24;
const part4Hours =Math.floor(part4Rest);
part4Rest = part4Rest - part4Hours;
part4Rest = part4Rest * 60;
const part4Minute = Math.floor(part4Rest);
part4Rest -= part4Minute;
part4Rest *= 60;
const part4Seconds = Math.floor (part4Rest);

printOut("6,322.52 minutes is" + 
part4Days + " days, " +
part4Hours + " hours, " + 
part4Minute + " minutes, " +
part4Seconds + " seconds"
);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner */
const usd = 54;
const nok = 54;

const usdToNokRate = 76 / 8.6;
const nokToUsdRate = 8.6 / 76;

let usdToNok = Math.round(usd * usdToNokRate);
let nokToUsd = Math.round(nok * nokToUsdRate);


printOut(`54 USD → ${usdToNok} NOK`);
printOut(`54 NOK → ${nokToUsd} USD`);

(printOut);
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* There is much between heaven and earth that we do not understand. */
const text = "There is much between heaven and earth that we do not understand.";
printOut(66);
printOut("h");
printOut("earth th");
printOut(31);

printOut();
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):*/
printOut(String(5 > 3));
printOut(String(7 >= 7));
printOut(String("a" > "b"));
printOut(String("1" < "a"));
printOut(String("2500" < "abcd"));
printOut(String("arne" != "thomas"));
printOut(String(2 == 5));
printOut(String("abcd" > "bcd"));

printOut();
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:*/

printOut(Number("254"));        
printOut(Number("57.23"));      
printOut(Number("25 kroner"));


printOut();
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/
let r = Math.floor(Math.random() * 360) + 1;
printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days.*/
let days = 131;
let weeks = Math.floor(days / 7);
let restDays = days % 7;
printOut("Weeks:" + weeks);
printOut("Days:" + restDays);

printOut();
printOut(newLine);