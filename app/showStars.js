export function showStars(data) {
  data.forEach(x => {
    const name = x.restaurantName;
    const classNameDash = name.replace(/\s/g, '-')
    const h3 = document.querySelector(`.${classNameDash}`);
    console.log(h3);
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'stars-outer');
    const div = document.createElement('div');
    div.setAttribute('class', 'stars-inner');
    h3.appendChild(div2)
    div2.appendChild(div)
  })
}
