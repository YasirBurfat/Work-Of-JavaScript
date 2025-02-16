let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const uScore = () => {
    userScore++;
    userscorePara.innerText = userScore;
};

const cScore = () => {
    compScore++;
    compscorePara.innerText = compScore;
};


//modular programming way to divide programs into seperate funcs.
//generating random choice for computer 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    const compChoice = options[randIdx];
    return compChoice;
};

const drawGame = () => {
    console.log(`Game was Draw!`);
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You Win! Your choice ${userChoice} beats Comp Choice ${compChoice}`;
        msg.style.backgroundColor = "Green";
        uScore();
    }
    else{
        console.log("Comp Win!");
        msg.innerText = `Comp Win! Comp choice ${compChoice} beats Your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
        cScore();
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice(); 
   

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        
        if(userChoice === "rock" && compChoice === "scissor"){
            userWin = true;
        }
        else if(userChoice === "paper" && compChoice === "rock"){
            userWin = true; 
        }
        else if(userChoice === "scissor" && compChoice === "paper"){
            userWin = true;
        }
        else{
            userWin = false;
        }
        showWinner(userWin,userChoice,compChoice);
    }    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});