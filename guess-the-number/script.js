var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var result = Math.floor(Math.random() * 10) + 1; // Number between 1 and 10
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = Number(document.querySelector("#guess").value);
    if (user_guess < 1 || user_guess > 10) {
        alert("Enter a number between 1 and 10");
    } else {
        if (!guesses_num.includes(user_guess)) {
            guesses_num.push(user_guess);
            no_of_guesses++;
        }
        
        if (user_guess < result) {
            msg1.textContent = "Your Guess Is Low";
        } else if (user_guess > result) {
            msg1.textContent = "Your Guess Is High";
        } else {
            msg1.textContent = "You Won!";
            msg2.textContent = "The Number Is: " + result;
            msg3.textContent = "You Guessed It in: " + no_of_guesses + " Guesses";
            return; // End function if the user wins
        }

        msg2.textContent = "Number of Guesses: " + no_of_guesses;
        msg3.textContent = "Guessed Numbers Are: " + guesses_num.join(", ");
    }
}
