window.addEventListener("load", function () {
  myMap = this.document.getElementById("mymap");
  myMap.style.display = "none";
}); // end of load

//==> 1- Check availability in user Browser ==> object navigator
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
// } else {
//   myMap.innerText = "Sorry update and try again";
// }

let mapDiv = document.getElementById("mymap");
let infoBox = document.querySelector(".info-box");
mapDiv.style.display = "none";
infoBox.style.display = "none";

let latitude = document.getElementById("lat");
let longitude = document.getElementById("lon");
let timestamp = document.getElementById("time");
let accuracy = document.getElementById("acc");

let [mapBtn, infoBtn] = document.querySelectorAll("#buttons button"); //==> use this way instead of giving classes

infoBtn.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (e) {
      getPosition(e);
      infoBox.style.display = "block";
      mapDiv.style.display = "none";
    }, errorHandler);
  } else {
    myMap.innerText = "Sorry update and try again";
  }
});

mapBtn.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (e) {
      getPosition(e);
      getLocation();
      mapDiv.style.display = "block";
      infoBox.style.display = "none";
    }, errorHandler);
  } else {
    myMap.innerText = "Sorry update and try again";
  }
});

function getPosition(e) {
  console.log(e);
  lat = e.coords.latitude;
  latitude.innerText = lat;
  lon = e.coords.longitude;
  longitude.innerText = lon;
  time = new Date(e.timestamp).toString();
  timestamp.innerText = time;
  acc = e.coords.accuracy;
  accuracy.innerText = acc;
}

function getLocation() {
  let location = new google.maps.LatLng(lat, lon);
  let specs = { zoom: 17, center: location };
  new google.maps.Map(mymap, specs);
}
function errorHandler(err) {
  console.log(err);
  console.log("geolocation Error: ", err.message);
  myMap.innerText = "geolocation Error";
}
