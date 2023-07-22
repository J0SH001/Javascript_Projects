document.write(typeof 3); //Displays "number"
document.write("10" + 5); //Displays "105"
function bean() {
    document.getElementById("Albert").innerHTML= 0/0; //Function that displays "NaN"
} 
 
function green(){
    document.getElementById("Alberto").innerHTML= isNaN('hello'); //Function that displays "false"
}

function greenbean(){
    document.getElementById("Alberts").innerHTML= isNaN(8); //Function that displays "false"
}

function bigbean(){
    document.getElementById("Alberta").innerHTML= 3E310; //Function that displays "Infinity"
}

function smallbean(){
    document.getElementById("Albertian").innerHTML= -3E310; //Function that displays "-Infinity"
}

document.write(10 < 5); //Returns false
document.write(10 > 5); //Returns false

console.log(2 + 2); //Writing text in the console
console.log(2 < 1); //Writing text in the console

document.write(10 == 5); //Check for equal data value
document.write(5 == 5); //Check for equal data value

document.write(5 === 5); //Check for equal data type and data value
document.write("6" === 5); //Check for equal data type and data value
document.write("5" === 5); //Check for equal data type and data value
document.write(6 === 5); //Check for equal data type and data value

document.write(10 < 5 || 5 < 10); //Fun with Boolean logic
document.write(10 < 5 || 9 < 5); //Fun with Boolean logic
document.write(10 < 5 && 9 > 5); //Fun with Boolean logic
document.write(10 > 5 && 9 > 5); //Fun with Boolean logic

function smallfry(){
    document.getElementById("Al").innerHTML= !(20 < 10); //Not function
}

function bigfry(){
    document.getElementById("Alice").innerHTML= !(20 > 10); //Not function
}