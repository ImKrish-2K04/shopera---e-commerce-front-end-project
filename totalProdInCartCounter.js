export const showTotalProductsInCart = () => {
  try {
    let totalProductsInCart =
      JSON.parse(localStorage.getItem("cartProductLS"))?.length || 0;
    document.querySelector(".total-items").textContent = totalProductsInCart;
  } catch (err) {
    console.error("Error fetching cart data:", err);
  }
};
