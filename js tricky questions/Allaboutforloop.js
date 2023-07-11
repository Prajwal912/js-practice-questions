// for in loop -- iterates over the strings properties of an object

// let obj = {
//     a:'1',
//     b:'2',
//     c:'3',
// }
// for(let property in obj){
// //  console.log(`${property}: ${obj[property]}`)
// }


// //for of --> it iterates over a value
// let obj1 = [1,4,67,9,0]
// for(let property of obj1){
// //  console.log(`${property}`)
// }

// *
// **
// ***
// ****
// *****

// for (let i = 1; i<=5; i++) {
//   console.log('*'.repeat(i))  
// }


// for(let i=1; i<=5; i++){
//   let row = "";
//    for(let j =1; j<=i; j++){
//     row += "*"
//   }
//   console.log(row)
// }

// *****
// ****
// ***
// **
// *

// for(let i = 5; i>=1; i--){
//   console.log('*'.repeat(i))
// }


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= i; j--) {
//       row += "*"
//     }
//     console.log(row)
//   }

//using incremented way
// for(let i = 1; i<=6; i++){
// let row = ""
//     for(let j = 1; j<=6-i; j++){
//           row += "*"
//     }
//     console.log(row)
// }


//      *
//     **
//    ***
//   ****
//  *****  

// for(let i = 1; i<=5; i++){
//     let row = "";

// for(let k = 4; k>=i; k--){
//     //  document.write("&nbsp;&nbsp;") 
//     row+= " " 
// }

//     for(let j = 1; j<=i; j++){
//         row+= "*"
//         // document.write("*") 
//     }
//     // document.write("<br/>") 
//   console.log(row)
// }


////////////////////
// let i,j,k;
// for(let i=1; i<=5; i++){
//     let row = "";
    
//     for(let k=1; k<=5-i; k++){
//         row += " "
//     }
//     for(let j=1; j<=i; j++){
//         row+= "*"
//     }
//     console.log(row)
// }

// let i,j,k
// for( i = 1; i<=5; i++){
//     let row = ""

//     for(k = 1; k<=i; k++){
//         row += " "
//     }

//     for(j = 5; j>=i; j--){
//         row += "*"
//     }
//     console.log(row)
// }
  


// rectangle
// for (let i = 1; i <= 5; i++) {

//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += "*"
//   }
//   console.log(row)
// }


//      *
//     ** *
//    *** **
//   **** ***
//  ***** ****  

// let i,j,k,l;

// for(i=1; i<=5; i++){
//     let row = ""

//     for(k=5; k>=i; k--){
//       row += " ";
//     }

//     for(j=1; j<=i; j++){
//         row += "*";
//       }

//       for(l=2; l<=i; l++){
//         row += "*";
//       }


//       console.log(row)
// }



// let i,k,l
// let j = 1;

// for(i=1; i<=5 ; i++){
//     let row = ""

//     for(k=5; k>=i; k--){
//       row += " ";
//     }

//       for(l=1; l<=j; l++){
//         row += "*";
//       }

//       j+=2;
//       console.log(row)
// }


// let i,k,l,j;

// for(l=1; l<=5; l++){
//     let row = "";

//     for(i=1; i<=l; i++){
//        row += " "
//     }

//     for(j=5; j>=l; j--){
//         row += "*"
//      }

//      for(j=3; j>=l; j--){
//         row += "*"
//      }
//      console.log(row)
// }


// let i,j,k
// let star=1

// for(k=1; k<=5; k++){
// let row = '';

//     for(j=1; j<=k; j++){
//        row += " "
//     }
//     for(i=5; i>=star; i--){
//         row += "*"
//     }

//     console.log(row)
//     star+=2
// }

