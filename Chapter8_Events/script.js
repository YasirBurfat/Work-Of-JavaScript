let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let div = document.querySelector("#div");

//node.event = func ;

// let a = 25;
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX,evt.clientY);
// }
btn2.ondblclick = () => {
    console.log("Wah chokra wah");
}
div.onmouseover = ()=>{
    alert("de khabr");
}

//in inline event handling html colde is bulky
//in JS file event handling same event is overided  
//in addEventListening same event can do multiple work.
//node.addEventListener("event",func);

let handler1 = () => {
    console.log("btn was clicked -handler1");
};
btn1.addEventListener("click",handler1);

let handler2 =  () => {
    console.log("btn was clicked -handler2");
};
btn1.addEventListener("click",handler2);

//node.removeEventListener("event",func);
btn1.removeEventListener("click",handler2);