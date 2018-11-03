import places from './data'
import { createContainers } from './app/containers';
import { displayNames } from './app/displayNames';
import { createUl } from './app/createUl';
import { displayReviews } from './app/displayReviews';
import { showStars } from './app/showStars';
import { createButton } from './app/createButton'
import { displayStarNumber } from './app/displayStarNumber'
import { filterRestaurants } from './app/filterRestaurants'
import { guid, addId } from './app/helpers'
// import { initMap } from './map/googleMap'getThree


// load map
//document.addEventListener('DOMContentLoaded', initMap);

console.log(places);
// add each place an ID
addId(places);

// create parent divs
createContainers(places);

// render h3 onto a page
displayNames(places);

// ul hidden by default
createUl(places);

// display and append reviews
displayReviews(places);

// append star ratings
showStars(places);

// append and toggle button
createButton(places);

// get averageRating
displayStarNumber(places)

// test
filterRestaurants(places)
