//CHOOSE YOUR OWN ADVENTURE GAME

const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log(`Hello ${name}. Welcome to our game.`);

let shouldWePlay = prompt("Do you want to play?  ").toLowerCase();
while (shouldWePlay != "yes" && shouldWePlay != "no") {
    console.log("Please enter a valid response : (yes or no). ");
    shouldWePlay = prompt("Do you want to play?  ");
    break;
}


if (shouldWePlay === "yes") {
    //GAME LOGIC
    let leftOrRight = prompt("Do you want to go left or right? ").toLowerCase();
    while(leftOrRight != "left" && leftOrRight != "right") {
        console.log("Please enter a valid response. Left or right.");
        leftOrRight = prompt("Do you want to go left or right? ");
    }
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge.");
        let cross = prompt("do you want to cross the bridge? (y/n)  ").toLowerCase();
        while ( cross != "y" && cross != "n" && cross != "yes" && cross != "no" ) {
            console.log("Please enter a valid response. (y/n) ");
            cross = prompt("do you want to cross the bridge? ");
        }
        if (cross === "y" || cross === "yes") {
            console.log("you crossed the bridge but it was too weak. you fail");
        } else {
            console.log("You win");
        }
    } else {
        console.log("you go right and fall off a cliff");
    }  


} else if (shouldWePlay === "no") {
    console.log(`Ow, that's sad.`);
} 
