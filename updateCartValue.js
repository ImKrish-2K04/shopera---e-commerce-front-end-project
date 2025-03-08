const cartValue = document.querySelector(".total-items");

export const updateCartValue = (cartProducts) => {
  if (cartValue) {
    cartValue.textContent = cartProducts.length;
  }
};
