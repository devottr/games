let score = 0;
        let timeLeft = 30;
        let timerId;
        const dot = document.getElementById('dot');
        const scoreDisplay = document.getElementById('score');
        const timerDisplay = document.getElementById('timer');
        const startButton = document.getElementById('startButton');

        function startGame() {
            score = 0;
            timeLeft = 30;
            scoreDisplay.textContent = 'Score: ' + score;
            timerDisplay.textContent = 'Time: ' + timeLeft;
            dot.style.display = 'block';
            moveDot();
            startButton.disabled = true;

            timerId = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = 'Time: ' + timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerId);
                    endGame();
                }
            }, 1000);
        }

        function moveDot() {
            const x = Math.random() * (window.innerWidth - 30);
            const y = Math.random() * (window.innerHeight - 30);
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
        }

        function endGame() {
            dot.style.display = 'none';
            alert('Game Over! Your score is: ' + score);
            startButton.disabled = false;
        }

        dot.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
            moveDot();
        });

        startButton.addEventListener('click', startGame);