$(document).ready(function() {
    
    //set global variables
    var timeLeft = 60;
    var score = 0;
    
    var questions = [{
        question: 'Where does Veronica live?',
        options: ['Newport Beach', 'Neptune', 'Huntington Beach'],
        answer: 'Neptune'
    }, {
        question: 'What does a trip to the dentist mean?',
        options: ['Going to the dentist', 'Going to jail', 'Someone spitting in your drink'],
        answer: 'Someone spitting in your drink'
    }, {
        question: 'What do Veronica Mars fans call themselves?',
        options: ['Marshmallows', 'Martians', 'Sleuth Sistas'],
        answer: 'Marshmallows'
    }];

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
    };

    //create a function that builds out the questions
    function questionBuildOut() {
        for (i=0; i<=questions.length; i++) {

            var qDivCreate = "<div class='quiz-questions'>" + questions[i].question + "</div>";

            $("#quiz").append(qDivCreate);

            for (o=0; o<=2; o++) {
                
                //having trouble here with getting only one radio per question...
                //var qName = "question" + //what goes here? i've tried so many things...;
                var qOptionsCreate = "<label><input type='radio' name='qName'>" + questions[i].options[o] + "</label>";
                
                $("#quiz").append(qOptionsCreate);
            }
        }
    }

    //create on click function for start button
    $("#start-button").click(function(){
        $("#countdown").html("Time Remaining: " + parseInt(timeLeft));
        triviaStart();
        questionBuildOut();
        $("#submit").removeClass("hide").addClass("button");
    })
})
    //     //Question 1 - Correct Answer is B
    //     "<p>Where does Veronica live?</p><label><input type='radio' name='question1' value='A'> Newport Beach</label><label><input type='radio' name='question1' value='B'> Neptune</label><label><input class='q1' type='radio' name='question1' value='C'> Huntington Beach</label>", 
        
    //     //Question 2 - Correct Answer is C
    //     "<p>What does a trip to the dentist mean?</p><label><input type='radio' name='question2' value='A'> Going to the dentist</label><label><input type='radio' name='question2' value='B'> Going to jail</label><label><input type='radio' name='question2' value='C'> Someone spitting in your drink</label>", 
        
    //     //Question 3 - Correct Answer is A
    //     "<p>What do fans of Veronica Mars call themselves?</p><label><input type='radio' name='question3' value='A'> Marshmallows</label><label><input type='radio' name='question3' value='B'> Martians</label><label><input type='radio' name='question3' value='C'> Sleuth Sisters</label>"]