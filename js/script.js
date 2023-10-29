// INPUT

const grid = document.querySelector(".grid");
const userInput = parseInt(prompt("quante colonne vuoi"));

const difficultySelector = document.getElementById("difficulty");
console.log( typeof difficultySelector.value);
const playBtn = document.getElementById("play-btn");

// OPTION

const hardBtn = document.getElementById("hard");
console.log(hardBtn);
const mediumBtn = document.getElementById("medium");
console.log(mediumBtn);
const easyBtn = document.getElementById("easy");
console.log(easyBtn);

/*********************************************************/

// START
playBtn.addEventListener("click", function () {
    const start = openString(userInput);    
})



if (difficultySelector.value === "hard") {
    console.log("griglia piccola");
} else if (difficultySelector.value === "medium") {
    console.log("groglia media");
} else if (difficultySelector.value === "easy") {
    console.log("groglia grande");
} 












