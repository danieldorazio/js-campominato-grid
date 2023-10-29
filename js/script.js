// INPUT

const grid = document.querySelector(".grid");

const difficultySelector = document.getElementById("difficulty");
const playBtn = document.getElementById("play-btn");

/*********************************************************/

// START
playBtn.addEventListener("click", function () {

    const removePrevious = cleaning(grid);

    let userInput = "";
    userInput = difficoult(difficultySelector.value);
    
    const start = openString(userInput);    
})
















