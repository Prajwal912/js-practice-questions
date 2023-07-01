

let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("api is resolved in 2 sec")
        }, 2000)
})

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("api is resolved in 3 sec")
        reject("api is reject in 3 sec")
    }, 3000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("api is resolved in 5 sec")
    }, 5000)
})

// promise.then((val) => {
//    console.warn(val, "✨")
// })

// promise1.then((val) => {
//    console.warn(val, "✨")
// })

// promise3.then((val) => {
//    console.warn(val, "✨")
// })

// let promise_all = Promise.all([promise, promise1, promise2])

let promiseS = Promise.allSettled([promise, promise1, promise2])

promiseS.then((val) => {
    console.warn(val)
}).catch((error) => {
    console.warn(new Error(error))
})
