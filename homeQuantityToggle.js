export const homeQuantityToggle = (e, id, stock) => {
  const currCard = document.querySelector(`#card${id}`);
  const productQuantity = currCard.querySelector(".product-quantity");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (e.target.classList.contains("cart-increment")) {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (e.target.classList.contains("cart-decrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.setAttribute("data-quantity", quantity);
  productQuantity.textContent = quantity;
};
