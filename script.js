var turn;
var b1 = "";
var b2 = "";
var b3 = "";
var b4 = "";
var b5 = "";
var b6 = "";
var b7 = "";
var b8 = "";
var b9 = "";

var color = "lightblue";

var turnsLeft = 9;

var won = false;

if (Math.random() < 0.5)  {
    turn = "X";
} else {
    turn = "O";
}
function display() {
    document.getElementById("turn").innerHTML = turn;   
}

function changeTurn()  {
    if (color == "lightcoral")  {
        color = "lightblue";
    }else{
        color = "lightcoral"
    }
    document.body.style.backgroundColor = color;
    if (turn == "X") {
        turn = "O";
    }else{
        turn = "X";
    }
    turnsLeft -= 1;
    console.log(turnsLeft);
}

console.log(turn);

function one()  {
    if (b1 == "") {
        document.getElementById("1").value = turn;
        b1 = turn;
        changeTurn();
    }
}

function two()  {
    if (b2 == "") {
        document.getElementById("2").value = turn;
        b2 = turn;
        changeTurn();
    }
}

function three()  {
    if (b3 == "") {
        document.getElementById("3").value = turn;
        b3 = turn;
        changeTurn();
    }
}

function four()  {
    if (b4 == "") {
        document.getElementById("4").value = turn;
        b4 = turn;
        changeTurn();
    }
}

function five()  {
    if (b5 == "") {
        document.getElementById("5").value = turn;
        b5 = turn;
        changeTurn();
    }
}

function six()  {
    if (b6 == "") {
        document.getElementById("6").value = turn;
        b6 = turn;
        changeTurn();
    }
}

function seven()  {
    if (b7 == "") {
        document.getElementById("7").value = turn;
        b7 = turn;
        changeTurn();
    }
}

function eight()  {
    if (b8 == "") {
        document.getElementById("8").value = turn;
        b8 = turn;
        changeTurn();
    }
}

function nine()  {
    if (b9 == "") {
        document.getElementById("9").value = turn;
        b9 = turn;
        changeTurn();
    }
}

function change()  {
    if (turn == "X")  {
        return "O";
    }else{
        return "X";
    }
}

function check()  {
    document.getElementById("turn").innerHTML = turn;
    //X
    if (b1 != "" && b2 != "" && b3 != "" && b1 == b2 && b2 == b3)  {
        console.log(change() + " won");
        won = true;
    }
    if (b4 != "" && b5 != "" && b6 != "" && b4 == b5 && b5 == b6)  {
        console.log(change() + " won");
        won = true;
    }
    if (b7 != "" && b8 != "" && b9 != "" && b7 == b8 && b8 == b9)  {
        console.log(change() + " won");
        won = true;
    }
    if (b1 != "" && b4 != "" && b7 != "" && b1 == b4 && b4 == b7)  {
        console.log(change() + " won");
        won = true;
    }
    if (b2 != "" && b5 != "" && b8 != "" && b2 == b5 && b5 == b8)  {
        console.log(change() + " won");
        won = true;
    }
    if (b3 != "" && b6 != "" && b9 != "" && b3 == b6 && b6 == b9)  {
        console.log(change() + " won");
        won = true;
    }
    if (b1 != "" && b5 != "" && b9 != "" && b1 == b5 && b5 == b9)  {
        console.log(change() + " won");
        won = true;
    }
    if (b3 != "" && b5 != "" && b7 != "" && b3 == b5 && b5 == b7)  {
        console.log(change() + " won");
        won = true;
    }

    if (won)  {
        window.alert(change() + " won");   
        reset(); 
    }

    if (turnsLeft == 0)  {
        window.alert("its a draw");
        reset();
    }
}

function reset()  {
    won = false;
    b1 = "";
    b2 = "";
    b3 = "";
    b4 = "";
    b5 = "";
    b6 = "";
    b7 = "";
    b8 = "";
    b9 = "";
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    document.getElementById("5").value = "";
    document.getElementById("6").value = "";
    document.getElementById("7").value = "";
    document.getElementById("8").value = "";
    document.getElementById("9").value = "";
    turnsLeft = 9;
}