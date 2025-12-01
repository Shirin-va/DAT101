"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1Calculateclick(){
const txtTask1Output = document.getElementById("txtTask1Output");
const txtRectHeight = document.getElementById("txtRectHeight");
const txtRectWidth = document.getElementById("txtRectWidth");
const width = parseInt(txtRectWidth.value);
const height = parseInt(txtRectHeight.value);

txtTask1Output.innerHTML = `width: ${width}, height: ${height}`;
txtTask1Output.innerHTML += `<br/>area: ${area}. perimeter: ${perimeter}`;

}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
console.log(cmbTask1Calculate);
cmbTask1Calculate.onclick = cmbTask1Calculateclick;

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function txtTask2WordKeyPress(){
  const txtTask2Output = document.getElementById("txtTask20Output");
  //txtTask2Output.innerHTML = `You pressed the key: ${addEventListener.key}`;
  if(addEventListener.key === "Enter"){
    const word = txtTask2Word.value;
    task2Words.push(word);
    txtTask2Output.innerHTML = `You have entered ${task2Words.length} words: <br/`;
    txtTask2Output.innerHTML += task2Words.join(", ");
    txtTask2Word.value = "";
  }
}

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
const task2Words = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask30Output");
function cmbTask3CheckAnswerClick(){
  for(let i = 0; i < chkTask3.length; i++){
    const chkBoc = chkTaske3[i];
    console.log(`chkTask3[${i}].checked = ${chkBox.checked}`);
    txtTask3Output.innerHTML += text + "<br/>";
  }

}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function rdbCarNameSelect(aEvent){
  const txtTask4Output = document.getElementById("txtTask4Output");
  txtTask4Output.innerHTML =
  `User select car type number: ${aEvent.target,value}`
  ;
}



for(let i = 0; i < CarTypes.length; i ++){
  const car = CarTypes[i];
  const inpRadio = document.createElement("input");
  inpRadio.type = "radio";
  inpRadio.name = "rdbCarName";
  inpRadio.value =car.value;
  inpRadio.id = "rdbCardName" + i.toString();
  inpRadio.addEventListener("")
  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendchild(inpRadio.Radio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createElement("br"));



  console.log (`CarTypes[${i}.value = ${car.value}, CarTypes[${i}.caption = ${car.caption}`);

}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.
*/

document.getElementById("selectTask5Animals").addEventListener("change", function () {
    const userChoice = this.value; 
    document.getElementById("txtTask5Output").textContent = "You selected: " + userChoice;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output*/

const dropdownGirls = document.getElementById("selectTask6Girls");
const outputGirls = document.getElementById("txtTask6Output");

GirlsNames.forEach(function (name) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdownGirls.appendChild(option);
});

dropdownGirls.addEventListener("change", function () {
    outputGirls.textContent = "You selected: " + this.value;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/  

const selectMovieGenre = document.getElementById("selectMovieGenre");

MovieGenre.forEach(function (genre) {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
});


let movieCounter = 1;

const btnAddMovie = document.getElementById("cmbAddMovie");
const tblMovies   = document.getElementById("tblMovies");   

btnAddMovie.addEventListener("click", function () {
    const title    = document.getElementById("txtMovieTitle").value;
    const genre    = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("txtMovieDirector").value;
    const rate     = document.getElementById("txtMovieRate").value;

    const row = tblMovies.insertRow(-1); 

    row.insertCell(0).textContent = movieCounter++;
    row.insertCell(1).textContent = title;
    row.insertCell(2).textContent = genre;
    row.insertCell(3).textContent = director;
    row.insertCell(4).textContent = rate;
});