import { Product } from "@/Types/Product.type";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products: Product[] = [];
  cart: Map<number, number> = new Map<number, number>();
  keyword = "";

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

    // If the product is removed from the cart
    if ((existing || 0) + quantity === 0) {
      this.cart.delete(product.id);
    } else {
      this.cart.set(product.id, (existing || 0) + quantity);
    }
  };

  // Return Products in the Cart
  getCartProducts = () => {
    const cartProductKeys = Array.from(this.cart.entries());
    const cartProducts = cartProductKeys.map(([key, count]) => ({
      product: this.products.find(({ id }) => id === key)!,
      count,
    }));
    return cartProducts;
  };

  checkout = () => {
    // TODO: Need to implement detailed checkout logic

    // Clear Cart
    this.cart = new Map<number, number>();
  };

  // setFilterKey
  setKeyword = (key: string) => {
    this.keyword = key;
  };
}

const store = new ProductStore();
export default store;
