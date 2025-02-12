// let age = 16;
// let mode = "light";
// let color;

// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }

// if(mode==="dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }

// console.log(color);

//  Printing The Objects Keys And Values

let student = {
    name: "Yasir",
    Rollno: "23CS015",
    age:20,
    cgpa:3,
};

for(let keys in student){  //For in loop for objects
    console.log(keys + " = " +student[keys]);        
}


