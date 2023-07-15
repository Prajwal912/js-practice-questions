//move the zero to end of an array

let arr = [1, 0, 2, 0, 3, 0, 4, 5, 0, 6];
//nonZeroCount is there to track the pos of an ele in an array
let nonZeroCount= 0;

// console.log(arr.length)
for (let i = 0; i < arr.length; i++) {
    
    //if inside array non zero ele are there
    if (arr[i] !== 0 ) {

        //if in an array non zero eles are there then put in in same pos and if ele is zeo then nonZeroCount++
        arr[nonZeroCount] = arr[i]
        //jaise hi zero aata hai nonZeroCount++ hota hai and  the non zero ele are replaced by the zero ele after nonZeroCount++
        // console.log(nonZeroCount++)
        nonZeroCount++
        // console.log(arr.length)
    }
}
// now in an array all the non zero are moved to the begining but the spaces are left for zero 
//this loop will add the zero in the remaining part of the array
// i< arr.length ======= [1, 2, 4, 3, 5] < eight  but the length is eight so to add the remaining zero we can use loop again
    for (let i = nonZeroCount; i < arr.length; i++) {
     arr[i] == 0

    }
    console.log(arr)




