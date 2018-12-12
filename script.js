$(document).ready(function(){
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#answer").text( answer );
        $("8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        console.log(question);
        console.log(answer);
    };

    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
		$("#answer").fadeIn(4000);
        magic8Ball.askQuestion(question);
        setTimeout(
          function() {
          $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 4000);
        $("#8ball").effect("shake");
    };

    $("#questionButton").click( onClick );

  	$("#answer").hide();

});
