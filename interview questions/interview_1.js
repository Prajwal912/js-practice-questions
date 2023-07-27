//moving all the zero to an end of an array

// let arr = [1,4,0,5,0,0,34,1];

// let emptyArr = [];
// let count = 0

// for(ele of arr){
//     if(ele !== 0){
//         emptyArr.push(ele)
//     }else{
//         count++
//         // console.log(count++)
//         //count++ means ye dekh rha hai ki non zero ele ke baad kitne zero baaki hai toh array mei three 0 bache
//     }
// }

// for(i = 0; i < count; i++){
//     emptyArr.push(0)
// }
// console.log(emptyArr)

//removing the fourth ele from an array

let arr = [2,5,8,3,55,7,0];

// using slice
let index = 4
// let re = arr.slice(0,index).concat(arr.slice(5))
// console.log(re)

//using spice

let res = arr.splice(index, 1)//4 index, 1 deletre krna hai
// arr.splice(index, 1, "prajwal")//4 pos ko 1 means 4 pos ko delete krke prajwal add krna hai
console.log(arr)