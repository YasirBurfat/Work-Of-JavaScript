//============CALLBACK============

// function calculator(a,b,sumCalback){
//     sumCalback(a,b);
// }

// function sum(a,b){
//     console.log(a+b);
// }

// calculator(1,3,sum);

// const hello = () =>{
//     console.log("hello");
// };

//--------------------------------------------------------
// setTimeout(hello,3000);
//---------------------------------------------------------
// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data ",dataID);    //after 2 sec data comes
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2);
// }); 

//---------------------------------------------------
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);
//----------------------------------------------------
// function firstFunction(nextFunction) {
//     console.log("First function executed.");
//     if (nextFunction) {
//         nextFunction();  // Call nextFunction if it exists
//     }
// }

// function secondFunction() {
//     console.log("Second function executed.");
// }

// firstFunction(secondFunction);  // Both functions will run
// firstFunction();  // Only "First function executed." will be printed

//--------------------------------------------------------
// let printData = (dataID,getNextData)=>{
//     console.log("data = ",dataID);
//     if(getNextData){
//         getNextData();
//     }

// }

// function getData(dataID,getNextData){
//     setTimeout(()=>{printData(dataID,getNextData)},2000);
// }
// //=======CALLBACK HELL/PyramidOfDoom:"nested,stacked,form pyramid structure";============
// getData(1,()=>{
//     console.log("getting data2...");
//     getData(2,()=>{
//         console.log("getting data3...");
//         getData(3,()=>{
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });

//----------------------------------------------------
//==TO SOLVE CALLBACK HELL PROB =="PROMISES"==
//it has 2 handlers.
//resolve, reject r callbacks provided by JS
//it is a object.

// let promise = new Promise(  //"here we have created promise but in general we want data from api and it turns us promises".
// (resolve,reject)=>{
//     console.log("I am a Promise");
//     reject("Some Errory");
// }
// );

//---------------------------------------------------
//example take this func as api
//shows tells calling getData returns promise

// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataID);    //after 2 sec data comes
//             resolve("success");
//             //reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let promiseVal = getData(123);
//----------------------------------------------------

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{//If rejected no info return in the block
//         console.log("I am a Promise");
//         // resolve("Success");//msg passed to res.
//         reject("Network Error");//msg passed to err.
//     });
// };

// let promiseV = getPromise();
// promiseV.then((res) => {
//     console.log("Promise Fulfilled ",res)
// });
// promiseV.catch((err) => {
//     console.log("Rejected ",err);
// });

//-------------------Promise-Chaining---------------------
//"Chained 1 then with another then"
// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("Success");
//             //reject("Some ERRORI");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("Success");
//             //reject("Some ERRORI");
//         },4000);
//     });
// }

// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching data2....");
//     asyncFunc2().then((res) => {});
// });
//_____________________GREAT EXAMPLE PRAC________________

// function getData(dataID){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("dataID",dataID);
//             resolve("successful");
//         },3000);
//     });
// }

// getData(1)
// .then(() => {
//     return getData(2);
// }) 
// .then(() => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });

// |"chain of promises is chain of .then"| And this code works same as Callback hell but more readable
//-----------------------EndOfPromiseChain---------------

//++++++++++++++++++++++++| ASYNC-AWAIT|+++++++++++++++++
//"async is a function, await pauses the surrounding code"    

// async function getWeatherData(){
//     await api();
//     await api();
// }

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data!");
//             resolve(200);//200 = success for api
//         },2000);
//     });
// }

//____________PRAC ASYNC-AWAIT___________

function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("dataID",dataID);
            resolve("successful");
        },3000);
    });
}

async function getAllData(){
    console.log("Getting data1۔۔۔")
    await getData(1);
    console.log("Getting data2۔۔۔")
    await getData(3);
    console.log("Getting data3۔۔۔")
    await getData(5);
    console.log("Getting data4۔۔۔")
    await getData(7);
    console.log("Getting data5۔۔۔")
    await getData(9);
}


//===========IIFE(immediately invoked func expression)========
//"IIFE is a func that is called immediately as soon as it
// is defined. no name"
//ex:normal func, arr func, async func;

(async function (){
    console.log("Getting data1۔۔۔")
    await getData(1);
    console.log("Getting data2۔۔۔")
    await getData(3);
    console.log("Getting data3۔۔۔")
    await getData(5);
    console.log("Getting data4۔۔۔")
    await getData(7);
    console.log("Getting data5۔۔۔")
    await getData(9);
})();





