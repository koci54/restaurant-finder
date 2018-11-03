const starsTotal = 5;

export function displayStarNumber(data){
  data.forEach(x => {
    const name = x.restaurantName;
    // get className
    const classNameDash = name.replace(/\s/g, '-')
    const avgRating = x.averageRating;
    const starPercentage = (avgRating / starsTotal) * 100;
    // get value for css style
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
    document.querySelector(`.${classNameDash} .stars-inner`).style.width = starPercentageRounded
  })
}
