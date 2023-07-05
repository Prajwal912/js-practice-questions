// console.log(!!null)//falsy
// console.log(!!"")//falsy
// console.log(!!1)//truthy


//in evry 1 sec it will print h1 but it return with the id for the particular timeout so it will print 1234 then hi
// console.log(setTimeout(() => console.log('h1') , 1000))
// console.log(setTimeout(() => console.log('h1') , 1000))
// console.log(setTimeout(() => console.log('h1') , 1000))
// console.log(setTimeout(() => console.log('h1') , 1000))

// console.log([..."prajwal"])
// console.log([...1213])//throws error beacause it is not iterable

// let data = 3+4+"7"
// console.log( typeof data)//string


// console.log( typeof  3+4+"7")//number47 first it will check typeof 3 that is number then adds 47
// console.log( typeof  (3+4+"7"))//it will solve the above problem
// console.log( typeof  (3+4+ +"7"))//number because add the +sign before the strinmg

// console.log(typeof [])//object
// console.log([] === [])//because they have different memory locations


// let data = [1,2,3].map((num) => {
//     if(typeof num === 'number') return //the code is returns here that means it returns nothing so undefined
//     return num * 2
// })
// console.log(data)


//pass by refrence
// function getInfo(mem){
//  mem.name = 'prajwal'
// }
// let obj = {name:"atul"}
// getInfo(obj)
// console.log(obj)//prajwal


// function Car(){
//     this.make = 'tata';
//    return  this.make = 'nano'
// }

// let carM = new Car();
// console.log(carM.make)


//block scope
// (() => {
//     let x = (y=10)
// })()
// console.log(typeof x) //undefined


//bydefault global scope
// (() => {
//     let x = y = 10 
//     // let x = y = 10 the shortcut of this is let x and y so y will taek var bydefault
//     //because we defined x with let but we not defined the y so it takes var bydefault
// })()
// console.log(typeof y) //number


// (() => {
//     let x = y = 10
// })()

// (() => {
//     let x = y = 20
// })()

// console.log(y)//20


// let x = 100
// (() => {
// var x = 20
// })()
// console.log(x)//100


//it is like 0 - 1 = -1
console.log(!true - true)

//it is like 1 + 10 = 11
console.log(true + +"10")







