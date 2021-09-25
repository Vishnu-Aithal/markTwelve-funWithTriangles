var sidesInput = document.querySelectorAll("input");
var calcHypotenuseBtn = document.querySelector(".check-btn");
var output = document.querySelector(".output")

sidesInput.forEach((side) => {
    side.oninput = (event) => {
        output.style.display = "none";
        if ((event.target.validity.valid)) {
            if (allInputsEntered()) {
                calcHypotenuseBtn.disabled = false;
            } else {
                calcHypotenuseBtn.disabled = true;
            }
        } else {
            event.target.value = "";
        }
    }
})

function allInputsEntered() {
    var entries = []
    sidesInput.forEach((side) => entries.push(side.value));
    if (entries.includes("")) {
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
    output.innerText = `The Hypotenuse side is ${hypotenuse.toFixed(2)}`;

}

calcHypotenuseBtn.addEventListener("click", calcHypotenuse);  