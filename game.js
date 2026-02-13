const guessInput = document.getElementById('guessInput')
const submitBtn = document.getElementById('submitBtn')
const message = document.getElementById('message')
const attemptsDisplay = document.getElementById('attempts')
const restartBtn = document.getElementById('restartBtn')

let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; 
const maxAttempts = 10;

function checkGuess() {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please Enter a Number between 1 & 100';
        message.style.color = '#f39c12';
        return;
    }
    attempts++; 
    if (guess === targetNumber) {
        message.textContent = `correct the number was ${targetNumber}`;
        message.style.color = '#2ecc71';
        endGame()
    } else if (attempts >= maxAttempts ){
        message.textContent = `Game Over the number was ${targetNumber}`
        message.style.color = '#e74c3c'
        endGame() 
    } else if (guess < targetNumber) {
        message.textContent = 'Too Low try again'
        message.style.color = '#e94560'
    } else {
        message.textContent = 'Too High try Lower'
        message.style.color = '#e94560'
    } 
    attemptsDelay.textContent = `attempts ${attempts}/${maxAttempts}`
    guessInput.value = ''
    guessInput.focus ();

}

function endGame(){
    guessInput.disable = true
    submitBtn.disable = true
    restartBtn.classList.remove('hidden')
}
function restarGame(){
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    attemptsDisplay.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    restartBtn.classList.add('hidden');
    guessInput.focus();
}

submitBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keydown', (event) => { 
    if (event.key === 'Enter') {
    checkGuess();
}});

restartBtn.addEventListener('click', restarGame);

guessInput.focus();
