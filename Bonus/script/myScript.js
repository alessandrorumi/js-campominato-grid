// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiarazione container elementi in Html
const mainContainer = document.querySelector('.container');

// Dichiarazione bottone Play
const playButton = document.getElementById('play');

// Dichiarazione scleta Difficoltà
const userChoice = document.getElementById('choice');

// Al click del bottone play
playButton.addEventListener('click', function() {

  let outputUserChoice = userChoice.value;

  let itemsGenerated = 0;

  if (outputUserChoice === 'easy') {
    itemsGenerated = 100;

  } else if (outputUserChoice === 'medium') {
    itemsGenerated = 81;

  } else if (outputUserChoice === 'hard') {
    itemsGenerated = 49;

  }

  for (let i = 1; i <= itemsGenerated; i++) {

    // Creazione elemento (tramite funzione)
    const myNewElement = createMyElement('div', 'square');

    // Append contenuto
    myNewElement.append(i);

    // Append elemento creato in container
    mainContainer.append(myNewElement);

    // Al click del div .square
    myNewElement.addEventListener('click', function() {
    
      myNewElement.classList.add('clicked');

      console.log([i]);
    
    });
    
  }

});



// Funzione Creazione Elementi in Html
function createMyElement(htmlElement, className) {

  const newElement = document.createElement(htmlElement);
  newElement.classList.add(className);

  return newElement;
};