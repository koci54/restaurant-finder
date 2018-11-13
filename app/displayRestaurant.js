import { findRestaurant, whenClicked } from './helpers'

export function displayRestaurant(data, restaurantId, containerId) {

  const restaurantData = findRestaurant(data, restaurantId)

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


    restaurantElement.setAttribute('id', restaurantData.id)
    restaurantTitle.innerHTML = restaurantData.restaurantName
    restaurantCommentContainer.setAttribute('class', 'review-list')
    restaurantCommentButton.setAttribute('class', 'btn btn-primary btn-comments')
    restaurantCommentButton.setAttribute('data-restaurant-id', restaurantId)
    restaurantCommentButton.innerHTML = 'Reviews'
    restaurantCommentButton.addEventListener('click', function(e) {
      e.preventDefault()
      console.log(e.target)
      const restaurantId = this.getAttribute('data-restaurant-id')
      const restaurant = findRestaurant(data, restaurantId)

      restaurant.ratings.forEach(x =>{
        const commentDiv = document.createElement('div')
        const starDiv = document.createElement('span')
        commentDiv.innerHTML = x.comment
        starDiv.innerHTML = x.stars

        commentDiv.appendChild(starDiv)
        restaurantCommentContainer.appendChild(commentDiv)

      })

      console.log(restaurant.ratings)
      whenClicked()
    } )

    restaurantElement.appendChild(restaurantTitle)
    restaurantElement.appendChild(restaurantCommentContainer)
    restaurantElement.appendChild(restaurantCommentButton)
    restaurantContainer.appendChild(restaurantElement)
  }
}
