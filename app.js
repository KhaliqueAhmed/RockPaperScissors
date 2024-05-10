let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice img");
const msg =document.querySelector("#msg");

const userSc=document.querySelector("#user-score");
const compSc=document.querySelector("#comp-score");

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        
        userSc.innerText=userScore;
        msg.innerHTML="You Win..!";

        msg.style.backgroundColor="green";
    }

    else{
        compScore++;
        compSc.innerText=compScore;
        
        console.log("you lose")
        msg.innerHTML="You lose.";
        msg.style.backgroundColor="red";
    }
}

const drawGame= ()=>{
    console.log("Game was drawn");
    msg.innerHTML="Game was drawn, Play again..!";
    msg.style.backgroundColor="#081b31";

}

const genCompChoice =()=>{

    const opt=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return opt[randIdx];

}

const playGame =(userChoice)=>{

    console.log("user choice ", userChoice);

    // Generate computer choice

    const compChoice= genCompChoice();

    console.log("computer choice ", compChoice)


    if(userChoice===compChoice){
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper" ?false :true;
        }

        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ?false:true;
        }

        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
    
       // console.log("choice was clicked", userChoice);

        playGame(userChoice);
    })
})