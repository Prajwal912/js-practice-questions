//move the zero to end of an array

// let arr = [1, 0, 2, 0, 3, 0, 4, 5, 0, 6];
//nonZeroCount is there to track the pos of an ele in an array
// let nonZeroCount= 0;

// // console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {

//if inside array non zero ele are there
// if (arr[i] !== 0 ) {

//     //if in an array non zero eles are there then put in in same pos and if ele is zeo then nonZeroCount++
//     arr[nonZeroCount] = arr[i]
//     //jaise hi zero aata hai nonZeroCount++ hota hai and  the non zero ele are replaced by the zero ele after nonZeroCount++
//     // console.log(nonZeroCount++)
//     nonZeroCount++
//         // console.log(arr.length)
//     }
// }
// now in an array all the non zero are moved to the begining but the spaces are left for zero 
//this loop will add the zero in the remaining part of the array
// i< arr.length ======= [1, 2, 4, 3, 5] < eight  but the length is eight so to add the remaining zero we can use loop again
// for (let i = nonZeroCount; i < arr.length; i++) {
//     //whenever we have to set the val in any variable then use only one =
//  arr[i] = 0
// }
// console.log(arr)



//que two : extract the book array in seperate array
let friends = [{
  name: "a",
  books: ["ramayan", "ram"]
}, {
  name: "b",
  books: ["bhagvad", "bhagvad"]
}, {
  name: "c",
  books: ["bible", "bible"]
}]


//   friends.filter((val) => {
//     // let book = val.books;
//     // console.log(book)
//     console.log([...val.books])
//   })

// friends.reduce((acc,val) => {
//         // let book = val.books;
//         // console.log([...val.books])
//       },0)



//que 4: alternate number

// let arr = [1, 2, 3, 4];

// for(let i =0; i<arr.length; i+=2){
//   console.log(arr[i])
// }


//que 5: second larget number

// let arr = [12, 35, 1, 10, 34, 1, 34];

// let largest = 0;
// //largest val
// for(a of arr){
//   largest = Math.max( a,largest);
// }
//largest
// console.log(largest)


// let Slar = -1

// for(b of arr){
//   if(b < largest && b > Slar){
//     Slar = b 
//     console.log(Slar)
//   }
// }
// console.log(Slar)


// let res = Math.max(...arr)
// console.log(res)

//que 5: second larget number with sort
// let arr = [28, 43, 26, 65, 60, 54, 51, 35, 42, 48, 33, 40, 58, 38, 64, 47, 44, 49, 46, 25, 57, 39, 55, 45, 29, 32, 61, 53, 31, 36, 56, 63, 30, 52, 27, 34, 50, 41, 37, 66, 62, 59]
// let res = arr.sort((a,b) => {
//  return a-b;
// })
// // array.length - 2 gives the index of the second-to-last element.
// let secLar = arr[arr.length-2]
// console.log(res)
// console.log(secLar)


//que 6: longest name
// let arr = ["Geek", "Geeks", "Geeksfor",
//   "GeeksforGeek", "GeeksforGeeks"];


// let num = [];
// arr.filter((val, ind) => {
//   num.push(val.length)
// })
// let res = Math.max(...num)
// console.log(res)//max length
// console.log(num.indexOf(res))//index fourth
// console.log(arr[num.indexOf(res)])//name

// function Longest(str){
//   let long = str.split(" ").sort((a,b)=>
//   b.length-a.length
//   )
//   console.log(long[0])
//   }
  
//   Longest("he viciouslyghghg prajwalshahheythis bayonetedm the straw dummy")

    //que: 3  missing number of an array

    // let arr = [2,3,6,9];
//   let miss = [];
// let mini = Math.min(...arr)
// let maxi = Math.max(...arr)

// //loop is starting from 2 and ends on 9 so it iterates all
//    for(let i=mini; i<maxi; i++){
//     // console.log(i)// val in an array
//     // console.log(arr.indexOf(i))//indexing
//      if(arr.indexOf(i) < 0){
//        miss.push(i)
//       //  miss.push(arr.indexOf(i))
//      }
//    }
  //  console.log(miss)



// const arr = [1,4,2,3,1,4,5,6,7,8,1,7,6]

// console.log([...new Set(arr)])

// console.log(arr.filter((item,index)=>
// arr.indexOf(item)==index)
// )
// let newArr =[]
// for(let i=0;i<arr.length;i++){
//   if(!newArr.includes(arr[i])){
//         // console.log(!newArr.includes(arr[i]))
//         newArr.push(arr[i])
//       }
// }
// console.log(newArr)







