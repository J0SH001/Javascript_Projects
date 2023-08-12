function returnID() {
    var a = this.getAttribute('id');
    document.getElementById('name').innerHTML = a;
}