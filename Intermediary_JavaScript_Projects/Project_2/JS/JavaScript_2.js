function javascript_validation(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("Both name fields must be filled out.");
        return false;
    }
}