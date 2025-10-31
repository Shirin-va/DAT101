"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let numbers
= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
    printOut(numbers[i] + newLine);
}

printOut();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join(" - "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "Hei på deg, hvordan har du det?";
let words = text.split(" "); // Deler opp teksten på mellomrom

for (let i = 0; i < words.length; i++) {
    printOut("Ord nr: " + (i + 1) + ", Index: " + i + ", Ord: " + words[i] + newLine);
}


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
             "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria",
             "Elisabeth", "Kristin"];


function removeElement(array, element) {
    let index = array.indexOf(element); 

    if (index !== -1) { 
        array.splice(index, 1); 
        printOut(element + " ble fjernet fra listen." + newLine);
    } else { 
        printOut(element + " finnes ikke i listen." + newLine);
    }
}

// 
removeElement(names, "Maria");
removeElement(names, "Olga"); // finnes ikke
printOut("Oppdatert liste: " + names.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
             "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria",
             "Elisabeth", "Kristin"];

let boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
            "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
            "Liam", "Håkon", "Theodor", "Magnus"];

// Slår sammen begge arrayene
let allNames = [].concat(girls, boys);

// Skriver ut resultatet
printOut("Alle navn (" + allNames.length + "): " + allNames.join(", ") + newLine);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    
    constructor(aTitle, aAuthor, aISBN) {
        
        this.title = aTitle;
        this.author = aAuthor;
        this.isbn = aISBN;
    }

   
    toString() {
        return "Title: " + this.title + ", Author: " + this.author + ", ISBN: " + this.isbn;
    }
}


let books = [
    new TBook("Clean Code", "Robert C. Martin", "9780132350884"),
    new TBook("Eloquent JavaScript", "Marijn Haverbeke", "9781593279509"),
    new TBook("You Don't Know JS Yet", "Kyle Simpson", "9781098124045")
];


for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString() + newLine);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" }
};

let keys = Object.keys(EWeekDays);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; 
    let day = EWeekDays[key];
    printOut("Key: " + key + " | Value: " + day.value + " | Name: " + day.name + newLine);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNums = [];
for (let i = 0; i < 35; i++) {
    randomNums.push(Math.floor(Math.random() * 20) + 1);
}

printOut("Original: " + randomNums.join(", ") + newLine);

// Stigende (callback i sort)
let ascNums = randomNums.slice().sort(function (a, b) {
    return a - b;
});
printOut("Ascending: " + ascNums.join(", ") + newLine);

// Synkende (callback i sort)
let descNums = randomNums.slice().sort(function (a, b) {
    return b - a;
});
printOut("Descending: " + descNums.join(", ") + newLine);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let frequency = {};


for (let i = 0; i < randomNums.length; i++) {
    let num = randomNums[i];
    if (frequency[num]) {
        frequency[num]++; 
    } else {
        frequency[num] = 1; 
    }
}


printOut("-- Frequency per number --" + newLine);
for (let num in frequency) {
    printOut("Number " + num + " occurs " + frequency[num] + " times" + newLine);
}


let freqArray = Object.entries(frequency);


freqArray.sort(function(a, b) {
    if (b[1] === a[1]) {
        return a[0] - b[0]; 
    }
    return b[1] - a[1]; 
});


printOut(newLine + "-- Sorted by frequency (most frequent first) --" + newLine);
for (let i = 0; i < freqArray.length; i++) {
    printOut("Number " + freqArray[i][0] + ": " + freqArray[i][1] + " times" + newLine);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let table = [];


for (let row = 0; row < 5; row++) {
    table[row] = []; 
  
    for (let col = 0; col < 9; col++) {
        table[row][col] = "Row " + (row + 1) + ", Col " + (col + 1);
    }
}

printOut("-- Part 10 ------------------------------------------------" + newLine);
printOut("Array contents (5x9):" + newLine + newLine);


for (let row = 0; row < table.length; row++) {
   
    for (let col = 0; col < table[row].length; col++) {
        printOut(table[row][col] + " | ");
    }
    printOut(newLine); 
}
printOut(newLine);
