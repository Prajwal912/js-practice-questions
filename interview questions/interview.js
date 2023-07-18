//move the zero to end of an array

// let arr = [12, 0, 29, 0, 34, 0, 4, 5, 0, 86];
//by using sort method
// let sorting = arr.sort((a,_) => {
//  if(a==0){
//     return 1
//  }else if (a!==0){
//   return -1
//  }else{
//   return 0
//  }
// }
// )
// console.log(arr)


//////////////////////////////////////////////////////////////////
//nonZeroCount is there to track the pos of an ele in an array
// let nonZeroCount= 0;

// // // console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {

// // if inside array non zero ele are there
// if (arr[i] !== 0 ) {
//   console.log(arr[nonZeroCount])
//     //if in an array non zero eles are there then put in in same pos and if ele is zeo then nonZeroCount++
//     arr[nonZeroCount] = arr[i]
//     //jaise hi zero aata hai nonZeroCount++ hota hai and  the non zero ele are replaced by the zero ele after nonZeroCount++
//     // console.log(nonZeroCount++)
//     // nonZeroCount++
//         // console.log(arr.length)
//     }
// }
// // now in an array all the non zero are moved to the begining but the spaces are left for zero 
// // this loop will add the zero in the remaining part of the array
// // i< arr.length ======= [1, 2, 4, 3, 5] < eight  but the length is eight so to add the remaining zero we can use loop again
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

// let res = arr.filter((_, ind) => 
//   ind%2 === 0 
// )
// console.log(res)

// for(let i =0; i<arr.length; i+=2){
//   console.log(arr[i])
// }


//que 5: second larget number

// let arr = [12, 35, 1, 10, 34, 1, 34];

// let lar = Math.max(...arr)
// // console.log(lar)

// let Slar = -1;
// for (const i of arr) {
//    i<lar && i>Slar ? Slar = i : console.log();
// }
// console.log(Slar)



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

// let ar = []
//   arr.filter((val) => {
//      ar.push(val.length)
//   })
//   let res = Math.max(...ar)
//   console.log(arr[ar.indexOf(res)])


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
//     let arr = [2,3,6,9];
//   let miss = [];
// let mini = Math.min(...arr)
// let maxi = Math.max(...arr)

//with includes two diffrent ways

//first
// for(let i=mini; i<maxi; i++){
//       // console.log(i)// val in an array
//       // console.log(arr.indexOf(i))//indexing
//        if(!arr.includes(i)){
//          miss.push(i)
//        }
//      }
//      console.log(miss)

//second
// for(let i=mini; i<maxi; i++){
//       // console.log(i)// val in an array
//       // console.log(arr.indexOf(i))//indexing
//        if(!miss.includes(arr)){
//          miss.push(i)
//        }
//      }
//      console.log(miss)



///////////////////////////////////////////////////////////////////
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


//duplicate remove
// const arr = [1,4,2,3,1,4,5,6,7,8,1,7,6]

// console.log([...new Set(arr)])

// console.log(arr.filter((item,index)=>
// arr.indexOf(item)==index)
// )

// let str = [];

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i])
//   if (!str.includes(arr[i])) {
//      str.push(arr[i])
//   }
// }
// console.log(str)

/////
// let x=["a","b","c","a","d","c","a"]

//   let obj={}
//   x.map((item)=>{
//     if(obj.hasOwnProperty(item)){
//       obj[item]+=1
//     }else{
//       obj[item]=1
//     }
//     console.log(obj)
//   })
////////////////////////////////


// const arr = [
//   [2, 4, 6, 98, 111],
//   [123, 45, 78, 90, 672],
//   [565, 878, 41, 23, 56],
//   [21, 4, 3, 5, 6, 90]
// ];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ln = arr[i][0];
//   // console.log(ln);
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 1; k < arr[i].length; k++) {
//       // console.log(arr[i][k])
//       if (arr[i][k] > arr[i][j]) {
//         //arrayone[j]arrayone[i]
//         ln = arr[i][k];
//       }
//     }
//   }
//   newArr.push(ln);
// }
// console.log(newArr);
// let array = [21, 4, 3, 5, 6, 90];
// let larArr = [];
// let ln = array[0];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 1; j < array.length; j++) {
//     if (array[j] > array[i]) {
//       ln = array[j];
//     }
//   }
// }

// //i=o j=1 21 4  j=2 ,3
// console.log(ln);


// const multidimensionalArray = [[1, 2], [3, 4], [5, 6]];

// // let newarr = multidimensionalArray.flatMap(Infinity => Infinity)
// // let newarr = multidimensionalArray.flat()
// // let newarr = [].concat(...multidimensionalArray)
// // let newarr = multidimensionalArray.reduce((acc, curVal) => {
// //   return acc.concat(curVal)
// // },[])
// // let newarr = [...multidimensionalArray.flat()]

// console.log(newarr);

//difference
// const arr = [4, 2, 6, 9, 7];
// const arr2 = [2, 7, 9];
// let newArr = []
// for (const a of arr) {
//   if (!arr2.includes(a)) {
//     newArr.push(a)
//   }
// }
// console.log(newArr)


// value equal to index value

// let ind = [15, 2, 45, 12, 7];
// let newarr = [];
// for (let i = 1; i < ind.length; i++) {
//   if (ind[i - 1] == i) {
//     newarr.push(ind[i - 1]);
//   console.log(newarr)
//   }
// }
// let result = ind.filter((value, index) => value === index);

// console.log(result); // Output: [2, 7]


//swaping the values
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//   // [arr[2], arr[5]] = [arr[5], arr[2]]
//   //changing the indexing
//   N = 8, K = 3

// let temp = arr[K-1]
// //arr[K-1] 3-1 = 2 so grabed the second position
// //arr[N-K] 8-3 = 5 so grabed the fifth position
// arr[K-1] = arr[N-K] 
// arr[N-K] = temp;

// console.log(arr)
//   // console.log(arr[K])//4 indexing --
//   // console.log(arr[N])//undefined noindexing --













