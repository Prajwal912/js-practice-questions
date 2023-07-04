const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat())


const arr2 = [0, 1, 2,  [[[3, 4]]]];
console.log(arr2.flat(3))

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity))

//it also removes the empty slots
const array2 = [1, , 3, ["a", , ["d", " " , "e"]]];
console.log(array2.flat(2))


