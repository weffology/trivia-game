$(document).ready(function(){
    
    //set global variables
    var timeLeft = 60;
    var score = 0;
    var userAnswers = [];
    var correctAnswers = ["B", "C", "A"];

    //create countdown timer function
    function triviaStart() {
        $("#button-holder").addClass("hide");
        var timer = setInterval (countdownChanger, 1000);
        function countdownChanger () {            
            timeLeft--;
            $("#countdown").html("Time Remaining: " + parseInt(timeLeft));
            if (timeLeft <= 0) {
                alert ("TIME'S UP!");
                clearInterval(timer);
                $("#countdown").html("Score: "+ score);
            }
        }
    }

    function scoreTally() {

    }

    //create function to check that only one answer is selected for each question
    function oneAnswerEach() {
        var options = $("input");
        for (var i=0; i<options.length; i++) {
            if (options[i].checked) {
                return true;
            }
        }
        return false;
    }

    //create on click function for start button
    $("#start-button").click(function(){
        $("#quiz-questions").removeClass("hide");
        $("#countdown").html("Time Remaining: " + parseInt(timeLeft));
        triviaStart();
    })

    //create function that tracks answers when clicked
    $("input").click(function(){
    })
})