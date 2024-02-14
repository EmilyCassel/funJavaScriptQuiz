//const quizQues = require("./questions");


console.log(questions)

let currentQuestion = 0; 



quesOptContainer.classList.add("hide");


function beginQuiz(){
    begbtn.classList.add("hide");
    quesOptContainer.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
}



function showQuestion(question){
   ques.innerText = questions.question
   
   question.options.forEach(answer => {
    const ansbtn = document.createElement("ansbtn")
    ansbtn.innerText = answer.text;
    if(answer.correct){
        ansbtn.dataset.correct = answer.correct;     
    }
    ansbtn.addEventListener("click", selectOption); 
  
   })
}


//next question 
function answerQuestion(){
    
}



var timer; //this is declaring the timer variable. set globally so can stop the timer when needed

let timeLeft = 10;




function stopQuiz(){

    console.log("quiz listen")
};


function beginTimer(){
    
    beginQuiz();

    let timeCountElement = document.getElementById("timeCount"); 

  timer = setInterval(function(){ 

    

    timeCountElement.textContent = "Time Left: " + timeLeft + " seconds";


    if(timeLeft === 0){
        timeCountElement.textContent = "Quiz Over"
        clearInterval(timer);
        stopQuiz();
    }
    timeLeft--;

console.log(timeLeft)
  }, 1000);
}; 













let begbtn = document.getElementById("begbtn");
begbtn.addEventListener("click", beginTimer);





let ansbtn = document.getElementById("ansbtn");


document.getElementById("ques").innerText = questions.question




let quesOptContainer =document.getElementById("quesOptContainer"); 



console.log(document.getElementById("begbtn"));


console.log(quesOptContainer);



