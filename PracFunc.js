//  Concatinating All Strings.

// let str = ["Yasir","Hussain","Burfat"];

// function concat(str){
//     let concatstr = "";
//     for(let i = 0; i<str.length;i++){
//         concatstr = concatstr + str[i] ;
//     }
//     return concatstr;
// }

// console.log(concat(str));

//Q:  Lexical Scope

// function outerF(){
//     function innerF(){
//         console.log(x);
//     }
//     let x = 5;
//     let y = 4;
//     //because of Hoisting concept it is possible 
//     innerF();
//     // innerF is not defined outside
// }
// outerF();   

//  PracQ:
// let greet = "Hello";
// function changeGreet(){
//     let greet = "Namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


//  Topic: Function Expression(No Func Name)
// let sum = function(a,b){
//     return a*b;
// } 
// sum = function(a,b,c){   // reassigning func value
//     return a+b+c;
// }

//  Topic: Higher Order Functions.
// let greet = function(){
//     console.log("Hello Namaste");
// }
// function multiGreet(func,n){
//     for(let i =1; i<=n;i++){
//         func();
//     }
// }
// multiGreet(greet,4);
// multiGreet(function(){console.log("Wahrewah")},6);  //also same

//  Topic H-OR-Func (returns a function)
//  "Factory func creates new funcs."
// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request == "even"){
//         let even = function(n){
//             console.log((n%2==0));
//         }
//         return even;
//     }
//     else{
//         console.log("Wrong Request");
//     }
// }
// let request = prompt("Odd/Even"); 
// let n = prompt("Enter the number");
// let func = oddOrEvenFactory(request);
// func(n);




