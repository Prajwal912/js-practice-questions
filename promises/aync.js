
async function weather(){
    
    let delhi = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000);
})
let bangalore = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 4000);
})
let mumbai = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve(40)
        }, 6000);
    })
    let hyd = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(35)
        }, 3000);
    })
    
    console.warn("fetching delhi weather")
    let delhiw  = await delhi 
    console.warn("fetched" + delhiw)
    
    console.warn("fetching bangalore weather")
    let  bangalorew  = await bangalore 
    console.warn("fetched" + bangalorew)
    
    console.warn("fetching mumbai weather")
    let mumbaiw  = await mumbai 
    console.warn("fetched" + mumbaiw)
    
    console.warn("fetching hyd weather")
    let hydw  = await hyd 
    console.warn("fetched" + hydw)

    // return [delhiw, bangalorew,mumbaiw,hydw]
}

const anotherFn = async ()=> {
  console.warn("this is another fn")
}


const main = async ()=> {
    let a = await weather()
    let b = await anotherFn()
}


main();



// load scr
// const loadScr = async (src) => {
    
//     let promises = new Promise ((resolve, reject) => {
//        let script = document.createElement("script");
//         script.type = "type/javascript";
//         script.src = src;
//        document.body.append(script);

//        script.onload =  () => {
//            resolve(1)
//        }
//        script.onerror = () => {
//            reject(0)
//        }
//     })


//     let promise = await promises;
//     console.warn(promise)
// } 


// let fn = async (src) => {
//     let promi = await  loadScr("https://www.google.com")
//     console.warn(promi)
// }
// fn()



