/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click",function(){
    length()
    volume()
    mass()
})

function length(){
    let meter,feet = 0
    feet = (inputEl.value * 3.281).toFixed(3)
    meter = (inputEl.value * 0.305).toFixed(3)

    let solution = `<p id = "length-el">${inputEl.value}meters = ${feet}feet | ${inputEl.value}feet = ${meter}meters </p>`
    lengthEl.innerHTML += solution
    return lengthEl.innerHTML
}

function volume(){
    let litre,gallon = 0
    litre = (inputEl.value * 0.264).toFixed(3)
    gallon = (inputEl.value * 3.788).toFixed(3)

    let solution = `<p id = "vol-el">${inputEl.value}litres = ${gallon}gallons | ${inputEl.value}gallons = ${litre}litres </p>`
    volEl.innerHTML += solution
    return volEl.innerHTML
}

function mass(){
    let kilo,pound = 0
    kilo = (inputEl.value * 2.204).toFixed(3)
    pound = (inputEl.value * 0.454).toFixed(3)

    let solution = `<p id = "vol-el">${inputEl.value}kilos = ${pound}pounds | ${inputEl.value}pounds = ${kilo}pounds </p>`
    massEl.innerHTML += solution
    return massEl.innerHTML
}

/*3.281 feet = 1 meter
1 feet = 1 * 1/3.281 = 0.305m 

0.264 gallon = 1 litre
1 gallon = 1/0.264 = 3.788l

2.204 pound = 1kg
1 pound = 1/2.204 = 0.454kg
*/