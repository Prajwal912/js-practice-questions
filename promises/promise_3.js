// let prom_1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(100)
//     }, 5000)
// })

// prom_1.then(() => {
//     console.warn("promise resolved")

//     let p2 = new Promise(function(resolve, reject){
//          reject(45)
//     })
//     return p2
// }).then((val) => {
//  console.warn(val, "we are done")


//  let p3 = new Promise(function(resolve, reject){
//     setTimeout(() => {

//         resolve(56);
//     }, 3000)
//  })
//  return p3;

// }).then((val) => {
//   console.warn(val, "now we are done")
// })
// .catch((error) => {
//     console.warn(new Error("error occured"))
// })

{/* <script type="text.javascript" src="https://www.google.com"></script> */}

function loadScr(src) {

    return new Promise(function(resolve, reject){
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src
    
        document.body.append(script);
        script.onload = () => {
            resolve(1)
        }
        
        script.onerror = () => {
            reject(0)
        }
    })
}

let p1 = loadScr("https://www.google.com")
p1.then((val) => {
    console.warn(val)
return loadScr("https://www.yahoo.com")
}).then((val) => {
    console.warn(val)
})
.catch((error) => {
    console.warn(new Error("error while fetching the link"))
})

