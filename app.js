// Regular map
let map;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.0519752, lng: -76.314270999999 },
    zoom: 15,
    scrollwheel: false,
    zoomControl: true
  });

  infoWindow = new google.maps.InfoWindow({ map: map });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
}

const places = [
  {
    id: 1,
    restaurantName: 'Steakhouse',
    address: '13, Hradcanska st. Prague',
    lat: 50.087617,
    lng: 14.418274,
    averageRating: 5,
    ratings: [
      {
        stars: 5,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 5,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 2,
    restaurantName: 'MeetBurger',
    address: '12, long st. Prague',
    lat: 50.087617,
    lng: 14.419371,
    averageRating: 5,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 5,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 3,
    restaurantName: 'Bakery Crusta',
    address: '39 Rue des Petites Écuries, 75010 Paris',
    lat: 50.0860663,
    lng: 14.4187638,
    averageRating: 4,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 4,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 4,
    restaurantName: 'Trdelnik',
    address: '1 st, Prague',
    lat: 50.086151,
    lng: 14.416491,
    averageRating: 4,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 4,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 5,
    restaurantName: 'Las Adelitas',
    address: '9 st, Prague',
    lat: 50.086367,
    lng: 14.419425,
    averageRating: 3,
    ratings: [
      {
        stars: 3,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 3,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 6,
    restaurantName: 'Karavell',
    address: '39 Rue des Petites Écuries, 75010 Paris',
    lat: 50.08532,
    lng: 14.41982,
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 7,
    restaurantName: 'BrewCoff Cafe',
    address: '39 st, Prague',
    lat: 50.086205,
    lng: 14.419432,
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!'
      }
    ]
  },
  {
    id: 8,
    restaurantName: 'Little Eataly',
    address: '4 st, Prague',
    location: {
      lat: 50.08541,
      lng: 14.420918
    },
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!'
      }
    ]
  }
];

console.log(places);

places.forEach(place => {
  let output = `<p>${place.restaurantName}</p>`;
  document.getElementById('restaurants').innerHTML += output;
});
