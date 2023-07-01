async function fetchfn(){

    
    let options = {
        method:'POST',
    headers:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        title:'foo',
        body:"bar hey",
        userID:1
    })
    
}
let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
let res = await p.json()
return res;

}

const mainFn =  async () =>{
   let todo = await fetchfn();
   console.warn(todo)
}
mainFn()



// fetch("https://jsonplaceholder.typicode.com/posts", options)
// .then((response) => response.json())
// .then((json) => console.warn(json))


// const asFunc = async () => {


//     let fet = await fetch("", options);
//     let res = await fet.json();
//     console.warn(res);
// }

// const mainf = async () => {
//     let todo = await asFunc();
//     console.warn(todo);
// }

// mainFn()

