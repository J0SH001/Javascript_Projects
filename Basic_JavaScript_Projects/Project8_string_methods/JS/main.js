
function full_Sentence(){ //Concat Javascript example
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.".toUpperCase(); //toUppercase example
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById('right').innerHTML = whole_sentence;
}

function slice_Method(){ //Slice Javascript example
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.slice(27, 33);
    document.getElementById('slice').innerHTML = section;
    document.getElementById('slices').innerHTML = Sentence.search("play");
}

function string_Method() { //toString Javascript example
    var x = 182;
    document.getElementById('Numbers_to_string').innerHTML = x.toString();
}

function precision_Method(){ //toPrecision Javascript example
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Method(){ //toFixed Javascript example
    var x = 12938.3012987376112;
    document.getElementById("fixed").innerHTML = x.toFixed(3);
}

function valueof_Method(){ //valueOf Javascript example
    var x = 12938.3012987376112;
    document.getElementById("val").innerHTML = x.valueOf();
}