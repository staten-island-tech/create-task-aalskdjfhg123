const dom = {
    hard: document.querySelector("#hard"),
    impossible: document.querySelector("#impossible"),
    lunatic: document.querySelector("#lunatic"),
    gen: document.querySelector("#gen"),
    buttons: document.querySelectorAll(".buttons")
}
let buttons = document.querySelectorAll(".diff")
let difficulty;
let previousNumber;

buttons.forEach((button) => button.addEventListener("click", function () {
    return difficulty = button.textContent.toLowerCase()

}))
dom.gen.addEventListener("click", function () {
/*     console.log(difficulty)
 */    if (difficulty === "hard") {
        generateNumbershard()
    } else if (difficulty === "impossible") {
        generateNumbersimpossible()
    } else {
        generateNumberslunatic()
    }
})

let num = []


function generateNumbershard() {
    let random = Math.floor(Math.random() * 1000000) + 1
    for (let i = 0; i < num.length; i++) {
        if (num[i] === random) {
            console.log(num[i], "win")
        }
    }
    num.push(random)
    console.log(random)
}

function generateNumbersimpossible() {
    let random = Math.floor(Math.random() * 1000000) + 1;

    if (random === previousNumber) {
        console.log(random, "win")
    }
    console.log(random)
    previousNumber = random
}
function generateNumberslunatic() {
    let random = Math.floor(Math.random() * 1000000000) + 1;

    if (random === previousNumber) {
        console.log(random, "win")
    }
    console.log(random)
    previousNumber = random
}




