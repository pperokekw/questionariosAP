let vp = 36
let vbat = 18
let t = 20
let T = 24
let r = 1
const tBat =12
function quest1() {
    return vp * t / T
}

let vmed = quest1(vp, t, T)

console.log(`Questão 1: ${vmed}`)


function quest2() {
    return (vmed * corrente())
}
function corrente() {
    return (vp - vbat) / r
}

function correnteMedia() {
    return (vmed - vbat) / r
}
let pBat = vbat * correnteMedia()
function pMedRes() {
    return pMed - pBat
}
function eTransf() {
    return pBat * tBat / 60
}
console.log(corrente())
console.log(correnteMedia())
let pMed = quest2(vmed, r)
let pMedres = pMedRes()
let eTransfe = eTransf()
console.log(`Questão 2: ${pMed.toFixed(2)}`)
console.log(`Questão 3: ${pMedres.toFixed(2)}`)
console.log(`Questão 4: ${eTransfe.toFixed(2)}`)