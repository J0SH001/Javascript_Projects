function Ride_Function() { //Declaring a function
    var Height, Can_ride; //Declaring variables
    Height = document.getElementById("Height").value; //Retrieve user input
    Can_ride = (Height < 17) ? "You are too young":"You are old enough"; //Ternary operator based on whether or not the number is less than 17
    function things(){
        function to_vote() {Can_ride += " to vote.";} //Declaring a nested function
        to_vote();  //Performing nested function
        return Can_ride
    }
    document.getElementById("Ride").innerHTML = things(); //Displayed result
}