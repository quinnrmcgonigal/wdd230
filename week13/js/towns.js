const requestURL = 'https://quinnrmcgonigal.github.io/wdd230/week13/js/skisessions.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'].filter(town => town.name == "1 Hour Session" || town.name == "3 Hour Session" || town.name == "1 Day Session" || town.name == "Weekend Session");
        const activeTown = document.querySelector('a.active').textContent;
        towns.forEach(town => {
            if (activeTown == "Home") {
}
            else {
                let lon;
                let lat;
                switch(activeTown){
                    case "Photo Packages":
                        lon = 110.7624;
                        lat = 43.4799;
                        break;
                    case "1 Hour Session":
                        break;
                    case "3 Hour Session":
                        break;
                    case "1 Day Session":
                        break;
                    case "Weekend Session":
                        break;
                }
                
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
                if(town.name == "1 Hour Session"){
                let eventHeader = document.createElement('h3');
                let events = town.events;
                let eventList = document.createElement('ul'); 
                let eventsDiv = document.querySelector(".cards");
                events.forEach(event => {
                    let li =document.createElement('li');
                    li.textContent = event;
                    eventList.appendChild(li);
                }); 
                eventHeader.textContent= `${town.name}`;
                eventsDiv.appendChild(eventHeader);
                eventsDiv.appendChild(eventList);
                }
                if(town.name == "3 Hour Session"){
                    let eventHeader = document.createElement('h3');
                    let events = town.events;
                    let eventList = document.createElement('ul'); 
                    let eventsDiv = document.querySelector(".cards");
                    events.forEach(event => {
                        let li =document.createElement('li');
                        li.textContent = event;
                        eventList.appendChild(li);
                    }); 
                    eventHeader.textContent= `${town.name}`;
                    eventsDiv.appendChild(eventHeader);
                    eventsDiv.appendChild(eventList);
                    }
                    if(town.name == "1 Day Session"){
                        let eventHeader = document.createElement('h3');
                        let events = town.events;
                        let eventList = document.createElement('ul'); 
                        let eventsDiv = document.querySelector(".cards");
                        events.forEach(event => {
                            let li =document.createElement('li');
                            li.textContent = event;
                            eventList.appendChild(li);
                        }); 
                        eventHeader.textContent= `${town.name}`;
                        eventsDiv.appendChild(eventHeader);
                        eventsDiv.appendChild(eventList);
                        }
                        if(town.name == "Weekend Session"){
                            let eventHeader = document.createElement('h3');
                            let events = town.events;
                            let eventList = document.createElement('ul'); 
                            let eventsDiv = document.querySelector(".cards");
                            events.forEach(event => {
                                let li =document.createElement('li');
                                li.textContent = event;
                                eventList.appendChild(li);
                            }); 
                            eventHeader.textContent= `${town.name}`;
                            eventsDiv.appendChild(eventHeader);
                            eventsDiv.appendChild(eventList);
                            }
            }
        }); 
    });