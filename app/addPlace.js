import places from '../data'
import { createContainers } from './containers';
import { displayNames } from './displayNames';
import { createUl } from './createUl';
import { displayReviews } from './displayReviews';
import { showStars } from './showStars';
import { createButton } from './createButton'
import { displayStarNumber } from './displayStarNumber'
import { filterRestaurants } from './filterRestaurants'


export function displayPlaces(){
  createContainers(places);
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
filterRestaurants(places)
}
