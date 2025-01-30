
function changeback() 
{
    document.body.style.background = "green";
}
//-------------------------AboutAccessingElements---------------------
// //  By Class
// let heading = document.getElementsByClassName("heading-class");

// console.dir(heading[0].textContent);
// console.dir(heading[1].textContent);
// console.dir(heading[2].textContent);

// //By ID
// let button = document.getElementById("myButton");
// console.dir(button);

// //By TAG
// let paragh = document.getElementsByTagName("p");
// console.log(paragh);

// //By QUERRY-SELECTOR
// let firstElement = document.querySelector("p");
// console.dir(firstElement);

// //BY Querry-selector-all
// let allElement = document.querySelectorAll("p");
// console.log(allElement);

// //By Querry-selector how class as argu:
// let classQuery = document.querySelectorAll(".heading-class");
// let idQuery = document.querySelector("#myButton");
// console.dir(classQuery);
// console.dir(idQuery);
//--------------------Access and changing Element's value---------------
//"we can change innertxt,html or tagname like [div.innerhtml = "abcd"]";
// let tagnaam = document.querySelector("div").tagName;
// let intxt = document.querySelector("div").innerText;
// let inhtml = document.querySelector("div").innerHTML;
// let txtcontent = document.querySelector("h2").textContent;//newtxt-showed
// let oldHeading = document.querySelector("h2"); //oldtxt-hidden

//-------------------------------Practice------------------------------
// let h2 = document.querySelector("#idHello");    
// h2.append(" from Yasir Hussain");  // 1 method.
// h2.innerHTML = h2.innerHTML + " Burfat";  // 2 method.

let div = document.querySelectorAll(".box");
console.log(div);

let idx = 1;
for(let divs of div){
    divs.innerText = `UniqueValue${idx}`;
    idx++;
}






