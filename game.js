var tieCards = [];
var myWinCards = [];
var enemyWinCards = [];
var allCards = [];
var myCard = [];
var enemyCard = [];
var myRandom = 0;
var enemyRandom = 0;

function init() {
    createObject();
    randomCards();
    putCards();
}

function createObject() {
    var removed;
    for (var k in cards_arr) {
        allCards.push(cards_arr[k]);
    }
    for (var i in cards_arr) {
        var j = Math.floor(Math.random() * allCards.length);
        if (i % 2 == 0) {
            removed = allCards.splice(j, 1);
            myCard.push(removed[0]);
        } else {
            removed = allCards.splice(j, 1);
            enemyCard.push(removed[0]);
        }
    }
}

function randomCards() {
    myRandom = Math.floor(Math.random() * myCard.length);
    enemyRandom = Math.floor(Math.random() * enemyCard.length);
}

function putCards() {
    OpponentCard.innerHTML = "<img src='images/backcard.jpg'>";
    MyCard.innerHTML = "<img src='images/backcard.jpg'>";
}

function showCards() {
    OpponentCard.innerHTML = "<img src='images/" + enemyCard[enemyRandom].id + ".JPG'>";
    MyCard.innerHTML = "<img src='images/" + myCard[myRandom].id + ".JPG'>";
}

function fight() {
    showCards();
    var takenCard;
    if (enemyCard[enemyRandom].value > myCard[myRandom].value) {
        if (myCard.length == 1 && myWinCards.length == 0) {
            alert("The Opponent won");
        } else {
            takenCard = myCard.splice(myRandom, 1);
            enemyWinCards.push(takenCard[0]);
            takenCard = enemyCard.splice(enemyRandom, 1);
            enemyWinCards.push(takenCard[0]);
            while (tieCards.length != 0) {
                enemyWinCards.push(tieCards.shift());
            }
            resetCards();
        }
    } else if (enemyCard[enemyRandom].value < myCard[myRandom].value) {
        if (enemyCard.length == 1 && enemyWinCards == 0) {
            alert("I won");
        } else {
            takenCard = myCard.splice(myRandom, 1);
            myWinCards.push(takenCard[0]);
            takenCard = enemyCard.splice(enemyRandom, 1);
            myWinCards.push(takenCard[0]);
            while (tieCards.length != 0) {
                myWinCards.push(tieCards.shift());
            }
            resetCards();
        }
    } else {
        if (myCard.length == 1 && myWinCards.length == 0) {
            alert("Opponent won");
        } else if (enemyCard.length == 1 && enemyWinCards.length == 0) {
            alert("i won");
        } else {
            takenCard = myCard.splice(myRandom, 1);
            tieCards.push(takenCard[0]);
            takenCard = enemyCard.splice(enemyRandom, 1);
            tieCards.push(takenCard[0]);
            resetCards();
        }
    }
    randomCards();
}

function reset() {
    while (myCard.length != 0) {
        myCard.shift();
    }
    while (enemyCard.length != 0) {
        enemyCard.shift();
    }
    while (myWinCards.length != 0) {
        myWinCards.shift();
    }
    while (enemyWinCards.length != 0) {
        enemyWinCards.shift();
    }
    init();
}

function resetCards() {
    if (myCard.length == 0 && myWinCards.length != 0) {
        while (myWinCards.length != 0) {
            myCard.push(myWinCards.shift());
        }
    }
    if (enemyCard.length == 0 && enemyWinCards.length != 0) {
        while (enemyWinCards.length != 0) {
            enemyCard.push(enemyWinCards.shift());
        }
    }

}