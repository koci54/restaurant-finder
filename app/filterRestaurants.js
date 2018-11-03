const starSelect = document.getElementById('star-select')
let starNum;

export function filterRestaurants(data) {
  starSelect.addEventListener('change', (e) => {
    starNum = e.target.value
    console.log({starNum});
      data.forEach(x => {
        const avgRating = x.averageRating;
        const name = x.restaurantName;
        const uniqueId = x.place_id
          // get className
        const classNameDash = name.replace(/\s/g, '-')

        const h3 = document.querySelector(`.${classNameDash}`)
        console.log(h3);

        const ul = document.querySelector(` #${uniqueId} .toggle-content`)

        h3.classList.add('toggle-content');
        ul.classList.remove('is-visible')
          // cannot use strict inequality because of different type
          if (avgRating == starNum ) {
          h3.classList.remove('toggle-content')
          // initial value in select set to 0
        } else if (starNum == 0) {
          h3.setAttribute('class', `${classNameDash}`)
        }
    })
  })
}
