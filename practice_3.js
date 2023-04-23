// because of hoisting we cannot access the variable before ini
// let name = 'om';
// function getName(){
    // console.log(name);
    // let name = 'prajwal';
// }
// getName()

//it is accessable because the name is now in global scope
// let name = 'om';
// function getName(){
    // console.log(name);
// }
// getName()

// console.log(`${(x => x) ('i love to')} program`)

// 
// function sumVal(x,y,z){
// return x+y+z
// }
// 2 ways to add 
// console.log(sumVal(...[2,4,6]))
// console.log(sumVal(2,4,6))


//if something is false from the beggining then the ans is always false 
//here code ruyns from left to right 
//therefore the ! comes first so the code perform the ! then ===

// const name = 'hey this is pratice code';
// console.log(!typeof name === 'object')
// console.log(!typeof name === 'string')

// here ! which is false === false so the ans is true
// console.log(!typeof name === false)




// const name = "prajwal";
// const age = 21;
// 
// console.log(isNaN(name))
// console.log(isNaN(age))


//object seal lock the object we cannot add more object key value pairs but we can modify the existing key value pair
// let person = {name: "prajwal"};
// what can modify person object
// Object.seal(person);
// console.log(person.name = 'shah')



// let data = [2,4,6,8];
// console.log(data.shift())
// console.log(data)
// 
// let data2 = [2,4,6,8];
// console.log(data2.pop())
// console.log(data2)



// let val = 1238;
// 
// if(val%2===0){
    // console.log("it is even")
// }else{
    // console.log("it is odd")
// }


//if delete the data.name then true and the object will be empty
//if delete the data it comes the false we cannot delete the variable name 
// let data = {name:"om"};
// console.log(delete data.name)
// console.log(data)


// let data = "true";
// convert data into boolean false value 
// console.log(!data)
// kisi ke bhi saamne ! laga do toh false boolean mei convert ho jata hai
// console.log(typeof !data)


// let data = "hey";
// convert data into boolean true value 
// kisi ke bhi saamne ! laga do toh false boolean mei convert ho jata hai
// console.log(!!data)


//diff between map and foreach 
//both use for iteratrion of thee loop
//map : it always return something
//for each : it doesn't return anything



//it converts the data[1] value empty
// let data = ['hey','hello', 'hii'];
// delete data[1];
// console.log(data)



//if empty also but it will be counted
// let data = ['hey','hello', 'hii'];
// delete data[1];
// console.log(data.length)


// let a = [1,2,3,45]
// let b = ["h","u"]
// 
// let c = [...a, ...b]
// console.log(c)


//isme same value do baar reh skti hai
// let a = [1,2,3,45, "h"]
// let b = ["h","u", 45]
// let c = [...a, ...b]
// console.log(c)


// let c = 3**3;
// console.log(c)
