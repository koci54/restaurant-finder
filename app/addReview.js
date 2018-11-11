import { findRestaurant } from './helpers'

export function addReview(data, restaurantId, review) {
  const restaurantData = findRestaurant(data, restaurantId)

  if (restaurantData) {
    restaurantData.ratings.push(review)
  }
}
