import { findRestaurant } from './helpers'

export function displayRestaurant(data, restaurantId, containerId) {

  const restaurantData = findRestaurant(data, restaurantId)
  console.log({restaurantData});
  if (restaurantData) {
    const restaurantContainer = document.getElementById(containerId)
    let restaurantElement = document.getElementById(restaurantId)
    const restaurantTitle = document.createElement('h3')
    const restaurantCommentContainer = document.createElement('div')
    const restaurantCommentButton = document.createElement('button')


    if (restaurantElement) {
      restaurantElement.innerHTML = ''
    } else {
      restaurantElement = document.createElement('div')
    }
    console.log({ restaurantElement});

    restaurantElement.setAttribute('id', restaurantData.id)
    restaurantTitle.innerHTML = restaurantData.restaurantName
    restaurantCommentContainer.setAttribute('class', 'review-list')
    restaurantCommentButton.setAttribute('class', 'btn btn-primary btn-comments')
    restaurantCommentButton.setAttribute('data-restaurant-id', restaurantId)
    restaurantCommentButton.innerHTML = 'Reviews'

    restaurantElement.appendChild(restaurantTitle)
    restaurantElement.appendChild(restaurantCommentContainer)
    restaurantElement.appendChild(restaurantCommentButton)
    restaurantContainer.appendChild(restaurantElement)
  }
}
