import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
import { showTotalProductsInCart } from "./totalProdInCartCounter";

showProductContainer(products);

showTotalProductsInCart();
