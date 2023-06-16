// Asynchronous code using setTimeout

// setTimeout(() => {
// console.log("hey console")
// },5000)


let count = 0

let timee = setInterval(() => {
    console.log("I am a synchronous message")
    count += 1
    if(count >= 5){
        clearInterval(timee)
    }
}, 4000)
console.log("I am a synchronous message,I am a synchronous message")