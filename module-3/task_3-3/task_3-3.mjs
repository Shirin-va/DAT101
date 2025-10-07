"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*  Part 1 (3 points)
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

function skrivDagensdato() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("nb-NO", { 
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return formattedDate;
}


printOut(skrivDagensdato());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*  Part 2 (20 points)
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!*/

function getTodaysDateNO() {
  const today = new Date();
  const formatted = today.toLocaleDateString("nb-NO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  printOut("🗓️ Dagens dato: " + formatted);
  printOut(newLine);

  return today; 
}


function daysUntil2XKO(fromDate) {
  const start = new Date(fromDate || new Date());
  start.setHours(0, 0, 0, 0);


  const release = new Date(2025, 4, 14);
  release.setHours(0, 0, 0, 0);

  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  return Math.ceil((release - start) / MS_PER_DAY);
}

function runPart2() {
  const today = getTodaysDateNO();
  const days = daysUntil2XKO(today);

  if (days > 0) {
    printOut(`🎮 Bare ${days} dager igjen til 2XKO!`);
  } else if (days === 0) {
    printOut("🚀 I dag er dagen! 2XKO lanseres!");
  } else {
    printOut(`🔥 2XKO er allerede ute – ${Math.abs(days)} dager siden.`);
  }

  printOut(newLine);
}

runPart2();
 
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Create a function that receives the radius of a circle and prints the diameter, circumference, and area. */

function skrivSirkelData(radius) {
  const r = Number(radius);

  
  if (!Number.isFinite(r) || r < 0) {
    printOut("Ugyldig radius. Skriv et ikke-negativt tall.");
    printOut(newLine);
    return;
  }

  const diameter = 2 * r;
  const omkrets  = 2 * Math.PI * r;
  const areal    = Math.PI * r * r;

  const f = (x) => x.toFixed(2); 

  printOut("Diameter: " + f(diameter));
  printOut("Omkrets: " + f(omkrets));
  printOut("Areal: " + f(areal));
  printOut(newLine);
}

skrivSirkelData(3.2);

printOut();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle*/

function skrivRektangelData(rect) {
  const { width, height } = rect;   
  const omkrets = 2 * (width + height);
  const areal   = width * height;

  const f = (x) => x.toFixed(2);    
  printOut("Omkrets: " + f(omkrets));
  printOut("Areal: " + f(areal));
  printOut(newLine);
}

skrivRektangelData({ width: 8, height: 7 }); 

printOut();
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*  Part 5 (12 points)
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:
*/

function konverterTemp(value, type) {
  const t = String(type).toUpperCase();
  if (!Number.isFinite(Number(value))) {
    printOut("Ugyldig temperatur.");
    printOut(newLine);
    return;
  }

  let C, F, K;

  if (t === "C") {
    C = Number(value);
    F = C * 9/5 + 32;
    K = C + 273.15;
  } else if (t === "F") {
    F = Number(value);
    C = (F - 32) * 5/9;
    K = C + 273.15;
  } else if (t === "K") {
    K = Number(value);
    C = K - 273.15;
    F = C * 9/5 + 32;
  } else {
   printOut("Ugyldig type. Bruk 'C', 'F' eller 'K'.");

    printOut(newLine);
    return;
  }

  const r = (n) => Math.round(n); 

  printOut(`Input: ${value} ${t}`);
  printOut(`${r(C)} °C`);
  printOut(`${r(F)} °F`);
  printOut(`${r(K)} K`);
  printOut(newLine);
}
konverterTemp(25, "C");   
konverterTemp(77, "F");   
konverterTemp(300, "K");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*  Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100)*/

function calcNet(gross, groupText) {
  const g = Number(gross);
  const key = String(groupText).trim().toLowerCase();

  
  let vat;
  if (key === "normal") {
    vat = 25;
  } else if (key === "food") {
    vat = 15;
  } else if (key === "hotel" || key === "transport" || key === "cinema") {
    vat = 10;
  } else {
    return NaN; 
  }

  return (100 * g) / (vat + 100);
}


function printNet(gross, groupText) {
  const net = calcNet(gross, groupText);
  if (Number.isNaN(net)) {
    printOut(`Input: ${gross} (${groupText}) → Unknown VAT group!`);
  } else {
    printOut(`Input: ${gross} (${groupText}) → Net: ${net.toFixed(2)}`);
  }
}


printNet(125, "normal");   // 25%
printNet(115, "food");     // 15%
printNet(110, "hotel");    // 10%  
printNet(999, "goblins");  // ukjent gruppe

printOut(newLine);




printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN*/

function calcSDT(speed, distance, time) {
  const s = Number(speed), d = Number(distance), t = Number(time);
  const hasS = Number.isFinite(s), hasD = Number.isFinite(d), hasT = Number.isFinite(t);
  if ((hasS?1:0) + (hasD?1:0) + (hasT?1:0) !== 2) return NaN;

  if (!hasS) return d / t;   // Speed
  if (!hasD) return s * t;   // Distance
  return d / s;              // Time
}

// Skriv ut ryddig
function showSDT(speed, distance, time) {
  const res = calcSDT(speed, distance, time);
  if (Number.isNaN(res)) {
    printOut("NaN");
  } else if (!Number.isFinite(Number(speed))) {
    printOut("Speed: " + res);
  } else if (!Number.isFinite(Number(distance))) {
    printOut("Distance: " + res);
  } else {
    printOut("Time: " + res);
  }
  printOut(newLine);
}


showSDT(undefined, 100, 4);   // Speed = 25
showSDT(10, undefined, 5);    // Distance = 50
showSDT(20, 100, undefined);  // Time = 5
showSDT(undefined, undefined, 5);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out*/

export function padText(text, maxSize, char, padBefore) {
  const str    = String(text);
  const max    = Math.trunc(Number(maxSize));
  const fill   = String(char ?? " ").slice(0, 1); // bruk kun ett tegn
  const before = Boolean(padBefore);

  // Enkel validering av maks-lengde
  if (!Number.isFinite(max) || max < 0) {
    printOut("Ugyldig maks-lengde.");
    printOut(newLine);
    return str;
  }

  // Allerede lang nok → behold som er
  if (str.length >= max) {
    printOut(str);
    printOut(newLine);
    return str;
  }

  // Fyll opp til maks
  const need   = max - str.length;
  const result = before ? fill.repeat(need) + str : str + fill.repeat(need);

  printOut(result);
  printOut(newLine);
  return result;
}

padText("hei", 8, "*", true);    // *****hei
padText("hei", 8, "*", false);   // hei*****
padText("alleredeLang", 5, ".", false);

printOut();
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15 
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!" */

export function testMathsPattern(lines = 200) {
  let cur = 1; 

  for (let n = 1; n <= lines; n++) {
    const leftLen = n + 1;
    const rightLen = n;

    
    const left = [];
    let sumL = 0;
    for (let i = 0; i < leftLen; i++) {
      const v = cur + i;
      left.push(v);
      sumL += v;
    }

    
    const rightStart = cur + leftLen;
    const right = [];
    let sumR = 0;
    for (let i = 0; i < rightLen; i++) {
      const v = rightStart + i;
      right.push(v);
      sumR += v;
    }

    if (sumL !== sumR) {
      
      printOut(`${left.join(" + ")} = ${right.join(" + ")}  (${sumL} ≠ ${sumR})`);
      printOut(newLine);
      return false;
    }

    
    cur += leftLen + rightLen;
  }

  
  printOut("Maths fun!");
  printOut(newLine);
  return true;
}



printOut(testMathsPattern(200));

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer*/

export function factorial(n) {
  const k = Number(n);

  
  if (!Number.isFinite(k) || k < 0 || !Number.isInteger(k)) {
    printOut("Invalid input: provide a non-negative integer.");
    printOut(newLine);
    return NaN;
  }

  
  function rec(x) {
    if (x === 0 || x === 1) return 1;   // basecase
    return x * rec(x - 1);              // rekursivt kall
  }

  const result = rec(k);
  printOut(`${k}! = ${result}`);
  printOut(newLine);
  return result;
}

factorial(5);  
factorial(6); 
factorial(0); 

printOut();
printOut(newLine);
