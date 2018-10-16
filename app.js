// return objects into a single const map, infoWindow

// const mappy =

// Regular map
let map;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.0519752, lng: -76.314270999999 },
    zoom: 15,
    scrollwheel: false,
    zoomControl: true,
  });

  infoWindow = new google.maps.InfoWindow({ map: map });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      },
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
      : "Error: Your browser doesn't support geolocation.",
  );
}

const places = [
  {
    restaurantName: 'Steakhouse',
    address: '13, Hradcanska st. Prague',
    lat: 50.087617,
    lng: 14.418274,
    averageRating: 5,
    ratings: [
      {
        stars: 5,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 5,
        comment: 'OMG! But not many veggie options.',
      },
      {
        stars: 5,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'MeetBurger',
    address: '12, long st. Prague',
    lat: 50.087617,
    lng: 14.419371,
    averageRating: 5,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 5,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'Bakery Crusta',
    address: '39 Rue des Petites Écuries, 75010 Paris',
    lat: 50.0860663,
    lng: 14.4187638,
    averageRating: 4,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 4,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'Trdelnik',
    address: '1 st, Prague',
    lat: 50.086151,
    lng: 14.416491,
    averageRating: 4,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 4,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'Las Adelitas',
    address: '9 st, Prague',
    lat: 50.086367,
    lng: 14.419425,
    averageRating: 3,
    ratings: [
      {
        stars: 3,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 3,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'Karavell',
    address: '39 Rue des Petites Écuries, 75010 Paris',
    lat: 50.08532,
    lng: 14.41982,
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'BrewCoff Cafe',
    address: '39 st, Prague',
    lat: 50.086205,
    lng: 14.419432,
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!',
      },
    ],
  },
  {
    restaurantName: 'Little Eataly',
    address: '4 st, Prague',
    location: {
      lat: 50.08541,
      lng: 14.420918,
    },
    averageRating: 2,
    ratings: [
      {
        stars: 2,
        comment: 'Great! But not many veggie options.',
      },
      {
        stars: 2,
        comment: 'My favorite restaurant!',
      },
    ],
  },
];

console.log(places);

function showPlaces(data) {
  data.forEach(restoName => {
    let h3 = document.createElement('h3'); // is a node
    h3.innerHTML = restoName.restaurantName;
    let list = document.getElementById('restaurants');
    list.appendChild(h3);

    let toggeRatingsBtn = document.createElement('button');
    toggeRatingsBtn.setAttribute('class', 'toggleBtn');
    h3.appendChild(toggeRatingsBtn);

    toggeRatingsBtn.onclick = function() {
      let displayValue = ul.style.display;

      if (!displayValue) {
        ul.style.display = 'block';
      } else {
        ul.style.display = '';
      }
    };

    let ul = document.createElement('ul');
    ul.setAttribute('id', `${restoName.restaurantName}`);
    h3.appendChild(ul);
  });
}

showPlaces(places);

function getReviews(data) {
  data.forEach(x => {
    let placeId = x.restaurantName;
    let ratings = x.ratings;

    ratings.forEach(r => {
      let stars = r.stars;
      let comment = r.comment;
      let li = document.createElement('li');
      li.innerHTML = `${stars} ${comment}`;
      let singlePlace = document.getElementById(placeId);
      singlePlace.appendChild(li);
    });
  });
}

getReviews(places);

function addComment(data) {
  data.forEach(x => {
    let id = x.restaurantName;
    const addCommentBtn = document.createElement('button');
    addCommentBtn.setAttribute('class', 'commentBtn');
    // addCommentBtn.innerHTML = 'add comment';
    let ul = document.getElementById(id);
    ul.appendChild(addCommentBtn);

    let reviews = x.ratings;
    console.log(reviews);
    addCommentBtn.onclick = function() {
      reviews.unshift({ stars: 5, comment: 'woooooow' });
      displayAddedComment(places);
      // getReviews(places);
    };
  });
}
addComment(places);

function displayAddedComment(data) {
  places.forEach(x => {
    let reviews = x.ratings;

    console.log(reviews[0]);
  });
}

// render rating and list as components
// create reusable form

// use appendChild
// createElement li
// use documentObject
// innerHTML = '';

// li - dataAttribute to store the resto id- when I click - exact resto and look at the Attribute
// object - getbyId. .dataSet. 'name' (it will return a value)
