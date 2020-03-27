const button = document.getElementById("submitBtn")
button.addEventListener('click', fizzBuzz);

function fizzBuzz(){
    //There is a function to prevent reload of the form.
    //Can't remember it specifically.
    
    restartGame();
    var inputNumber = document.querySelector(".fizzBuzzNumber");
    inputNumber = inputNumber.value;

    var containerHtml = document.querySelector(".resultsSection").innerHTML;

    for (i = 1; i <= inputNumber; i++) {
        var text = i;
        if (i % 3 == 0 && i % 5 == 0) {
            text == "fizzBuzz";
        }else if (i % 5 == 0) {
            text == "buzz";
        } else if (i % 3 == 0) {
            text = "fizz";
        }

        containerHtml += "<div> <p>" + text +  "</p></div>";
    }
}

function restartGame(){
    document.querySelector(".resultsSection").innerHTML = "";

    return;
}

function deleteWhenClicked(){
    const section = document.querySelector(".resultsSection").innerHTML;

    //Maybe it's the other way around (trget, event)
    section.addEventListener('click', (event) => {
        if(event.target == ".div"){
            event.target.innerHTML = " ";
        }
    })
}