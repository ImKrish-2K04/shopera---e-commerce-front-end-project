import "./style.css";
import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProducts";
import { showTotalProductsInCart } from "./totalProdInCartCounter";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { removeProduct } from "./removeProdFromCart";

const productListContainer = document.querySelector(".cart-products--list");
const productListTemplate = document.querySelector(".addToCart_template");

export const showCartProductList = () => {
  // NOTE: it will update the cart value on the navbar..
  showTotalProductsInCart();
  let localStorageProductList = getCartProductFromLS();
  if (localStorageProductList.length === 0) {
    productListContainer.innerHTML = `<div class='empty-cart--msg'>You haven't added anything to cart yet!</div>`;
  } else {
    localStorageProductList.forEach((prod) => {
      let cloneNode = document.importNode(productListTemplate.content, true);

      let product = products.find((prods) => {
        return prod.id === prods.id;
      });

      let id = prod.id;
      let productCategory = product.category;
      let productImage = product.image;
      let productName = product.name;
      let originalPrice = product.price;
      let totalPrice = prod.productPrice;
      let totalQuantity = prod.productQuantity;
      let stock = product.stock;

      cloneNode
        .querySelector(".product-section")
        .setAttribute("id", `card${id}`);
      cloneNode.querySelector(".category").textContent = productCategory;
      cloneNode.querySelector(".product-image").src = productImage;
      cloneNode.querySelector(".product-image").alt = productName;
      cloneNode.querySelector(".product-name").textContent = productName;
      cloneNode.querySelector(".product-total-price").textContent = totalPrice;
      cloneNode
        .querySelector(".product-quantity")
        .setAttribute("data-quantity", totalQuantity);
      cloneNode.querySelector(".product-quantity").textContent =
        cloneNode.querySelector(".product-quantity").attributes[1].value;
      cloneNode
        .querySelector(".stock-element")
        .addEventListener("click", (e) => {
          homeQuantityToggle(e, id, stock);
        });
      cloneNode
        .querySelector(".remove-from-cart--button")
        .addEventListener("click", (e) => {
          removeProduct(id);
        });
      cloneNode
        .querySelector(".product-total-price")
        .setAttribute("original-price", originalPrice);

      productListContainer.append(cloneNode);
    });
  }
};

showCartProductList();
