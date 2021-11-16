const menubutton = document.querySelector('.home');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// show pancake day

var now  = new Date();      


var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[now.getDay()];

if (day == "Friday") {
    document.getElementById("bannerparty").innerHTML="Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    
  } 

 else if (day == "Monday","Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday") {
    document.getElementById("bannerparty").innerHTML="No announcements today!";
} 





