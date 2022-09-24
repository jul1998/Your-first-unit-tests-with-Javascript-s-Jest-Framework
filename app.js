/*const sum = (a,b) =>{
    return a + b
}

console.log(sum(7,3))

module.exports = {sum}*/

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(dollar){
    return dollar * oneEuroIs["JPY"]
}

const fromEuroToDollar = function (euro){
    let valueInDollar = euro * oneEuroIs["USD"]
    return valueInDollar
}

 const fromYanToPound = function (yan){
    return yan * oneEuroIs["GBP"]
}

console.log(fromEuroToDollar(3.5))

module.exports = {fromDollarToYen,fromEuroToDollar, fromYanToPound}
