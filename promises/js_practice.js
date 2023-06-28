// hoisting

// a = 23;
// console.warn(a) //23
// var a;

// console.warn(a) //undefined
// var a = 23;

// b = 3;
// console.log(b)//error
// let b;

// console.warn(b) //error
// let b = 23;

// c = 2
// console.log(c)//error
// const c;


//impicit type coersion
//conversion of one data type to another

// let a = "preethi";
// let b = 23;

// console.warn(a+b)


//diff null and undefined
//variable declared but not assigned
// let a 
// console.warn(a)//undefined


// //invalid value or empty
// let b = null;
// console.warn(b)

//NAN -- represents not a number

//if a value is not legal then it is NAN

// console.warn(isNaN("qw"));
// console.warn(isNaN(null));//null is nuber
// console.warn(isNaN(""));//empty is also a number
// console.warn(isNaN(23));//number is also a number


//pass by value
//it is an primitive data type
// let a = 23;
// let b = a;//the val will be pass from a to b and if i changed the var b then only var b will changed not var a
// let f = b + 1;
// console.warn(a)
// console.warn(f)

// //pass by refrence
// //it is an non primitive data type
// let c = [1,2];
// let d = c;//it just stores the ref of the var c not the whole val in the address
// //and if we changed the var d then it will also change the var c bacause of the ref 
// d.push(3)
// console.warn(c, "the val of c")
// console.warn(d, "the val of d")


//bind and currying 
//currying using two methods bind and closures

//bind creates the new fn 
//the value of the this keyword is refers or bounds to the owner object or fn


//currying using bind
let multiply = (x,y) => {
 console.warn(x*y);
}

let multiBind = multiply.bind(this, 2)
multiBind(4)


//currying using clousers

let add = (z) => {
  return function(a){
    console.warn(z+a)
  }
}

let addClousers = add(2);
addClousers(90)

//spread operator and rest parameters are used to extract the elements easily
//spread operator
let arr1 = [1,2,3,4];
let arr2 = ["a","b","c","d"];

console.warn(...arr1,...arr2);

let obj1 = {
    fName:"prajwal",
    lName:"shah"
}
let obj2 ={ ...obj1}
console.warn(obj2)

//rest parameters : taking all the parameters by using just ... in the (...args)


//object and array destructuring

// object destructuring

const  obj = {
    name:"prajwal",
    age:"21",
    gender:"male"
} 

const {name:name,age:age,gender:gender} = obj

console.warn(name,age,gender)

//array destructuring

const arr = [1,2,3,4,5];
const [fir,sec,thir,four,fif] = arr;
console.warn(fir,sec,thir,four,fif)




