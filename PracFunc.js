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

const sum = function(a,b){
    return a*b;
} 