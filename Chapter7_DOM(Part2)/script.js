let div = document.querySelector("#box");
let para = document.querySelector(".par");
let ul = document.querySelector("#ul");

//for geting id name
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// let p = para.getAttribute("class");
// console.log(p);

//for setting name
//para.setAttribute("class","123");

//for node.style("it has high priority because its inline css")
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize ="26px";
// div.style.visibility = "hidden" ;

//for element create/inserting. and (append,prepend(inside node)||before,after(outside node))
let newbtn = document.createElement("button");
newbtn.innerText = "Click me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
para.after(newbtn); 

let newheading = document.createElement("heading");
newheading.innerHTML = "<i>I am New!</i>";
document.querySelector("body").prepend(newheading);

//for delete
para.remove();

//Q2 append class in class solve this prob by classList[1-access attri;]
let paragraph = document.querySelector(".content");
paragraph.classList.add("newClass"); // classList is object that has many methods we use only add or remove: