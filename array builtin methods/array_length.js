// All Array methods

//array.length

let fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length)

fruits[5] = "mango";
console.log(fruits.length)

//0,1,2 phle se tha
//5 new added
//0,1,2,5 new array index and 
//value count is ["banana", "apple", "peach", emptyx2, "mango"]  total 6

console.log(Object.keys(fruits))
console.log(Object.values(fruits))

fruits.length = 10;
//value count is ["banana", "apple", "peach", emptyx2, "mango", emptyx4]  total 10
console.log(fruits.length)
console.log(fruits[8]) //undefined because of empty space

fruits.length = 2;
console.log(fruits.length)
console.log(Object.keys(fruits))
console.log(Object.values(fruits))


