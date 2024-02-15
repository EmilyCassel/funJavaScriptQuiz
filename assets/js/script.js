//const quizQues = require("./questions");
let currentQuestion = 0; 

let currentQuestionIndex = 0;
let timeCountElement = document.getElementById("timeCount");


var timer; 
let timeLeft = 20; //amount of time want(in seconds)

function beginQuiz(){
    begbtn.classList.add("hide");
    quesOptContainer.classList.remove("hide");
    showQuestion(questionsArray[currentQuestionIndex]);
};

function showQuestion(question){
    let quesElement = document.getElementById("ques");
    let optElement = document.getElementById("options")
    // console.log(question);

   quesElement.innerText = question.question
 
   optElement.innerHTML = "";
     
    question.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function(){
            checkAnswer(option, question.correct)
       
            currentQuestionIndex++; 
            console.log(questionsArray.length)
           
            if(currentQuestionIndex < questionsArray.length){
                showQuestion(questionsArray[currentQuestionIndex]);
            } else{
                console.log("i run out of questions")
                stopQuiz();
            };
            
        });
        optElement.appendChild(button);
    });
    // console.log(options);
};

function checkAnswer(selectedOption, correctOption){
    if(selectedOption === correctOption){
        console.log("correct")
    }else {
        console.log("incorrect")
        timeLeft--
    }
}



function beginTimer(){
    beginQuiz();
     
    timer = setInterval(function(){ 
    timeCountElement.textContent = "Time Left: " + timeLeft + " seconds";

    if(timeLeft === 0){
        timeCountElement.textContent = "Quiz Over"
        stopQuiz();
    }
    timeLeft--;
  }, 1000);
}; 


function stopQuiz(){
    timeCountElement.textContent = "Your Score " + timeLeft;

    // submitHighScore(currentScore);

    clearInterval(timer);

    quesOptContainer.classList.add("hide");

    initialsInputContainer.classList.remove("hide");
}


function submitHighScore(){ 
    let currentScore = timeCountElement.innerText; 

    let initials = document.getElementById("inputBar").value;

    console.log(initials);

    console.log(currentScore);

    let highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

    highScores.push({initials:initials, currentScore:currentScore})

    localStorage.setItem("highScores", JSON.stringify(highScores));
    
    //displayHighScores();
}






// this runs when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    let begbtn = document.getElementById("begbtn");
    begbtn.addEventListener("click", beginTimer);

    let quesOptContainer =document.getElementById("quesOptContainer"); 
    
    let initialsInputContainer = document.querySelector("#initialsInputContainer");

    let submitScoreBtn = document.getElementById("submitScoreBtn"); 

    submitScoreBtn.addEventListener("click", submitHighScore)

    // console.log(initialsInputContainer);

    //document.getElementById("ques").innerText = questions.question

    let ansbtn = document.getElementById("ansbtn");
    
    // console.log(document.getElementById("begbtn"));
    
    // console.log(quesOptContainer);
    
});
