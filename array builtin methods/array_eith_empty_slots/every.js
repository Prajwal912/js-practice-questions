//it takes an function also to check the elements in the array

let arr1 = [2,30,40,50,60,70];

arr1.every((current) => {
//   console.log( current<71?1:0 );
})


//in an array empty slots is not equivalent to undefined but it throws undefined because of the empty slot
let arr2 = [1, ,2]

arr2.every((val) => {
//   console.log(val !== undefined);
})


//Affecting Initial Array (modifying, appending, and deleting)

let arr = [1,2,3,4];

arr.every((ele, index, arr) => {
    // console.log(ele, "ele stating from 1")
    // console.log(index, "index starts from 0")
    // console.log(arr)
    // console.log(arr[index + 1])//2
    // arr.push("new")
    // arr[index + 1]
    arr.pop();
    console.log(`[${arr}] [${index}] -> ${ele}`)

    return ele < 4
})


