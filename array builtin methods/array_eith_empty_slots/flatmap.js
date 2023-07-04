const arr1 = [1,2,1];
const res = arr1.flatMap((num) => 
num === 2 ? [4,25] :1
)
// console.log(res)

const arr = [1, 2, 3, 4];

let re = arr.flatMap((x) => {
    // console.log([x,x * 2])
})


const arrFlat = ["it's Sunny in", "", "California"];

console.log(arrFlat.flatMap((val) => val.split(" ")))
console.log(arrFlat.map((val) => val.split(" ")))
