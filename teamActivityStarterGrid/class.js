function showAlert() {
    var myText = "You've signed in!";
    alert (myText);
  }

  color = '#FFCF2D'
document.querySelector('.popular').style.backgroundColor = color;

y = document.getElementsByTagName('a');
for (let i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = '#FFCF2D';
}



//appear
  function showDiv1() {
    setTimeout(function () {
        document.getElementById("card1").style.visibility = "visible";
    }, 1000);
}

showDiv1();

function showDiv2() {
  setTimeout(function () {
      document.getElementById("card2").style.visibility = "visible";
  }, 2000);
}

showDiv2();

function showDiv3() {
  setTimeout(function () {
      document.getElementById("card3").style.visibility = "visible";
  }, 3000);
}

showDiv3();

document.getElementById("bpricing").style.fontSize = "x-large";