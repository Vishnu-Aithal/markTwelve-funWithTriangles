var anglesInput = document.querySelectorAll(".angle-input");
var isTrianglebtn = document.querySelector("#is-triangle-btn");
var output = document.querySelector(".output")

anglesInput.forEach((angle) => {
    angle.oninput = (event) => {
        output.style.display = "none";
        if ((event.target.validity.valid)) {
            if (allInputsEntered()) {
                isTrianglebtn.disabled = false;
            } else {
                isTrianglebtn.disabled = true;
            }
        } else {
            event.target.value = "";
        }
    }
})

function allInputsEntered() {
    var entries = []
    anglesInput.forEach((angle) => entries.push(angle.value));
    if (entries.includes("")) {
        return false;
    }
    return true;
}

function isTriangle() {
    var values = []
    anglesInput.forEach((angle) => values.push(angle.value));
    var sum = 0
    for (angle of values) {
        sum = sum + Number(angle);
    }
    if (sum === 180) {
        output.innerText = "Yay! Its a Triangle";
    } else {
        output.innerText = "Sorry! Its not a Triangle";
    }
    output.style.display = "block";
}

isTrianglebtn.addEventListener("click", isTriangle);