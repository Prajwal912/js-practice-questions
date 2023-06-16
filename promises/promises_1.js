// Asynchronous code using setTimeout

// setTimeout(() => {
// console.log("hey console")
// },5000)


// let count = 0

// let timee = setInterval(() => {
//     console.log("I am a synchronous message")
//     count += 1
//     if(count >= 5){
//         clearInterval(timee)
//     }
// }, 4000)
// console.log("I am a synchronous message,I am a synchronous message")



// callback1 must be called only one time, after 2 seconds.
// callback2 must be called three times with an interval of 1 second.

setTimeout(() => {
    console.log("callback1")

}, 2000)

let count = 0;
let sett =  setInterval(() => {
    count += 1;
    console.log("callback2")
   if(count === 3){
       clearInterval(sett);
   }
 },1000)