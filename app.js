// Regular map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.0519752, lng: -76.314270999999 },
    zoom: 15,
    scrollwheel: false,
    zoomControl: true
  });
}
