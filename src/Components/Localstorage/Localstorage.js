const getLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getLocalStorage();
  cart.push(id);
  // save to local storage
  saveToLS(cart);
};

export {addToLS,  getLocalStorage} 