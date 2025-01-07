let a=10
let b=20

console.log(a,b);


//Method-1      Using Another Variable
// let c=a
// a=b
// b=c
// console.log(a,b)


//Method-2      Using Arithematic Operations
// a=a+b   //a=10+20=30
// b=a-b   //b=30-20=10
// a=a-b   //a=30-10=20

// a=a*b   //a=10*20=200
// b=a/b   //b=200/20=10
// a=a/b   //a=200/10=20

// console.log(a,b);


//Method-3  Array Destruction
// [a,b]=[b,a]
// console.log(a,b);


//Method-4 Xor Operation
a=a^b
b=a^b
a=a^b
console.log(a,b);
