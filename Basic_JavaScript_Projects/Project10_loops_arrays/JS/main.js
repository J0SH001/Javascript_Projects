function Call_Loop(){ //Loop practice
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; //For loop example
let Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){ //Array example
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is "+ Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color:"black", size: "large"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description;

function breaky(){ //Break example
    let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += i + "<br>";
    }

    document.getElementById("hello?").innerHTML = text;
}

function continuey(){ //Continue example
    let texts = "";
    for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    texts += i + "<br>";
    }

    document.getElementById("hello??").innerHTML = texts;
}