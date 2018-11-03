export function createUl(data) {
  data.forEach(x => {
    const ul = document.createElement("ul");

    const uniqueId = x.place_id;
    const name = x.restaurantName;

    ul.setAttribute("class", `toggle-content ${name}`);

    const container = document.getElementById(`${uniqueId}`);
    container.appendChild(ul);
  });
}
