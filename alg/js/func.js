import { dom } from "./dom";


let previousNumber;
let num = []

let buttons = document.querySelectorAll(".diff")
export let difficulty;

buttons.forEach((button) => button.addEventListener("click", function () {
    return difficulty = button.textContent.toLowerCase()
}))



export function diffHard() {
    let random = Math.floor(Math.random() * 1000000) + 1
    for (let i = 0; i < num.length; i++) {
        if (num[i] === random) {
            console.log(num[i], "win")
            return i = dom.input.value
        }
    }
    num.push(random)
    console.log(random)
}


export function dissImpossible() {
    let random = Math.floor(Math.random() * 1000000) + 1;

    if (random === previousNumber) {
        console.log(random, "win")
        return i = dom.input.value
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
    if (difficulty === "hard") {
        diffHard()
    } else if (difficulty === "impossible") {
        dissImpossible()
    } else {
        diffLunatic()
    }
}


export function multiGen(times) {
    if (difficulty === "hard") {
        for (let i = 0; i < times; i++) {
            diffHard()
        }
    } else if (difficulty === "impossible") {
        for (let i = 0; i < times; i++) {
            dissImpossible()
        }
    } else {
        for (let i = 0; i < times; i++) {
            diffLunatic()
        }
    }
}