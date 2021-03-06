var sidesInput = document.querySelectorAll("input");
var calcHypotenuseBtn = document.querySelector(".check-btn");
var output = document.querySelector(".output")

sidesInput.forEach((side) => {
    side.oninput = (event) => {
        output.style.display = "none";
        if ((event.target.validity.valid)) {
            event.target.previousValidInput = event.target.value;
            if (allInputsEntered()) {
                calcHypotenuseBtn.disabled = false;
            } else {
                calcHypotenuseBtn.disabled = true;
            }
        } else {
            event.target.value = event.target.previousValidInput;
            // calcHypotenuseBtn.disabled = true;
        }
    }
})

function allInputsEntered() {
    var entries = []
    sidesInput.forEach((side) => entries.push(Number(side.value)));
    if (entries.includes(0)) {
        return false;
    }
    return true;
}

function calcHypotenuse () {
    var sides =[];
    sidesInput.forEach((side) => sides.push(side.value));
    var sumOfSquares = 0;
    for (side of sides){
        var sideNum = Number(side)
        var sumOfSquares = sumOfSquares + Math.pow(sideNum,2);
    }
    var hypotenuse = Math.sqrt(sumOfSquares);
    output.style.display = "block";
    output.innerText = `The Hypotenuse side is ${hypotenuse.toFixed(2)} units`;

}

calcHypotenuseBtn.addEventListener("click", calcHypotenuse);  