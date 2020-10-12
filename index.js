let readlineSync  =  require('readline-sync');
function gameStart(){
    console.log( "Welcome to the Crystal Cave, this a place located in the Jedi Temple on the planet Ilum...This is a sacred place where Jedi younglings come find their lighsaber crystals in a ritual known as The Gathering!");
console.log( "Are you are you here to choose the crystal for your lightsaber?");
let option = readlineSync.question( "Options: yes or no?" );
switch(option) {
  case "yes":
    console.log( "You may proceed...and may the Force be with you" );
    partOne();
    break;
  case "no":
    console.log( "It was not your destiny...may the Force be with you" );
    break;
  default:
    console.log("Please choose 1 or 2");
    break;
    gameStart();
  } 
}

function gameOver() {
  console.log("You're ready to be a Jedi, Would you like to play again");
  let aGameOver = readlineSync.question( "Options: yes or no");
  switch(aGameOver) {
    case "yes":
    gameStart();
    break;
    case "no":
    break;
    default:
    console.log("Please say yes or no");
    gameOver();
    break;
  }
}
function partOne(){
    let aPartOne = readlineSync.question(`During this process you must close your eyes and feel the force around you...What is the color that you see among the darkness? Press 1 for Green, Press 2 for Blue, Press 3 for Purple, Press 4 for Red`);
        switch(aPartOne){
            case "1": 
                console.log(`  You have chosen Green: indicatting a Jedi Consular, a Jedi who preferred to reflect on the mysteries of the Force and fight the dark side at its heart.`);
                partTwo();
                break;
            case "2":
                console.log(` You have chosen Blue: indicating a Jedi Guardian, a Jedi to serve as a protector and gatekeeper, promising safety from the evil that that tortures harmonious creatures of the galaxy.  No matter how far, a Jedi Guardian is determined to seek out evil and extinguish its hold on the peaceful beings that the Sith torment.`);
                partTwo();
                break;
            case "3":
                console.log(` You have chosen Purple: indicatting that...There are snakes on a cave!!!! Run with Force!!!`)
                partTwo();
                break;
            case "4":
                console.log(`You have chosen Red: indicatting that you are in the wrong place Sith! You've been forcefully removed from the Cave`)
                partTwo();
                break;
            default:
                console.log(`Please choose 1,2,3 or 4`);
                partTwo();
                break;
        }
}
function partTwo(){
    gameOver();
}
gameStart();