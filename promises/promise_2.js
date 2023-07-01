let p = new Promise(function(resolve, reject){

    console.warn("promise is pending")

    setTimeout(() => {
            resolve(true)
    }, 2000);
})

p.then((val) => {
  console.warn(val)
}).catch((error) => {
  console.warn("some error occured in p")
})





let p2 = new Promise(function(resolve, reject){
    console.warn("promise is pending")

    setTimeout(() => {
        reject(new Error("Error 404"))
    }, 5000);
})

p2.then((val) => {
   console.warn(val)
}).catch((error)=> {
    console.warn("some error occured in p2")
})

// console.warn(p, p2)