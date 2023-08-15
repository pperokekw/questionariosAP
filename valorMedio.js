function quest1(v1,v2,t1,t2){
    return ((v1*1)+(v2*2))/(t2-t1)
}

console.log(`Questão 1 : ${quest1(48,57,13,16)}`) 

const vp = 36
const t = 20
const T = 24
const r = 10
const vbat = 6
const tcarr = 11/60
function quest2(){
    
    return vp*t/T
}

let vmed = quest2(vp,t,T)

console.log(`Questão 2: ${vmed}`)

function corrente(){
    return (vp-vbat)/r
}
console.log(`Corrente: ${corrente()}`)

let pmed = vmed*corrente()

console.log(`Questão 3: ${pmed}`)

const T2 = 8
let wT = 2*Math.PI*(1/T2)
let t1 =1.2
let t2 = 3.5
function dist(vmax,t1,t2){
    
    return(vmax*((-Math.cos(wT*t2)/wT)+(Math.cos(wT*t1)/wT)))

}
let d1 = dist(1.7,1.2,3.5)
function vmedia(){
    return (d1)/(t2-t1)
}

let vm = vmedia().toFixed(2)
console.log(`Questão 6: ${vm}`)

