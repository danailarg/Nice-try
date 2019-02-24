(function() {
    "use strict";

    const wildBalls = document.querySelector("#wildBalls");
    const tamedBalls = document.querySelector("#tamedBalls");
    const balls = ["baseball", "football", "basketball"];
    let baseball = {
        counter: 0,
        name: "baseball"
    };
    let football = {
        counter: 0,
        name: "football"
    };
    let basketball = {
        counter: 0,
        name: "basketball"
    };
    const ballSpan = document.querySelector("p:last-of-type > strong");
    const button = document.querySelector("#game > button");
    const par = document.querySelectorAll(".counts > p");
    const timeSpan = document.querySelector("p:first-of-type > strong");
    const wrongColor = document.querySelector("#wrong");
    const wrongButton = document.querySelector("#wrong button");
    const gameOver = document.querySelector("#over");
    const gameOverButton = document.querySelector("#over button");
    const win = document.querySelector("#win");
    const winButton = document.querySelector("#win button");
    let time;
    let baseballCount = 0;
    let footballCount = 0;
    let basketballCount = 0;
    let startSeconds = 30;
    button.addEventListener("click", function(event) {
        start(30)
    }, {
        once: true
    });


    par.forEach(function(element) {
        const newS = document.createElement("span");
        element.appendChild(newS);
        newS.textContent = 0;
    });

    const span = document.querySelectorAll(".counts > p > span");

    for (let i = 0; i < 56; i++) {
        const ball = balls[random(3)];
        const img = document.createElement("img");

        img.src = "img/" + ball + ".png";
        img.classList.add(ball);
        img.addEventListener("click", pick, {
            once: true
        });
        if (img.classList.contains("baseball") === true) {
            baseballCount += 1;
        } else if (img.classList.contains("football") === true) {
            footballCount += 1;
        } else {
            basketballCount += 1;
        }

        wildBalls.appendChild(img);
    }

    function pick(event) {
        const img = event.target;
        if (timeSpan.textContent !== "0") {
            if (img.classList.contains(ballSpan.textContent) === true) {
                wildBalls.removeChild(img);
                tamedBalls.appendChild(img);

                if (img.classList.contains("baseball") === true) {
                    baseball.counter += 1;
                    span[0].textContent = baseball.counter;
                } else if (img.classList.contains("football") === true) {
                    football.counter += 1;
                    span[1].textContent = football.counter;
                } else {
                    basketball.counter += 1;
                    span[2].textContent = basketball.counter;
                }
            } else {
                wrongColor.classList.remove("hideIt");
                wrongButton.addEventListener("click", function() {
                    wrongColor.classList.add("hideIt");
                });
            }

            if (ballSpan.textContent == baseball.name && baseball.counter === baseballCount) {
                win.classList.remove("hideIt");
                clearInterval(time);
                winButton.addEventListener("click", function() {
                    win.classList.add("hideIt");
                    location.reload();
                });
            } else if (ballSpan.textContent == football.name && football.counter === footballCount) {
                win.classList.remove("hideIt");
                clearInterval(time);
                winButton.addEventListener("click", function() {
                    win.classList.add("hideIt");
                    location.reload();
                });
            } else if (ballSpan.textContent == basketball.name && basketball.counter === basketballCount) {
                win.classList.remove("hideIt");
                clearInterval(time);
                winButton.addEventListener("click", function() {
                    win.classList.add("hideIt");
                    location.reload();
                });
            }
        }
    }

    function random(limit) {
        return Math.floor(Math.random() * limit);
    }

    function reload() {
        location.reload();
    }

    function start(sec) {
        let seconds = sec;
        timeSpan.textContent = seconds;
        time = setInterval(run, 1000);

        function run() {
            seconds = --seconds;
            timeSpan.textContent = seconds;
            if (seconds == 0) {
                clearInterval(time);
                gameOver.classList.remove("hideIt");
                gameOverButton.addEventListener("click", function() {
                    gameOver.classList.add("hideIt");
                    location.reload();
                });
            }
        }

        ballSpan.textContent = balls[Math.floor(Math.random() * balls.length)];
    }


})();
