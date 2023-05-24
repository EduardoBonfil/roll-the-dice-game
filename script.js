
const diceImages = ["dice1.png", "dice2.png", "dice3.png" , "dice4.png" , "dice5.png", "dice6.png"]

function RollDice() {
    
    var player1Roll = Math.floor(Math.random() * 6 + 1)
    var player2Roll = Math.floor(Math.random() * 6 + 1)
    var player1Img = diceImages[player1Roll - 1]
    var player2Img = diceImages[player2Roll - 1]
    document.querySelector(".img1").src = "images/" + player1Img;
    document.querySelector(".img2").src = "images/" + player2Img;
    if(player1Roll === player2Roll){
        document.querySelector("#titleAndWinner").textContent="It's a tie! Roll again";
        
    }
    else if(player1Roll > player2Roll){
        document.querySelector("#titleAndWinner").textContent="🚩Player 1 Wins!";
    }
    else{
        document.querySelector("#titleAndWinner").textContent="Player 2 Wins!🚩";
    }
    console.log(player1Roll, player2Roll)

}