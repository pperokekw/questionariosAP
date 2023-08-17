function quest1(v1, v2, t1, t2) {
    return ((v1 * 1) + (v2 * 2)) / (t2 - t1)
}

console.log(`Questão 1 : ${quest1(90, 93, 13, 16)}`)

const vp = 36
const t = 16
const T = 24
const r = 1
const vbat = 12
const tCarga = 13
function quest2() {

    return vp * t / T
}

let vmed = quest2(vp, t, T)

console.log(`Questão 2: ${vmed}`)

function corrente() {
    return (vp - vbat) / r
}
console.log(`Corrente: ${corrente()}`)

let pmed = vmed * corrente()

console.log(`Questão 3: ${pmed}`)

function correnteMedia() {
    return (vmed - vbat) / r
}
function energia(tMin) {
    tMin = tMin / 60
    return vbat * correnteMedia() * tMin
}
let eBat = energia(tCarga)
console.log(`Questão 4: ${eBat.toFixed(3)}`)
let pMedRes = pmed-(correnteMedia()*vbat)
console.log(`Questão 5: ${pMedRes}`)

const T2 = 8
let wT = 2 * Math.PI * (1 / T2)
let t1 = 2
let t2 = 3.5
let vmax = 2.5
function dist() {

    return (vmax * ((-Math.cos(wT * t2) / wT) + (Math.cos(wT * t1) / wT)))

}
let d1 = dist()
function vmedia() {
    return (d1) / (t2 - t1)
}

let vm = vmedia().toFixed(2)
console.log(`Questão 6: ${vm}`)

