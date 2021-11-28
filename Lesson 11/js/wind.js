function zeWindChill (speed, temp) {
    var speed = document.getElementById("speed").innerText;
    var temp = document.getElementById("temp").innerText;
    let windChill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * temp) * Math.pow(speed, 0.16);
    if (temp <= 50 && speed > 3) {
        return Math.round(windChill) + "&#176;";
    }
    else {
        return "N/A";
    }
  }

  document.getElementById("chilly").innerHTML = zeWindChill();
