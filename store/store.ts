import { Product } from "@/Types/Product.type";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products: Product[] = [];
  cart: Map<number, number> = new Map<number, number>();

  constructor() {
    makeAutoObservable(this);
  }

  //   Store Product information in the store
  setProducts = (data: Product[]) => {
    this.products = data;
  };

  //   Add Product to cart
  addProductToCart = (product: Product, quantity: number) => {
    // check if the product is already in cart
    const existing = this.cart.get(product.id);
    // update cart
    this.cart.set(product.id, (existing || 0) + quantity);
  };
}

const store = new ProductStore();
export default store;
