'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '๐ Correct Number!';

// document.querySelector('.number').textContent = 13;
// console.log(typeof (document.querySelector('.number')));
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayMessage = function (message) {
//     document.querySelector('.message').textContent=message;
// }
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof (guess));
    if (!guess)
        document.querySelector('.message').textContent = 'NO  MESSAGE ๐ด';
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '๐Correct number๐พ๐พ๐พ';

        document.querySelector('body').style.background = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                document.querySelector('.message').textContent = ' ๐ TOO high';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else if (guess < secretNumber) {
                document.querySelector('.message').textContent = '๐ Too LOW';
                score--;
                document.querySelector('.score').textContent = score;
            }
        } else {
            document.querySelector('.message').textContent = '๐ YO LOST THE GAME ๐';
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.background = 'black';
    document.querySelector('.number').style.width = '15rem';
});
