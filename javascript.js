
var choices = ['ROCK', 'PAPER', 'SCISSOR'];

var y=0
var x=0

const startClick = document.getElementById('start')
startClick.addEventListener('click', ()=>{choose()})


const display = document.getElementById('gamedisplay')
const message = document.createElement('div')


function computerSelection(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    choice = choice.toUpperCase();
    const computerChoice = document.createElement('div')
    computerChoice.classList.add('content')
    computerChoice.textContent = 'Computer chose: ' + choice
    display.appendChild(computerChoice)
    return choice
    //return random choice of computer
}

function playerSelection(selectedOption){
    choice = selectedOption.toUpperCase();
    // Playerselection is caseinsensetive
    message.textContent = 'You chose' + choice
    return choice
 }



function choose(){
    message.classList.add('content')
    message.textContent = 'Please click on one of the 3 buttons.'
    display.appendChild(message)
    selection()

}

function youChose(decision){
    const yourChoice = document.createElement('div')
    yourChoice.classList.add('content')
    yourChoice.textContent = 'You chose:' + decision
    display.appendChild(yourChoice)
    return game(decision, computerSelection())
}


function selection(){
    

    const rock = document.getElementById('Rock')
    rock.addEventListener('click', ()=>{clear(),youChose('ROCK')})

    const scissor = document.getElementById('Scissor')
    scissor.addEventListener('click', ()=>{clear(), youChose("SCISSOR")})

    const paper = document.getElementById('Paper')
    paper.addEventListener('click',()=>{clear() ,youChose("PAPER")})
    }


function game(playerchoice, computer){
    if (playerchoice == computer){
        return won('draw')
    }
        else if ((playerchoice == "ROCK") && (computer == "SCISSOR")){
            y++
            //playAgain()
            return won("Player") 
            }
        else if ((playerchoice == "ROCK") && (computer == "PAPER")){
            //playAgain()
            x++
            return won('Computer') 
            }
        else if ((playerchoice == "PAPER")&& (computer == "SCISSOR")){ 
            //playAgain()
            x++
            return won('Computer') 
            }
        else if ((playerchoice == "PAPER") && (computer == "ROCK")){
            y++
            //playAgain()
            return won("Player")  
            }
        else if ((playerchoice == "SCISSOR") && (computer == "ROCK")){
            //playAgain()
            x++
            return won('Computer')   
            }
        else if ((playerchoice == "SCISSOR") && (computer == "PAPER")){
            y++
            //playAgain()
            return won("Player")
        }
}       

function won(winner){
    const winnerDisplay = document.createElement('div')
    winnerDisplay.classList.add('content')
    display.appendChild(winnerDisplay)

    if(x === 5){
        clear()
        x = 0
        y = 0
        display.textContent = 'Computer win the game!'
    }
    else if(y === 5){
        clear()
        x = 0
        y = 0
        display.textContent = 'You win the game!'
    }
    else{
        if(winner == 'Player'){
            winnerDisplay.textContent = 'You Win! And have now  ' + y + ' points.'
        }
        else if(winner == 'Computer'){
            winnerDisplay.textContent = 'Computer Win! And has now ' + x + ' points.'
        }
        else{
            winnerDisplay.textContent = "It's a draw. Both selected the same."
        }
    }
}


function clear(){
  display.replaceChildren()
}









// Define Playerselection
 //Write Player Function



//function //playAgain(){
    //choice = prompt("Want to play again? Answer with 'Yes' or 'No'.");
    //if (choice.toUpperCase() == "YES"){
    //    game(playerSelection(), computerSelection())
   // }
     //   else if (choice.toUpperCase() == "NO"){
       //     alert("The game has ended, refresh to restart it")
        //}
    //else{
      //  alert("invalid input")
        //playAgain()
    //}        
//}
// Ask User if he quits or wants to play again