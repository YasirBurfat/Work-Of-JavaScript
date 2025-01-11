
// let guessnum = 25;
// var guess;


// for(let i = 1; i<=3;i++){
//     console.log(`You have ${i} Chances!`);
//     guess = prompt("Guess The Number!");

//     if(guess == guessnum){
//         alert("You Got it Right! = ", guess );
//         break;
//     }
//     else{
//         alert("No Try Again!");   
//     }
// }

const favmovie = "ddlj";
let guess = prompt("Guess the movie name");

while(guess != favmovie && guess != "quit"){
    guess = prompt("Wrong guess, please Try Again!");
}

if(guess == favmovie){
    console.log("Congrates, Right Guess!");
}
else{
    console.log("You Quit!");
}
