
var homeScore = document.getElementById("home-score");
var awayScore = document.getElementById("away-score");
var homePoints = 0;
var awayPoints = 0;

var homePlusOne = document.getElementById("hm1");
var homePlusTwo = document.getElementById("hm2");
var homePlusThree = document.getElementById("hm3");
var awayPlusOne = document.getElementById("aw1");
var awayPlusTwo = document.getElementById("aw2");
var awayPlusThree = document.getElementById("aw3");

homePlusOne.addEventListener("click", function() {
    homePoints++;
    homeScore.textContent = homePoints;
    winnerColor();
})

homePlusTwo.addEventListener("click", function() {
    homePoints += 2;
    homeScore.textContent = homePoints;
    winnerColor();
})

homePlusThree.addEventListener("click", function() {
    homePoints += 3;
    homeScore.textContent = homePoints;
    winnerColor();
})

awayPlusOne.addEventListener("click", function() {
    awayPoints++;
    awayScore.textContent = awayPoints;
    winnerColor();
})

awayPlusTwo.addEventListener("click", function() {
    awayPoints += 2;
    awayScore.textContent = awayPoints;
    winnerColor();
})

awayPlusThree.addEventListener("click", function() {
    awayPoints += 3;
    awayScore.textContent = awayPoints;
    winnerColor();
})


function winnerColor() {

    if (homePoints > awayPoints) {
        console.log("Home winning");
        document.getElementById("home-label").style.color = "Red";
        document.getElementById("away-label").style.color = "black";

    } else if (awayPoints > homePoints) {
        console.log("Away Winning");
        document.getElementById("away-label").style.color = "Red";
        document.getElementById("home-label").style.color = "black";

    } else {
        document.getElementById("home-label").style.color = "black";
        document.getElementById("away-label").style.color = "black";

    }

}

