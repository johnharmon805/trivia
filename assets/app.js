var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    $("#timer").html(count);
    if (count <= 0) {
        clearInterval(counter);
        alert("Time's Up!");
        $("quiz").hide();
        check();
    }
}

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;
    var incorrect = 0;
}