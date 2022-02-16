'use strict';

let score = 20;//saved the state of variable for later use
let highScore=0;

const btn = document.querySelector(".check");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let secretNumber = (Math.trunc(Math.random()*20)+1);

//game reset//
const btn_reset = document.querySelector(".again");
btn_reset.addEventListener("click",function(){
    const guess = document.querySelector(".guess");


    //reDeclaring a secret number
    secretNumber = (Math.trunc(Math.random()*20)+1);
    // setting score to default
    score=20;
    document.querySelector(".score").textContent = score;
    

    message.textContent="Start guessing...";
    number.textContent="?";
    guess.value ="";
    

    //styling back to default !
    body.style.backgroundColor = "#222";
    // console.log(secretNumber)
});


//game start//
btn.addEventListener('click',function(){


    //since it returned a string ;=> 
    const guess = Number(document.querySelector(".guess").value);

    //if we donot get a number in the guess box ! we print error!
    if(!guess){
        message.textContent = " 🚨 No Number !!";    
    }
    //guess greater than secret Number;
    else if(guess > secretNumber)
    {
        if(score > 0){
            message.textContent = "  Guess Too High!! 🚨";   
            document.querySelector(".score").textContent = --score;
        }
        else  {
            message.textContent = "😶😑 You Lost the Game!"  ;
            body.style.backgroundColor = "red";

        }
    }
    //guess lesser than secret Number;

    else if(guess < secretNumber )
    {
        
        if(score > 0){
            message.textContent = "  Guess Too Low!! 🚨";   
            document.querySelector(".score").textContent = --score;
        }
        else  {
            message.textContent = "😶😑 You Lost the Game!" ; 
            body.style.backgroundColor = "red";

        }
    }
    //guess equal to secret Number;

    else{

        message.textContent = "Congratulations !! Correct Number! 🔥🔥";
        
        if(highScore < score){
            highScore=score;
            document.querySelector(".highscore").textContent = highScore;
        }
        document.querySelector(".number").textContent=secretNumber;
        body.style.backgroundColor = "#60b347";

    }
});