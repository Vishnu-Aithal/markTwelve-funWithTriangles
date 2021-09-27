var quizForm = document.querySelector("form");
var checkBtn = document.querySelector(".check-btn");
var clearBtn = document.querySelector(".clear-btn")
var output = document.querySelector(".output")
var inputs = document.querySelectorAll("input");

inputs.forEach((input)=>input.oninput = ()=>{
    output.style.display = "none";
    checkBtn.disabled = false;
    clearBtn.disabled = false;

})

var answers = {
    Q1: "90°",
    Q2: "right angled",
    Q3: "2",
    Q4: "trigon",
    Q5: "trigonometry",
    Q6: "acute",
    Q7: "isosceles triangle"
}

function checkAnswers() {
    var userAnswers = new FormData(quizForm);
    var score = 0;
    var answerCount = 0;

    for ([Q, A] of userAnswers.entries()) {
        answerCount++;
        if (answers[Q] === A) {
            score++;
        }
    }
    if (answerCount === 0) {
        output.innerText = "Attempt atleast one Questions";
        output.style.display = "block";
    } else {
        output.innerText = `The Score is ${score}/7`;
        output.style.display = "block";
    }
}



function clearAll() {
    inputs.forEach((input)=>input.checked = false)
    clearBtn.disabled = true;
    checkBtn.disabled = true;
    output.style.display = "none";

}

checkBtn.addEventListener("click", checkAnswers)
clearBtn.addEventListener("click", clearAll)