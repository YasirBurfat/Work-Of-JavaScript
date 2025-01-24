//  func parameter -> like local var -> block scope 

// function myFunction(x,y){
//     let s = x*y;
//     return s;
// }
// let val = myFunction(3,5);
// console.log(val);

// Arrow Func -> compact method of function.
// with Arrow Func we can store a function. 
// Modern JS included we now use it mostly.
 
// const arrowSum = (a,b)=>{
//     console.log(a+b); 
// }; 
// console.log(arrowSum(15,2));
// const arrowMinus = (a,b)=>{
//     return a-b;
// };  
// console.log(arrowMinus(3,4));

// Practice Questions:

// Q1:Print no of vowels
// function vowelsnum(str){
//     let count = 0;
//     for(let i =0; i<=str.length;i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             count++;
//         }
//     }
//     return count;
// }
// let str = prompt("Enter The Word");
// console.log(vowelsnum(str));

// Q2: Same task with ArrowFunc;
// const vowelN = (str) => {
//     let count =0;
//     for(const ch of str){
//         if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
//             count++;
//         }
//     }
//     return count;
// };
// let st = prompt("Enter The Word");
// console.log(vowelN(st));

// A Method is a function but we bind it or associate it with a DS or a Obj!
// Ex: "abc".toUpperCase(); is bind with only string Or forEach() is for arrays DS only!
// In JS a Function can be passed in parameters and its value can be return as well!
// arr.forEach((callBackFunction) => {//Do}); written as [arrowfunc]!
// CALLBACKFUNCTION : Here, it is a function to execute for each element in the array!
// DEFINATION:"A callback is a function passed as an argument to another function."
// forEach has three parameter -> (value, index, arrayitself) 

// let arr = [1,2,3,4,5];
// let city = ["jamshoro","karachi","hyderabad"];
// arr.forEach((val) => {
//     console.log(val);
// });
// //  OR
// city.forEach(function elementArr(val,ind,city){
//     console.log(val,ind,city);
// });

// What r Higher Order Function/methods?
// Def:"A func which use another func as para(as input) or return a func(as output)."
// Def:"A func with callBackFunction"
//Ex: arr.forEach() method.

//  Practice Q use forEach square them;
// let arra = [1,2,3,4];
// let calSqr = (val) => {
//     console.log(val**2);
// };
// arra.forEach(calSqr);

//  What Map Array method?
//  "Create a new array with the results of some operation. The value its 
//   Callback returns are used to form new array".!
//  syntax: arr.map(callbackFnx(value,index,array))!
//  "same as forEach but it creates the copy of the arr unlike forEach"!
// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);
// Usuages: Map -> for operations on newArr. 
//          forEach -> for operations on original Arr. 

// What Filter Array Methods
// "creates new Arr of elements that give true for a condition/filter"
// Ex: all even elements
// let arr = [1,2,3,4,5,6,7,8];
// let evenArr = arr.filter((val) =>  {return val>3});
// console.log(evenArr);

// What is Reduce Method in AM?
// "Performs some operations and reduces the array to a single value. it returns 
// that single value."
//"Used when we have more inputs we want 1 output."
// ex: for sum,avg,max,min etc
// let arr = [5,6,2,1,3];
// const sumNum = arr.reduce((prev,val) => {return prev+val;});    // code for sum; 
// const largerNum = arr.reduce((prev,val)=>{ return (prev>val) ? prev : val; });  //code of larger num find;
// console.log(largerNum);

//  Practice Questions:
//  Q1: we r given arr of mrks of students.
//      filter out of the marks of students that 
//      scored 90+.
// let marksArr = [87,93,64,99,86];
// let nintyAbove = marksArr.filter(
//     (val) => {
//         return val>90; 
//     }
// ); 
// console.log(nintyAbove);

//  Q2: Take a num n as input from user. Creater an arr of num from
//      1 to n.
//      (1)->Use the reduce method to calculate sum of all nbr in arr.
// let arr = [1,2,3,4,5];
// let sum = arr.reduce(
//     (element,sum) => {
//         return element + sum ;
//     }
// );
// console.log(sum);
//      (2)->Use the reduce method to cal product of all nbrs in arr (Factorial).
// let arr = [1,2,3,4,5];
// let productArr = arr.reduce(
//     (element,product) => {
//         return element * product;
//     }
// );
// console.log(`Factorial = ${productArr}`);


 