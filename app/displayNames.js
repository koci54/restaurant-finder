export function displayNames(data) {
  data.forEach(x => {
    const h3 = document.createElement("h3");

    const name = x.restaurantName;
    const avgRating = x.averageRating;

    h3.innerHTML = name;
    // give a unique class name with no spaces
    const classNameDash = name.replace(/\s/g, '-')

    h3.setAttribute("class", `${classNameDash}`);
    h3.setAttribute("avg-rating", `${avgRating}`);
    const uniqueId = x.place_id;
    const container = document.getElementById(`${uniqueId}`);
    container.appendChild(h3);
  });
}
