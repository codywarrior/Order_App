/**
 * Product.ts
 *
 * Helper functions related to Products will be here.
 */

// External dependencies
import axios from "axios";

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://retoolapi.dev/f0ee0v/items");
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Network response was not ok");
  }
};
