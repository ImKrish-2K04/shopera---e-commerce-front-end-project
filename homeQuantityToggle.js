export const homeQuantityToggle = (e, id, stock) => {
  const currCard = document.querySelector(`#card${id}`);
  const classListOfParent = currCard.parentElement.classList;
  const productQuantity = currCard.querySelector(".product-quantity");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  const isIncrement = e.target.classList.contains("cart-increment");
  const isDecrement = e.target.classList.contains("cart-decrement");

  if ((isIncrement && quantity < stock) || (isDecrement && quantity > 1)) {
    quantity += isIncrement ? 1 : -1;

    if (classListOfParent.contains("cart-products--list")) {
      const prodPriceElement = currCard.querySelector(".ATC-prodPrice");
      const originalPrice = parseFloat(prodPriceElement.attributes[1].value);
      const mainPrice = parseInt(originalPrice * quantity);
      prodPriceElement.textContent = mainPrice;
      updateCartInLS(id, quantity, mainPrice);
    }
  }

  productQuantity.setAttribute("data-quantity", quantity);
  productQuantity.textContent = quantity;
};

const updateCartInLS = (id, quantity, price) => {
  let cartProducts = JSON.parse(localStorage.getItem("cartProductLS")) || [];

  cartProducts = cartProducts.map((product) => {
    if (product.id === id) {
      product.productQuantity = quantity;
      product.productPrice = price;
    }
    return product;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
};
