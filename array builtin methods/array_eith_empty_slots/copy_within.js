 let arr1 = [1,2,3,4,5,6,7,8,9];

 //copyWithin(target, start, end)
 //same array ke andar location change ke deta hai
//  console.log(arr1.copyWithin(4))//4 pos pe starting ke ele phir se repeat honge without changing the indexing
//  console.log(arr1.copyWithin(2,1))//2 position pe 1 index ki val insert kr di
//  console.log(arr1.copyWithin(0,5))//0 position pe 5 index ki val insert kr di
//  console.log(arr1.copyWithin(1,4))//1 position pe 4 index ki val insert kr di
//  console.log(arr1.copyWithin(4,1))//1 position pe 4 index ki val insert kr di
//  console.log(arr1.copyWithin(2,3))//2 position pe 3 index ki val insert kr di
//  console.log(arr1.copyWithin(2,1,5))//2 is the starting value and index 1 se index 5 tak copy krnas hai 
//  console.log(arr1.copyWithin(1,4,5))//2 is the starting value and index 4 se index 5 tak copy krnas hai  and last wala count nhi hota hai
 console.log(arr1.copyWithin(3,4,7))//2 is the starting value and index 1 se index 5 tak copy krnas hai 
