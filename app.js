import places from './data'
// import { createContainers } from './app/containers';
// import { displayNames } from './app/displayNames';
// import { createUl } from './app/createUl';
// import { displayReviews } from './app/displayReviews';
// import { showStars } from './app/showStars';
// import { createButton } from './app/createButton'
// import { displayStarNumber } from './app/displayStarNumber'
// import { filterRestaurants } from './app/filterRestaurants'
import { guid, addId } from './app/helpers'
// import { displayPlaces } from './app/addPlace'

import { addRestaurant } from './app/addRestaurant'
// import { initMap } from './map/googleMap'getThree

places.forEach(x =>{
 if (!x.id) {
   console.log('no id')
   x.id = guid()
 }
})
// load map


addRestaurant(places, {
  restaurantName: "testresto2!",
  address: "13, Hradcanska st. Prague",
  lat: 50.087617,
  lng: 14.418274,
  averageRating: 5,
  ratings: [
    {
      stars: 5,
      comment: "Great! But not many veggie options."
    },
    {
      stars: 5,
      comment: "OMG! But not many veggie options."
    },
    {
      stars: 5,
      comment: "My favorite restaurant!"
    }
  ]
})
