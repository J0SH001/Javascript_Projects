function c_function() {
    var Color_output;
    var Colors = document.getElementById("colors").value;
    var Color_String = " is a terrible color! :(";
    switch(Colors){
        case "Red":
            Color_output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_output = "Green" + Color_String;
        break;
        case "Blue":
            Color_output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_output = "Purple" + Color_String;
        break;
        default:
            Color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = Color_output;
}

function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function colors(){
    var c = document.getElementById("blank");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(100, 50, 20, 100, 50, 90);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "blue");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 250);
}
