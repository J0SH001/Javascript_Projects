var x = 5; //Global variable
function simple_math(){
    var y = 10; //Local variable
    document.write(x + y);
}

function get_Date(){ //This is the function that I debugged with the console log
    if (15 < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Height_Function() { //Original if/else function
    Height = document.getElementById("Height").value;
    if (Height <= 5) {
        Verdict = "You are short..."
    }
    else{
        Verdict = "You're not too short..."
    }
    document.getElementById("fred").innerHTML = Verdict;
}

function Time_function() { //The last date function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 10){
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}