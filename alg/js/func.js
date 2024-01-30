
let previousNumber;
let num = []

let buttons = document.querySelectorAll(".diff")
export let difficulty;

buttons.forEach((button) => button.addEventListener("click", function () {
    return difficulty = button.textContent.toLowerCase()
}))



export function diffHard() {
    let random = Math.floor(Math.random() * 300) + 1
    console.log(random)
    for (let i = 0; i < num.length; i++) {
        if (num[i] === random) {
            console.log(`generated ${random} at least once before,win`)
        }}
    num.push(random)
}


export function diffImpossible() {
    let random = Math.floor(Math.random() * 1000000) + 1;
    if (random === previousNumber) {
        console.log(random, "win")
    }
    console.log(random)
    previousNumber = random
}


export function diffLunatic() {
    let random = Math.floor(Math.random() * 1000000000) + 1;
    if (random === previousNumber) {
        console.log(random, "win")
    }
    console.log(random)
    previousNumber = random
}



export function gen() {
    if (difficulty === "lunatic") {
        diffLunatic()
    } else if (difficulty === "impossible") {
        diffImpossible()
    } else {
        diffHard()
    }
}


export function multiGen(times) {

    if (difficulty === "lunatic") {
        for (let i = 0; i < times; i++) {
            diffLunatic()
        }
    } else if (difficulty === "impossible") {
        for (let i = 0; i < times; i++) {
            diffImpossible()
        }
    } else {
        for (let i = 0; i < times; i++) {
            diffHard()
        }
    }

}