var quizForm = document.querySelector("form");
var checkBtn = document.querySelector(".check-btn");
var output = document.querySelector(".output")

var answers = {
    Q1:"90°",
    Q2:"right angled",
    Q3:"2",
    Q4:"trigon",
    Q5:"trigonometry",
    Q6:"acute",
    Q7:"isosceles triangle"
}

function checkAnswers(){
    var userAnswers = new FormData(quizForm);
    var score = 0;
    for([Q , A] of userAnswers.entries()){
        if(answers.Q === A){
            score++;
        }
    }
    output.innerText = `The Score is ${score}`;
    output.style.display = "block";
}

checkBtn.addEventListener("click", checkAnswers)