// let a = [];
// let b = [];
//both come false because we can't compare both array beacuse of the memory location 
//both array have different memory location  ans:false in both
// console.log(a==b)
// console.log(a===b)


// let c = [];
// let d = c;
///here both has same memory location because d is now having the value of c ans:true in both
// console.log(c==d)
// console.log(c===d)


// let a = [20];
// let b = [20];
// here only the value of the 0th postion is checing that;s why it is coming true in both 
// console.log(a[0] == b[0])
// console.log(a[0] === b[0])



//array destructing
// let z = [1,2,3,4];
// console.log(...z); 


//nan  -- example : ""/number it throws NAN
// console.log(typeof NaN)


// let data = 10- -10;
// console.log(data); //20 ans beacouse - - is always +

//set, set weak, set map, map - is an one type of data type 
//it is used to remove the duplicate elements
// let set = new Set([1,1,2,2,3,5,7,90]);
// console.log(set)


// let data = {name:'Anil'}
// console.log(delete data.name)// it is delete that;s why it is true
// console.log(data)//it is deleted so the ans is Empty obj


// let data = {name:'Anil'};
// console.log(data)// ans:false; the data ko directly delete nhikr skte hai if any property hai toh delete kr skte hai

// let data = ["peter", "hey", "ash"];
// let [y] = data;
// let [z,r] = data;
// let [i,o,q] = data;
// console.log(y)//ans: peter;
// console.log(z,r)//ans: peter, hey;
// console.log(i,o,q)//ans: peter,hey,ash;

// let data = ["peter", "hey", "ash"];
// let [, ,y] = data; //we can get the 2 value and if the 2 ,, then the 3 value
// console.log(y)//ans: hey;


// print name without using . 
// const data = {name:"prajwal",agh:8}
// const {name} = data
// console.log(name)


//merge with destructing
// const data = {name:"prajwal",age:8, skill:"js"}
// const info = {city:"delhi",mail:"mail@gmail.com"}
// let d =  {...data, ...info}
// 
// console.log(d)


// const data = {name:"prajwal",age:8, skill:"js"}
// const info = {city:"delhi",mail:"mail@gmail.com"}
// let d =  {data, ...info}
// 
// console.log(d)


// const data = {name:"prajwal",age:8, skill:"js"}
// const info = {city:"delhi",mail:"mail@gmail.com", skill:"react"}
// let d =  {...data, ...info}
// it will show the second val of skill and but the position will be the first one
// console.log(d)


// let name = "prajwal";
// console.log(name())//it will throw error