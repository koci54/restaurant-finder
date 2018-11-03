export function createButton(data) {
  data.forEach(x => {
    const uniqueId = x.place_id;
    const name = x.restaurantName;

    const classNameDash = name.replace(/\s/g, '-')

    const h3 = document.querySelector(`.${classNameDash}`);

    const toggeRatingsBtn = document.createElement("button");
    toggeRatingsBtn.setAttribute("class", `reviewBtn`);
    // toggle button
    toggeRatingsBtn.addEventListener("click", () => {
      const list = document.querySelector(`#${uniqueId} .toggle-content`);
      list.classList.toggle("is-visible");
    });

    h3.appendChild(toggeRatingsBtn);
  });
}
