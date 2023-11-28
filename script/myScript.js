// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const mainContainer = document.querySelector('.container');

const playButton = document.getElementById('play');

playButton.addEventListener('click', function() {

  for (let i = 1; i <= 100; i++) {

    const createSquare = document.createElement('div');

    createSquare.classList.add('square');

    mainContainer.append(createSquare);

  }

})