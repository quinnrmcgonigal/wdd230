const requestURL = 'https://quinnrmcgonigal.github.io/wdd230/Lesson%2011/js/towns.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'].filter(town => town.name == "Jackson Hole" || town.name == "Driggs" || town.name == "Victor");
        const activeTown = document.querySelector('a.active').textContent;
        towns.forEach(town => {
            if (activeTown == "Home") {
}
            else {
                let lon;
                let lat;
                switch(activeTown){
                    case "Victor":
                        lon = 111.1113;
                        lat = 43.6026;
                        break;
                    case "Jackson Hole":
                        lon = 110.7624;
                        lat = 43.4799;
                        break;
                    
                }
                const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=3c5e9fdd6251ff4adb6c894e7481862d&units=imperial`;
                fetch(requestURL)
                    .then((response) => response.json())
                    .then((jsObject) => {
                        let highT = jsObject.main.temp_max;
                        let t = jsObject.main.temp;
                        let s = jsObject.wind.speed;
                        let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
                        document.getElementById('humidity').textContent = jsObject.main.humidity;
                        document.getElementById('weatherDescr').textContent = jsObject.weather[0].description;
                        document.getElementById('current-temp').textContent = Math.round(t);
                        document.getElementById('highTemp').innerHTML = `${Math.round(highT)}&deg;F`;
                        document.getElementById('windSpeed').textContent = Math.round(s);
                        if (t <= 50 && s >= 3.0) {
                            document.querySelector("#windchill").innerHTML = Math.round(windchill);
                        }
                        else {
                            document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A";
                        }

                    });
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=3c5e9fdd6251ff4adb6c894e7481862d&units=imperial`;
                fetch(forecastURL)
                    .then((response) => response.json())
                    .then((jsObject) => {
                        const forecastfive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
                        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
                        let i = 1;

                        forecastfive.forEach(forecast => {
                            const day = forecast.dt_txt;
                            let d = new Date(day).getDay()
                            const srcset = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                            document.querySelector(`#day${i}`).textContent = weekdays[d];
                            document.querySelector(`#forecast${i}`).innerHTML = Math.round(forecast.main.temp) + "&deg;F";
                            document.querySelector(`#icon${i}`).setAttribute('src', srcset);
                            document.querySelector(`#icon${i}`).setAttribute('alt', forecast.weather[0].description);
                            i++;
                        });
                    });
                if(town.name == activeTown){
                let eventHeader = document.createElement('h3');
                let events = town.events;
                let eventList = document.createElement('ul'); 
                let eventsDiv = document.querySelector("#upcomingEvents");
                events.forEach(event => {
                    let li =document.createElement('li');
                    li.textContent = event;
                    eventList.appendChild(li);
                }); 
                eventHeader.textContent= `${town.name} Upcoming Events`;
                eventsDiv.appendChild(eventHeader);
                eventsDiv.appendChild(eventList);
                }

            }
        });

    });