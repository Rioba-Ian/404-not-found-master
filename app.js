const stepdown = document.querySelectorAll(".step-down")
const stepUp = document.querySelectorAll(".step-up")
stepdown.forEach((item) => {

    item.addEventListener("click", reduceAmount)
})




function reduceAmount(inputEle) {
    inputEle--

    console.log(inputEle)
}

console.log(stepdown)