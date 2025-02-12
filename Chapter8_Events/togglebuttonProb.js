//Q: create a toggle btn that changes the screen to
//dark-mode when clicked and light-mode when clicked again.

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

let modefunc = () => {
    if(currMode ===  "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
};

modebtn.addEventListener("click",modefunc);



