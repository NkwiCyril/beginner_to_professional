
// 1. nope
// 2. length
// 3. 1 and 6
// 4. By either using the splice() method or assignment operator
// 
const myArr2 = []; 
myArr2[10] = 'test'
console.log(myArr2); // [ <10 empty items>, 'test' ]
console.log(myArr2[2]); // undefined

const myArr3 = [3,6,8,9,3,55,553,434]; 
myArr3.sort(); 
myArr3.length = 0; 
console.log(myArr3[0]);


