let fname = "";
let seconds = 60;
let timerInterval;

window.onload = function () {
    timerInterval = setInterval(() => {
        seconds -= 1;
        document.getElementById("timer").textContent = `Time: ${seconds}s`;
    }, 1000);
};


function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings" + age + "year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    //get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. You are a sugar addict!";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Thats a fishy answer!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are right!!!!";
    }

}

function truth1() {
    let truthAnswer = document.getElementById("truth1-answer");

    let bornSelected = document.getElementById("truth1").checked;
    let languagesSelected = document.getElementById("truth2").checked;
    let colorSelected = document.getElementById("lie").checked;

    if (bornSelected & languagesSelected) {
        truthAnswer.innerHTML = fname + ", you are right!!!!";
    }
    else {
        truthAnswer.innerHTML = fname + ", you are wrong.";
    }
}
