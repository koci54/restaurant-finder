import { findRestaurant, guid } from './helpers'
import { displayRestaurant } from './displayRestaurant'

export function addRestaurant(data, restaurant) {
  if (!restaurant.id) {
      restaurant.id = guid()
  }
  
  const restaurantData = findRestaurant(data, restaurant.id)

  if (!restaurantData) {
    data.push(restaurant)
  }


  data.forEach(item => {
   displayRestaurant(data, item.id, 'restaurant-list')
 })
}
