var sidesInput = document.querySelectorAll("input");
var calcAreaBtn = document.querySelector(".check-btn");
var output = document.querySelector(".output")

sidesInput.forEach((side) => {
    side.oninput = (event) => {
        output.style.display = "none";
        if ((event.target.validity.valid)) {
            if (allInputsEntered()) {
                calcAreaBtn.disabled = false;
            } else {
                calcAreaBtn.disabled = true;
            }
        } else {
            calcAreaBtn.disabled = true;
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

function calcArea () {
    var sides =[];
    sidesInput.forEach((side) => sides.push(Number(side.value)));
    var area = 1/2*(sides[0]*sides[1]);
    output.innerHTML = `The Area of Triangle is ${area} units²`;
    output.style.display = "block";

}

calcAreaBtn.addEventListener("click", calcArea);  