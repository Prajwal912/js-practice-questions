// var a = "34";
// var b = 23;
// console.log(a === b);

let Employee = {
  company: "XYZ",
};
// //create creates a new obj with same prototype object or say shallow copy
let emp = Object.create(Employee);
delete emp.company;
// console.log(emp.company);
// console.log(emp.hasOwnProperty("company"));

//set the length or reduce the length
let data = [4, 7, 1, 4, 5, 9, 0, 5];
// data.length = 3
// console.log(data)

//sum
let sum = data.reduce((x, y) => x + y);
// console.log(sum)

//remove duplicate val
let unique = new Set(data);
//converting the object to array using destructuring
console.log([...unique])

// , operator
// let x =10;
// let y= 100;
// x=(x++,x++,x);//12
// x=(x+=20,x);//30
//before , calculation after , print
// x=(x+=20,5);//5
// x=(x+=20,y);//print 100 val of y
// console.log(x)

//value swapping
// let z = 20;
// let a = 350;

// [z, a] = [a, z];
// console.log(z, "=Z")
// console.log(a, "=A")

///////////////////

// function x(){
// var i = "after 2 secs ";
// setTimeout(() => {
// console.log(i)
// },2000)
// console.log("hey")
// }
// x()

//if using var then it works in global scope as per closure
//it will not get the new variable per iteration so it will print 6 only after every 2 secs
function withVar() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 2000);
  }
}
// withVar()

//same as let but using var ---> we have to use another function to create the block scope inside the
//for loop by doing that we can iterate from 1 to 6

function withVarButLet() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    closure(i);
  }
}
// withVarButLet()

//with let we will get the block scope and new variable value in every iteration
function withLet() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// withLet()

//clousure
function outest() {
  let c = 236;
  function outer(b) {
    function inner() {
      // it has an access of the outermost enviroment through lexical scoping
      console.log(a, b, c);
    }
    let a = 60;
    return inner;
  }
  return outer;
}
// let a = 60;

let clouse = outest()("outer func argument");//without passing argument
// let clouse = outest("hey this is c")("outer func argument"); passing argument with c
clouse();

//advantage of clousure
//data hiding and encapsulation

//ex
//count value cannot be changed because of the function so in this way we can hide the variable
// function counter() {
//   let count = 0;

//   return function incrementCounter() {
//     count++;
//     console.log(count)
//   };
// }
// //for every variable the counter starts from 1 because of the closure
// let counter1 = counter();
// counter1()
// counter1()
// counter1()
// counter1()

// let counter2 = counter();
// counter2()
// counter2()
// counter2()

//incre and decre 2 methods with constructor function
function Counter() {
    let count = 0;
  
    this.incrementCounter = function() {
      count++;
      console.log(count)
    };
    this.decrementCounter = function() {
      count--;
      console.log(count)
    };
  }
  //for every variable the counter starts from 1 because of the closure
  let counter1 = new Counter();
  counter1.incrementCounter()
  counter1.incrementCounter()
  counter1.decrementCounter()
 
  //disadvantage -->  garbage collecter js engine takes out unused varibale from the memory or frezzed out the memory

