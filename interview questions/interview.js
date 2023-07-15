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
        name:"a",
        books:["ramayan","ram"]
      },{
        name:"b",
        books:["bhagvad","bhagvad"]
      },{
        name:"c",
        books:["bible","bible"]
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


// let arr = [1, 2, 3, 4];

// for(let i =0; i<arr.length; i+=2){
//   console.log(arr[i])
// }

let arr = [12, 35, 1, 10, 34, 1];

let largest = 0;
//largest val
for(a of arr){
  largest = Math.max( a,largest);
}
//largest
// console.log(largest)


let Slar = -1

for(b of arr){
  console.log(largest)
  if(b < largest && b > Slar){
    Slar = b 
  }
}
// console.log(Slar)


// let res = Math.max(...arr)
// console.log(res)

// let res = arr.sort((a,b) => {
//  return a-b;
// })
// // array.length - 2 gives the index of the second-to-last element.
// let secLar = arr[arr.length-2]
// console.log(res)
// console.log(secLar)



    //que: 3  missing number of an array
    



