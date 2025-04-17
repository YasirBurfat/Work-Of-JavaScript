const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-01/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "PKR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    // change for select tag it changes with options:
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

// element has select
const updateFlag = (element) => {
    console.log(element); // select tag
    let currCode = element.value;
    console.log(currCode);  // currCode ex: PKR
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;   
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value ; 
    //console.log(amtVal);
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    let from = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();  
    console.log(from,to);

    let url = `${base_url}/${from}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[from][to];
    msg.innerText = `${amtVal} ${from.toUpperCase()} = ${rate*amtVal} ${to.toUpperCase()}`;
   // console.log(amtVal);

});

