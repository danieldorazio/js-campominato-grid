// INPUT

const grid = document.querySelector(".grid");


const difficultySelector = document.getElementById("difficulty");
const playBtn = document.getElementById("play-btn");

// OPTION

// const hardBtn = document.getElementById("hard");
// console.log(hardBtn);
// const mediumBtn = document.getElementById("medium");
// console.log(mediumBtn);
// const easyBtn = document.getElementById("easy");
// console.log(easyBtn);

/*********************************************************/

// START
playBtn.addEventListener("click", function () {
    let userInput = "";

    if (difficultySelector.value === "hard") {
        userInput += 49;

        console.log(userInput);
    }else if (difficultySelector.value === "medium") {
        userInput += 81;
        console.log(difficultySelector.value);
    }else if (difficultySelector.value === "easy") {
        userInput += 100;
        console.log(difficultySelector.value);
    }
    
    const start = openString(userInput);    
})















