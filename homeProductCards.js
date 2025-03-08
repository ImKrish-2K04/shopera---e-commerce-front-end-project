import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

// Selecting main product container & template
const productContainer = document.querySelector("#product-container");
const productTemplate = document.querySelector("#product-template");

export const showProductContainer = (products) => {
  if (!products) return false; // Return if no products available

  products.forEach((productItem) => {
    // Destructure product properties
    const { brand, category, description, id, image, name, price, stock } =
      productItem;

    // Clone template for new product
    const productClone = document.importNode(productTemplate.content, true);

    // Set product details dynamically
    productClone.querySelector(".cards").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-image").src = image;
    productClone.querySelector(".product-image").alt = name;
    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".product-description").textContent =
      description;
    productClone.querySelector(".product-price").textContent = "₹" + price;
    productClone.querySelector(".product-actual-price").textContent = `₹${
      price * 4
    }`;
    productClone.querySelector(".product-stock").textContent = stock;

    // ✅ Handle quantity increment/decrement (Imported Function)
    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (e) => homeQuantityToggle(e, id, stock));

    // ✅ Handle Add to Cart (Imported Function)
    productClone
      .querySelector(".add-to-cart--button")
      .addEventListener("click", (e) => addToCart(e, id, stock));

    // Append product to container
    productContainer.append(productClone);
  });
};

// ✅ Apply hover effect on product images
window.onload = function () {
  const cards = Array.from(
    document.querySelector("#product-container").children
  );

  cards.forEach((child) => {
    const image = child.querySelector(".product-image");

    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(104%)"; // Slight zoom-in effect
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = ""; // Reset transform
    });
  });
};
