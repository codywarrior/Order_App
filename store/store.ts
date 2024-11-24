import { Product } from "@/Types/Product.type";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(data: Product[]) {
    this.products = data;
  }
}

const store = new ProductStore();
export default store;
