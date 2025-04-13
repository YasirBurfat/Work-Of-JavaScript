// analogy waiter = api go and gets food not process telling to customer
// waiter = a interface here

const url1 = "https://catfact.ninja/fact";
const url2 = "https://cataas.com/cat";

let btn = document.querySelector("#btn");
let p = document.querySelector("#screen1");
let p2 = document.querySelector("#screen2");

// ----------WITH-PROMISE-CHAINING---------

// btn.addEventListener("click",() => {
// fetch(url1)
// .then((res) => {
//     return res.json();
// })
// .then((data)=>{
//     p.innerText = data.fact;
//     return fetch(url1);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     p2.innerText = data2.fact;
// })
// .catch((err)=>{
//     console.log("EROR-ANDAR- "+err);
// });
// });

//-----------------DONE-------------------


//----------------ASYNC_AWAIT--------------

//----------for-text-representation-url1------------.

// const getFacts = async () => {
//     let responseJSON = await fetch(url1);
//     console.log(responseJSON);  //json format data means data looks like js object.
//     let jsObj = await responseJSON.json();
//     p.innerText = jsObj;    //usable data
// };
// btn.addEventListener("click", () => {
//     getFacts();
// });

//----------FOR-PICTURE-SHOW-------------

const getFacts = async () => {
    let promise = axios.get (url2);   //binary format bcz img
    console.log(promise)


};

btn.addEventListener("click", () => {
    getFacts();
});


//both json(for convertion of json to js object) & fetch are asyncronous
//json() return second promise

//--NOTE: HEADERS means extra info which comes with response or request