type NullableString = string | null;

export interface Product {
  id: number;
  oos: NullableString;
  qoh: NullableString;
  name: NullableString;
  size: NullableString;
  upc1: NullableString;
  upc2: NullableString;
  image: NullableString;
  price: NullableString;
  metadata: NullableString;
  supplier: NullableString;
  unit_size: NullableString;
  created_at: NullableString;
  nacs_category: NullableString;
  discounted_price: NullableString;
  nacs_subcategory: NullableString;
}
