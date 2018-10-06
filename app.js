document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('#map').length > 0) {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else lang = 'en';

    let js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src =
      'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyBkPOD_JvZ2A5JFPDenEgozAnTTjPMOhNM&language=' +
      lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });

  fetch('markers.json')
    .then(function(response) {
      return response.json();
    })
    .then(plotMarkers);
}

// let markers;
// let bounds;

// function plotMarkers(m) {
//   markers = [];
//   bounds = new google.maps.LatLngBounds();

//   m.forEach(function(marker) {
//     let position = new google.maps.LatLng(marker.lat, marker.lng);

//     markers.push(
//       new google.maps.Marker({
//         position: position,
//         map: map,
//         animation: google.maps.Animation.DROP
//       })
//     );

//     bounds.extend(position);
//   });

//   map.fitBounds(bounds);
// }
