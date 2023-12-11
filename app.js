function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }
  
  let wins = 0;
  let losses = 0;
  let guessesLeft = 10;
  let guessesSoFar = [];
  
  let secretLetter = getRandomLetter();
  
  document.addEventListener('DOMContentLoaded', function () {
    updateDisplay();
  });
  
  document.addEventListener('keypress', function (event) {
    const userGuess = event.key.toLowerCase();
  
    if (guessesSoFar.includes(userGuess)) {
      alert('Bu herfi daha önce yazmısınız!');
      return;
    }
    guessesSoFar.push(userGuess);
    if (userGuess === secretLetter) {
      wins++;
      alert('Tebrikler! Doğru herfi buldunuz.');
      resetGame();
    } else {
      guessesLeft--;
      if (guessesLeft === 0) {
        losses++;
        alert(`Oyun hakkınız kalmadı. Doğru herf "${secretLetter}" idi.`);
        resetGame();
      }
    }
    updateDisplay();
  });
  
  function resetGame() {
    guessesLeft = 10;
    guessesSoFar = [];
    secretLetter = getRandomLetter();
  }
  
  function updateDisplay() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('Guesses-left').textContent = guessesLeft;
    document.getElementById('guesses-so-far').textContent = guessesSoFar.join(', ');
  }
  