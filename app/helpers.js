// generate a random unique id
export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}

// give each place an unique ID
export function addId(data) {
  data.forEach(x =>{
   if (!x.id) {
     console.log('no id')
     x.id = guid()
   }
   return x
 })
}

export function findRestaurant(data, restaurantId) {
  const restaurant = data.find(item => {
    return item.id === restaurantId
  })
  return restaurant
}
