


function displayHighScores(){
    let highScoresList = document.getElementById("highScoresList")

    let highScores = JSON.parse(localStorage.getItem("highScores")) || []

    highScores.forEach(function(scoreObj){
        var listItem = document.createElement("li");
        listItem.textContent = scoreObj.initials + ": " + scoreObj.score;
        highScoreList.appendChild(listItem);
    });
};

