// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiarazione container elementi in Html
const mainContainer = document.querySelector('.container');

// Dichiarazione bottone Play
const playButton = document.getElementById('play');

// Al click del bottone play
playButton.addEventListener('click', function() {

  // Creazione 100 divs
  for (let i = 1; i <= 100; i++) {

    const myNewElement = createMyElement('div', 'square');

    mainContainer.append(myNewElement);

  }
});



// Funzione Creazione Elementi in HTML
function createMyElement(htmlElement, className) {

  const newElement = document.createElement(htmlElement);
  newElement.classList.add(className);

  return newElement;
};