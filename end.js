const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORE = 5;
console.log(highScore);

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup" , () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore =  e =>
{
    console.log("Click the save button!!!");
    e.preventDefault();

    const score = {
        score : mostRecentScore,
        name: username.value
    };
    highScore.push(score);

    highScore.sort( (a,b) => b.score-a.score)
    highScore.splice(5);

    localStorage.setItem("highScore",JSON.stringify(highScore));
    window.location.assign("/");
};

