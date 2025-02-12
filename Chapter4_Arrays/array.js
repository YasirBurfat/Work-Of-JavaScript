// let followers = ["muzi","asfa","yasi","sala"];  // linear arr
// let following = ["srk","salman","akshay"];

// let userinfo = ["Yasir",20,"yasirburfat@gmail.com"];  // mixed arr

// let arr = []; // empty arr

// console.log(following); 

// followers[4] = ("sheera");

// for(let i =0; i<followers.length;i++){
//     console.log(followers[i]); 
// }

// // strings are immutabale byt arr aren't

// let name ="yasir";
// name[0] = 'n';

// console.log(name);

let colors = ["red","yellow","blue","brown","pink","green"];

// console.log(colors.slice(-2));
// console.log(colors.slice(4));
// console.log(colors)

// console.log(colors.splice(-2));
// console.log(colors);

// console.log(colors.splice(0,2));
// console.log(colors);

// console.log(colors.splice(0,2,"Gray","orange","purple"));
// console.log(colors);

                //  Practice Questions Of arrays:
                
//Q1
// let month = ["january" , "july", "march", "august"];
// console.log(month.splice(0,2,"july","june"));
// console.log(month);         

//Q2
// let lang = ["C","C++","html","javascript","python","java","c#","sql"];
// let reverselang = lang.reverse();
// console.log(reverselang);
// console.log(reverselang.indexOf("javascript"));

//Reverse String using splice: (undone)
// let n = "yasir";
// let reversename = n.reverse();
// console.log(reversename);



//  Array References; 
// let arr = ['a','b','c'];
// let arrcopy = arr;
// arr.push('d');
// arrcopy.pop();

//  Constant Array : we can do operations on its elements but can not re
//                   reassign it new elements.
// const arr = [1,2,3];
// console.log(arr);
// arr.push(4);
// console.log(arr);

// let arra = [1,2,4];
// console.log(arra);
// arra = [7,6,5,3,3];
// console.log(arra);

// Practice Question tictaktoe game on Arrays
// let game = [['X',null,'O'],
//             [null,'X',null],
//             ['O',null,'X']];

// for(let e of game){
//     for(let i of e){
//         console.log(i);
//     }
// }

// console.log("--------------------------");

// game[0][1] = 'O';

// for(let e of game){
//     for(let i of e){
//         console.log(i);
//     }
// }

 
//slice: retuns a piece of the array same as string one doesnt change original array!

//splice: changes the original array (add,remove,replace);
//splice(startidx,delcount,newEl1...);
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102); //from 2index deletes 3,4 and adds 101,102!
console.log(arr);

//to only add
arr.splice(2,0,103);
console.log(arr);

//to delete 103 only 
arr.splice(2,1);
console.log(arr);

//to replace we go to that index then delete 1 and create new element!
arr.splice(6,1,89); 
console.log(arr);

//for single value 
arr.splice(5); //it works as slice but cuts(6 and 89)from the original string
console.log(arr);


//  Practice Question 
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//a-remove the 1st company 
companies.shift();// companies.splice(0,1);
console.log(companies);
//b-remove uber and add Ola in its place
companies.splice(1,1,"Ola");
console.log(companies);
//c-add amazon at the end.
companies.push("Amazon");  
//companies.splice(5,0,"Amazon");
console.log(companies);