// import the function sum from the app.js file
/*
const { sum } = require('./app.js');

test("adds 14+9 to equal 23", ()=>{
    let total = sum(14,9)

    expect(total).toBe(23)
})*/

test("One euro should be 1.206 dollars",() =>{
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar has to be 127.9 yens", ()=>{
    const {fromDollarToYen} = require("./app.js")


    // One dollar has to be 127.9 yens
    expect(fromDollarToYen(1)).toBe(127.9)
})

test("One yen has to be 0.8 pounds", ()=>{
    const {fromYanToPound} = require("./app.js")
    expect(fromYanToPound(1)).toBe(0.8)

})