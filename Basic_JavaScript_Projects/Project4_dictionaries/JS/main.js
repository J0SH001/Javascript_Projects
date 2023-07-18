function My_dictionary() { //Declaring a function
var Albert = { //Declaring a variable
    Color: "Blue", //A key-value pair
    Status: "Deceased", //A key-value pair
    Weight: "5lbs", //A key-value pair
    };
    delete Albert.Status; //Deleting a key-value pair
    document.getElementById("dictionary").innerHTML = Albert.Status + Albert.Color; //Display both the status and color key-values of the function "Albert"
}