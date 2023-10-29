/**FUNZIONE difficult
 * funzione che in base al valore della opzione di difficolta varia la grandezza della tabella 
 * @param {valore} difficultOption
 * @returns {number} grandezza della tabella
 */
function difficoult(difficultOption) {
    let result = "";
    if (difficultOption === "hard") {
        result += 49;        
    }else if (difficultOption === "medium") {
        result += 81;
    }else if (difficultOption === "easy") {
        result += 100;
    }
    
    return result;
}


/**FUNZIONE openString
 * fuznione che prende in interno il valore di celle che si voglio creare e apre in risposta l'array con gli elementi all'interno 
 * @param {numberInput} numberInput
 * @returns {elements} elementi inseriti nel DOM con append
 */
function openString(numberInput) {

    const numberCell = numberGeneretor(numberInput);

    for (let i = 0; i < numberCell.length; i++) {
        const element = numberCell[i];
        element.addEventListener("click", function () {
            this.classList.add("bianco")
            alert(this.textContent)  
        })
        grid.append(element); 
    }    
}


/**FUNZIONE gridGenerator
 * funzione ciclica che crea un elemento HTML X volte 
 * @param {number} gridNumber numero di elementi che si voglio creare 
 * @returns {element} elementi creati 
 */
function gridElem(gridNumber) {
    const gridElem = document.createElement("div");
    gridElem.classList.add("cell");
    if (difficultySelector.value === "hard") {
        gridElem.classList.add("hard");
        console.log("griglia piccola");
        
    } else if (difficultySelector.value === "medium") {
        gridElem.classList.add("medium");
        console.log("groglia media");
    } else if (difficultySelector.value === "easy") {
        gridElem.classList.add("easy");
        console.log("groglia grande");
    } 
    gridElem.innerHTML = gridNumber;
    return gridElem;    
}


/**FUNZIONE numberGenerator
 * funzione che crea una stringa di numeri di X lunghezza e poi la apre per prenderegli singoli numeri
 * @param {number} maxNumber valore quantità di numeri 
 * @returns {number} 
 */
function numberGeneretor(maxNumber) {
    // per creare nuemro da inserire nell'elemento
    const numberElements = [];
    for (let i = 1; i <= maxNumber; i++) {
        const element = gridElem(i);
        numberElements.push(element)
    }
    return numberElements  
}