let timer = document.querySelector("#timer");
let stop = document.querySelector("#stop");

function counter(){
    let i = 0;
    timer.innerHTML = i;
    i++;
    console.log(i);
}


function halt(){
    clearInterval(myInterval);
}

stop.addEventListener("click" , halt);

const myInterval = setInterval(counter, 1000);