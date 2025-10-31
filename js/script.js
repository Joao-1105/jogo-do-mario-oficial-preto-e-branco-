const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const gameOverScreen = document.getElementById('game-over-screen');
const restartBtn = document.getElementById('restart-btn');

let isGameOver = false;

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

document.addEventListener('keydown', jump);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110 && !isGameOver) {
        isGameOver = true;


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOverScreen.classList.add('active');

        clearInterval(loop);
    }
}, 10);

restartBtn.addEventListener('click', () => {
    location.reload(); 
});
