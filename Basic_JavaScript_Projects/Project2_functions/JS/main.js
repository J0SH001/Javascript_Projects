
function My_First_Function() {  //This is the name of our function
    var str = "This is the button text!"; //This is defining the variable known as "str"
    str += " I hate functions"; //This tells the function to add another string to the variable "str"
    document.getElementById("Button_Text").innerHTML = str; //This one cunfuses me a bit, I think it targets the ID that the function is applied to
}