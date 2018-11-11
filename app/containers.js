export function createContainers(data) {
  data.forEach(x => {
    const div = document.createElement("div"); // is a node
    const uniqueId = x.place_id;

    div.setAttribute("id", `${uniqueId}`);
    const list = document.getElementById("output");
    list.innerHTML = '';
    list.appendChild(div);
  });
}
