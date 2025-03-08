import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (e, id, stock) => {
  let localStorageProductArr = getCartProductFromLS();
  const currCard = document.querySelector(`#card${id}`);

  let productQuantity = parseInt(
    currCard.querySelector(".product-quantity").textContent
  );
  let productPrice = parseFloat(
    currCard.querySelector(".product-price").textContent.substring(1)
  );

  // Find the index of the existing product in the cart
  let productIndex = localStorageProductArr.findIndex((item) => item.id === id);

  if (productIndex !== -1) {
    // If product exists, update its quantity & price
    localStorageProductArr[productIndex].productQuantity += productQuantity;
    localStorageProductArr[productIndex].productPrice = parseInt(
      localStorageProductArr[productIndex].productQuantity * productPrice
    );
  } else {
    // If product doesn't exist, add it to the cart
    localStorageProductArr.push({
      id,
      productQuantity,
      productPrice: parseInt(productQuantity * productPrice),
    });
  }

  // Update localStorage only once
  localStorage.setItem("cartProductLS", JSON.stringify(localStorageProductArr));

  // Update cart display
  updateCartValue(localStorageProductArr);
};
