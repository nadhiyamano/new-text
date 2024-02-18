function myfunction() {
    // Generate random numbers for dice rolls
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Construct image paths
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource1 = "images/" + randomDiceImage1;
    var randomImageSource2 = "images/" + randomDiceImage2;

    // Update image sources
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    // Determine the winner
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
