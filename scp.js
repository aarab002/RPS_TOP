console.log("Hello World")
let a=["hui"]
let b=a.toString

function getComputerChoice() {
    let choices=['Rock','Paper','Scissors']
    let val=Math.floor(Math.random()*3)
    let choice=choices[val]
    return choice  
}

computerChoice=getComputerChoice().toLowerCase()


function getHumanChoice(){
    let hchoice= prompt("Pick one... \n Rock,Paper, Scissors:");
    return hchoice
}

humanChoice=getHumanChoice().toLowerCase()


let hmuanScore=0
let computerScore=0

function playRound(humanChoice,computerChoice){
    let hChoice=humanChoice
    let cChoice=computerChoice
    let result=0

    if (hChoice==cChoice){
        result=0
    }
    else if(hChoice=='rock'){

        if(cChoice=='scissors'){
            result=1
        }
        else{
            result=-1
        }
    }
    else if(hChoice=='paper'){

        if(cChoice=='rock'){
            result=1
        }
        else{
            result=-1
        }
    }
    else if(hChoice=='scissors'){

        if(cChoice=='paper'){
            result=1
        }
        else{
            result=-1
        }
        }

if (result==0){
    alert('it was a tie!!!')}
else if (result==1){
    alert('You Won!!!')
}
else{
    alert('Loser hahaha')
}
}
console.log('Code displays: '+ computerChoice)
console.log('You entered:'+ humanChoice)
