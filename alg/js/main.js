import '../style.css'
import { dom } from './dom'
import {gen, multiGen, } from './func'
dom.gen.addEventListener("click", function () {
  gen()
})

dom.multiGen.addEventListener("click", function () {
  multiGen(dom.input.value)
})








