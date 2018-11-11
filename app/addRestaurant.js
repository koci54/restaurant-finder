import { findRestaurant, addId } from './helpers'
import { displayRestaurant } from './displayRestaurant'

export function addRestaurant(data, restaurant) {
  const restaurantData = findRestaurant(data, restaurant.id)

  if (!restaurantData) {
    data.push(restaurant)
  }
  addId(data)

  data.forEach(item => {
    console.log({item});
   displayRestaurant(data, item.id, 'restaurant-list')
 })
}
