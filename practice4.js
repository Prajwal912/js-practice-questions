// x = 3; //value 3
// console.log(x)
// var x = 8 //undefined

// function fruit(){
//     console.log(name)//undefined
//     console.log(price)//refrence error

//     var name = "prajwal";
//     let price = 23;
// }
// fruit()

// console.log(+true)//1
// console.log(+false)//0
// console.log(typeof (+true))//Number
// console.log(typeof (+false))//Number
// console.log((!"anil"))//false
// console.log((typeof (!"anil")))//boolean



// let data = "size";
// let bird = {
//     size:"small"
// }
// console.log(bird[data])//small
// console.log(bird["size"])//small
// console.log(bird.size)//small
// console.log(bird.data)//undefined


// let  c = {
//     name:"preajeal"
// }

// let d = c

// c.name = "another value"
// console.log(d)//another value because of c


// var x 
// var x = 10;
// console.log(x)//10

// var x 
// let x = 10;
// console.log(x)//error


// let a = 3;//number
// let b = new Number(3)//object

// console.log(a == b)
// console.log(a === b)


// let name;
// console.log(name)//undefined


// function any(){ 
// console.log("woof")
// }
// any.name = "prajwal";//this will be neglected

// any()

// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"3"))
// console.log(sum("1","3"))
// console.log(sum(1,3))


// function minus(a,b){
//     return a-b
// }
// console.log(minus("3",1))
// console.log(minus("3","1"))
// console.log(minus(3,1))


// let counter = 0;
// console.log(counter++)//1 hoga but if i call again then it will print
// console.log(counter)//1
// console.log(++counter)//2
// console.log(counter)//2


//spread operators
//anf typeof [] bhi object hota hai
// function getAge(...args){
//     console.log(typeof args)//object
//     console.log( args)
// }
// getAge(23,45)



//  function getAge(){
//    'use strict'
//    age = 23;
//    console.log(age)//refrence error
// }
// getAge()


//eval converts the string into number
// const sum = eval("10*10+5")
// console.log(sum)


// const obj = {
//     1:"a",
//     2:"b",
//     3:"c",
//     "hello":"prajwal"
// }
// console.log(obj.hasOwnProperty("1"))//same 1 or "1" 
// console.log(obj.hasOwnProperty(1))//1 is present
// console.log(obj.hasOwnProperty(hello))//it throws error because helo is not defined
// console.log(obj.hasOwnProperty("hello"))//present in the obj


// const obj = {
//     a:"one",
//     b:"two",
//     a:"repeat"//a overwrites the original value of a
// }
// console.log(obj)


// for(let a=1; a<=4; a++){
//     if(a===3) continue //continue is just like return but for a specific value
//     if(a===3) break //break at 2
//     console.log(a)
// }



// const foo = () => console.log('first')
// const poo = () => setTimeout(() => {
//     console.log('second') // if we use settimeout without timer also then also it will scheduled to last
// }); 
// const moo = () => console.log('third')

// foo()
// poo()
// moo()

//call and bind

// let person = {name:"prajwal"};

// function sayHi(getAge){
//  return `${this.name} is ${getAge}`
// }
// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))//it returns the whole function
// console.log(sayHi.bind(person,21)())//when using the bind we have to call the function again


//iife
// function say(){
//     return (() => 0)()   //iife
// }
// console.log(typeof say())//number
// console.log(say())//0



// function say(){
//         return () => 0
//     }
//     console.log(typeof say())//function
//     console.log(say()())//for getting a val again call


// console.log(typeof 1)
// console.log(typeof typeof 1)//bacause of the type of number is string


// let ar = [1,2,3];
// ar[9] = 11;
// console.log(ar)//6 empty items come


    // let ar = [1,2,3];
    // ar[3] = ar;
    // console.log(ar)//after 3 pos it will become infinite beacause again calling the ar array

    //everything in js is primitive or object

