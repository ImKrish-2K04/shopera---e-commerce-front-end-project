import { getCartProductFromLS } from "./getCartProducts";

export const removeProduct = (id) => {
  const mainCart = document.querySelector(`#card${id}`);
  let cartProducts = getCartProductFromLS();
  const newProductArr = cartProducts.filter((product) => product.id !== id);
  localStorage.setItem("cartProductLS", JSON.stringify(newProductArr));
  mainCart?.remove();
  if (newProductArr.length === 0) localStorage.clear();
  window.location.reload();
};
