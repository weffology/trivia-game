$(document).ready(function() {
    
    //set global variables
    var timeLeft = 10;
    var score = 0;
    
    var questions = [{
        
        name: 'home',
        question: 'Where does Veronica live?',
        options: ['Newport Beach', 'Neptune', 'Huntington Beach'],
        answer: 'Neptune'
    }, {
        name: 'dentist',
        question: 'What does a trip to the dentist mean?',
        options: ['Going to the dentist', 'Going to jail', 'Someone spitting in your drink'],
        answer: 'Someone spitting in your drink'
    }, {
        name: 'fans',
        question: 'What do Veronica Mars fans call themselves?',
        options: ['Marshmallows', 'Martians', 'Sleuth Sisters'],
        answer: 'Marshmallows'
    }];

    //create on click function for start button
    $("#start-button").click(function(){
        $("#countdown").html("Time Remaining: " + parseInt(timeLeft));
        triviaStart();
        questionBuildOut();
    })

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
                quizGrader();
                $("#countdown").html("You got "+ score + " correct!");
            }
        }
    };

    //create a function that builds out the questions
    function questionBuildOut() {
        for (i=0; i<=questions.length; i++) {
            var qDivCreate = "<div class='quiz-questions'>" + questions[i].question + "</div>";
            $("#quiz").append(qDivCreate);

            for (o=0; o<=2; o++) {
                var qOptionsCreate = "<label><input onclick='check()' type='radio' name='" + questions[i].name + "' value='" + questions[i].options[o] + "'/>" + questions[i].options[o] + "</label>";
                $("#quiz").append(qOptionsCreate);
            }
        }
    }
    //create a function to check the answers
    function check() {
        if ($("this").val() == questions[i].answer) {
            score++;   
        } else {
            score--;
            }   
    }
})