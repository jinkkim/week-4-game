//variables
var crystal = [0,0,0,0];
var randomNR = 0;
var crystalSum = 0;
var winScore = 0;
var loseScore = 0;


$(document).ready(function(){
    resetVariables();

    $("#diamond").click(function(){
       crystalSum += crystal[0];
       $("#crystalSum").html("<h2>" + crystalSum + "</h2>");
       compareScore(randomNR,crystalSum);


    });

    $("#opal").click(function(){
        crystalSum += crystal[1];
        $("#crystalSum").html("<h2>" + crystalSum + "</h2>");
        compareScore(randomNR,crystalSum);

    });

    $("#ruby").click(function(){
        crystalSum += crystal[2];
        $("#crystalSum").html("<h2>" + crystalSum + "</h2>");
        compareScore(randomNR,crystalSum);
    });

    $("#sapphire").click(function(){
        crystalSum += crystal[3];
        $("#crystalSum").html("<h2>" + crystalSum + "</h2>");
        compareScore(randomNR,crystalSum);
    });

});


//variables reset function
function resetVariables(){
    randomNR = Math.floor(Math.random()*102)+19;


    for (i=0;i<4;i++){
        //with overlap
        //crystal[i] = Math.floor(Math.random()*12)+1;


        //without overlap
        do {
            var temp_crystal = Math.floor(Math.random()*12)+1;
            var test = crystal.indexOf(temp_crystal);
        } while(test != -1)
        crystal[i] = temp_crystal;
    }
    crystalSum = 0;
    console.log("random Nr: ", randomNR,"Crystal: ", crystal);
    $("#randomNR").html("<h2>" + randomNR + "</h2>");
    $("#crystalSum").html("<h2>" + crystalSum + "</h2>");

}

//compare scores
function compareScore(randomNR, crystalSum) {
    if (crystalSum == randomNR){
        winScore++;
        $("#wins").html("Wins: " + winScore);
        $("#doIwin").html("You win!");
        resetVariables();
    } else if (crystalSum > randomNR){
        loseScore++;
        $("#losses").html("losses: " + loseScore);
        $("#doIwin").html("You lose!");
        resetVariables();
    } else {
        $("#doIwin").html("");
    }

}
