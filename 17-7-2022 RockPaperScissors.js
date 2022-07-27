
var choices = ['ROCK', 'PAPER', 'SCISSOR'];
console.log("Welcome to my PRS Game.")


function computerSelection(){

    var choice = choices[Math.floor(Math.random()*choices.length)];
    choice = choice.toUpperCase();
    alert('The computer chose: ' + choice);
    return choice
}

 function playerSelection(){
    var choice = prompt("Select between Paper, Rock or Scissor");
    choice = choice.toUpperCase();
    // Playerselection is caseinsensetive
    alert("You chose: " + choice);
    return choice
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

y=0
x=0
function loop(n){
    //Write loop function for game.
    //define the amount of loops >(n)< you want, in this case we want 5 && y
    console.log("Hi");
    for (let i = 1; i <= n; i++){
        game(playerSelection(), computerSelection())
        //console.log("You have " + y + points())
        //console.log("The Computer has "+ x + points())
        //check if the function works
        winner()
        function winner(){
            if (i == 5){
                function grammar(){
                    if((x === 1) && (x>y) || (y === 1) && (y>x) || (y === 1 ) && (x = y)){
                         points = " point"
                    }
                    else{
                          points =" points"
                    }
                    
                    if (x > y){
                        console.log("The winner is the Computer with " + x +  points)
                        
                    }
                    else if(x == y){
                        console.log("Its a draw both players had " + x +  points)
                        
                    
                    }
                    
                    else{
                        console.log("Player wins with " + y + points)
                        
                    }
                }
                grammar()
               
                
            }
                
        }
    }
}

function game(player, computer){
    
    if (player == computer){
        alert("It's a draw. Both answers were: " + player)
        //playAgain()
    }
        else if ((player == "ROCK") && (computer == "SCISSOR")){
                alert("Player Win's, Rock beats Scissor.");
                // Declare Winner
                //playAgain()
                y = y + 1
                return y
            }
            else if ((player == "ROCK") && (computer == "PAPER")){
                alert("Computer win's, Paper beats Rock.");
                //playAgain()
                x = x + 1
                return x
            }
            else if ((player == "PAPER")&& (computer == "SCISSOR")){
                alert("Computer win's, Scissor beats Paper.");
                //playAgain()
                x = x + 1
                return x
            }
            else if ((player == "PAPER") && (computer == "ROCK")){
                alert("Player win's, Paper beats Rock.");
                //playAgain()
                y = y + 1
                return y
            }
            else if ((player == "SCISSOR") && (computer == "ROCK")){
                alert("Computer win's, Rock beats Scissor.");
                //playAgain()
                x = x + 1
                return x
            }
            else if ((player == "SCISSOR") && (computer == "PAPER")){
                alert("Player win's, Scissor beats Paper.");
                //playAgain()
                y = y + 1
                return y
                
            }
        // Compare Computerselection with Playerselection (Case-Insensetive)
    else {
        alert("invalid input, please give proper input")
        //playAgain()
        }       
}
    //write loop code for 5 loops
    
    
 
    


loop(5)