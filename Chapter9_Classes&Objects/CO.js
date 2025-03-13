//------------------------------------objs,prototype,setprototype-----------------------------------

// const employee = {      //object
//     calcTax(){
//         console.log("Tax = " , this.salary*0.1);
//     }
// }

// const yasir = {     //prototype 
//     id : "23cs015",
//     salary: 50000,
// }
// const Amir = {      //prototype
//     id : "23cs101",
//     salary: 51000,
// }
// const mukhtiar = {      //prototype
//     id : "23cs033",
//     salary: 52000,
// } 

// yasir.__proto__ = employee; // i have created prototype employee for the object yasir
// Amir.__proto__ = employee;  // prototype passes the reference to the object
// mukhtiar.__proto__ = employee;  // set prototype

//---------------------------------Class,objs,constructor,this------------------------------------

// class Toyotta{

//     constructor(brand, mileage){
//         console.log("New Object Created!");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("BrumBrumBruuuuuummmmmmm!");
//     }
//     stop(){
//         console.log("ehheeehehehehehehehe!");
//     }
// }

// let Fortuner = new Toyotta("fortuner", 10);
// let Lexus = new Toyotta("lexus", 12);

//---------------------------------------Inheritance,super-------------------------------------------------

// class Parent{
//     constructor(){
//         console.log("Inherited Hello");
//     }        
// }
// class Child extends Parent{

// }
// let child = new Child();

//_________________________________________________________________________________________________________
// class Person {

//     constructor(name){
//         this.spacies = "homo sapiens";
//         this.name = name;
//     }

//     eat(what){
//         console.log(what);
//     }

// }
// class Engineer extends Person{
    
//     constructor(name){
//         super(name);    //to invoke parent class constructor
//     }
//     work(){
//         super.eat("Engineer Eat first!");
//         console.log("Solves complex problem!");
//     }
// }
// let engObj = new Engineer("Shraddha");

//------------------ERROR HANDLING-------------------------------
let a=5;
let b=3;
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
try{
    console.log("a+b = ", a+c);
}catch(err){
    console.log(err);
}

console.log("a+b = ", a+b);
console.log("a+b = ", a+b);