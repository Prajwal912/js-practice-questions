//concat

let arr1 = [1,2,3,4] 
let arr2 = ["prajwal","vs","manu"]
let arr3 = ["prajwal","vs","manu"]

let arrConcat = arr1.concat(arr2, arr3);
// console.log(arrConcat)

//concat values to an array
let letters = ["a", "b", "c"];
let alphaNumeric = letters.concat(1,[2,3])
// console.log(alphaNumeric)

////concat nested array
let nest1 = [[2]]
let nest2 = [[3],5,4]
let nest = nest1.concat(nest2)
// console.log(nest)

nest1[0].push(10);
// console.log(nest)

console.log([1,,3].concat([4,5]))
console.log([1,3].concat([4, ,5]))



