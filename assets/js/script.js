//const quizQues = require("./questions");


console.log(questions)
//start with varibales 
//know you are going to have to query select the button 
//remmeber for the button need an event listener and reference button 
//query selector can reference items in a document based on classes or ideas grabs item from html 
//timer 
//keep variables at top becuase of global scope and cascade effect
//variable for current question starting at 0 
let currentQuestion = 0; //this is the start to the array of objects in the questions.js 
//in port the file 
//begin quiz


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


/*
function questionShown(){
    let ques = questions[currentQuestion]
}*/

function stopQuiz(){
    //function to stop quiz
    //the stopQuiz() in the if(timeLeft) runs whatever is in this stopQuiz function(){} 
    console.log("quiz listen")
};


function beginTimer(){
    
    beginQuiz();

    let timeCountElement = document.getElementById("timeCount"); //targeting the time count element so we can use javascript on
    //timeCountElement is a variable thats value is an element

  timer = setInterval(function(){ //setInterval is a function that takes two parameters the first fucntion is a function to tbe executed every interval and the interval is defined by the 100 ms and the second parameter is the time interval in ms
    //function is an unnamed function
    //display timer so the quiz taker can see the time left in the quiz
    //when it runs out want to see time up(timeLeft = 0)
    //quiz stops

    

    timeCountElement.textContent = "Time Left: " + timeLeft + " seconds";//the .textContent is a property fo the timeCountElement


    if(timeLeft === 0){
        timeCountElement.textContent = "Quiz Over"
        clearInterval(timer);
        stopQuiz();//executing anything in the stopQuiz function above 
    }
    timeLeft--;

console.log(timeLeft)
  }, 1000);
}; 










//function highScore(){} 


//start quiz and start timer will be the same
//getElementById is a method
// use to build the line below document.getElementById("begbtn")
let begbtn = document.getElementById("begbtn");
//assigning the btn so it can be used later such as in the line below
begbtn.addEventListener("click", beginTimer);//adding . to the element and now the element can be used to complete the job of beginQuiz





let ansbtn = document.getElementById("ansbtn");


document.getElementById("ques").innerText = questions.question




let quesOptContainer =document.getElementById("quesOptContainer"); 


//let person = ("emily") is the same as 
//let begbtn = document.getElementById("begbtn") when the code runs document.getElementById("begbtn") has the exact same as the string ("emily") only the document.getElementById("begbtn") is a differnet type of string that can do different types of things to 





//when it runs it will turn into the element logged in the console.log
//make document.getElementById("begbtn") a variable to do this assign it to a descriptive variable



console.log(document.getElementById("begbtn"));


console.log(quesOptContainer);



//.addEventListener("click", beginQuiz);

//submit quiz and stop timer will be the same
//document.getElementById("finbtn").addEventListener("click", stopTimer);
