let playerToken = "X";
let playerXchoices = [];
let playerOchoices = [];

let winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let checkWin = function(){

    let matchCount = 0;

    for(let i = 0; i < winningCombos.length; i++){
        for(let j = 0; j < winningCombos[0].length; j++){
            if(playerXchoices.includes(winningCombos[i][j])){
                alert("FOUND IT");
            }
        }
    }

};

let playerTurn = function(element){

    element.innerText = playerToken;

    if(playerToken === "X"){
        playerXchoices.push(parseInt(element.id));
        playerToken = "O";
        element.onclick = "";
    }else{
        playerOchoices.push(element.id);
        playerToken = "X";
        element.onclick="";
    }

    checkWin();
};

let setUpboard = function(){
  //Tie the functions to the boxes
    let boxes = document.getElementsByClassName("box");

    for(let i = 0; boxes.length; i++){

        boxes[i].onclick = function(){playerTurn(this)};

    }

};
