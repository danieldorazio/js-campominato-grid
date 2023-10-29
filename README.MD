### ESERCIZIO

**Consegna**

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

**SOLUZIONE**

creare una selezione in html 
    - se il valore dell'opzione è === "hard" inserire una griglia di 49 caselle (7x7)
    - se il valore dell'opzione è === "medium" inserire una griglia di 81 caselle (9x9)
    - se il valore dell'opzione è === "easy" inserire una griglia di 100 caselle (10x10)

Al click del bottone play compare la griglia 

CREARE la griglia con all'interno i numeri:

    - creare un ciclo for che mi ripete questa funzione X volte 
            
            - creare un elemento 
            - creara un ciclo che mi crei un numero da inserire all'interno dell'elemento
    
        - Al click di ogni cella questa cambia colore e fa comparire un allert 

