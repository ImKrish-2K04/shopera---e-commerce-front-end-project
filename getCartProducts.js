export const getCartProductFromLS = () => {
  // 🔹 Retrieve cart data from localStorage
  const cartProduct = localStorage.getItem("cartProductLS");

  // 🔹 If no cart data found, return an empty array to prevent errors
  if (!cartProduct) {
    return [];
  }

  // 🔹 Parse and return the stored JSON cart data
  return JSON.parse(cartProduct);
};
