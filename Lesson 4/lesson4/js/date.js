function lastMod() {
    // var should be let to hit the new JS standards
    let x = new Date(document.lastModified);
    document.getElementById("demo").innerHTML = x;
}

lastMod();

