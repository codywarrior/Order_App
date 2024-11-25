/**
 * CartProductItem
 *
 * Component indicates the items in the cart page
 */

// External Dependencies
import { View, Text, Image } from "react-native";
import { FC } from "react";
import { observer } from "mobx-react-lite";

// Internal Dependencies
import { Product } from "@/Types/Product.type";
import store from "@/store/store";
import Quantity from "./Quantity";

interface CartProductItemProps {
  product: Product;
  count: number;
}

const CartProductItem: FC<CartProductItemProps> = observer(
  ({ product, count }) => {
    const { image, price, supplier, name, discounted_price } = product;

    const updateCart = (updatedCount: number) => {
      store.addProductToCart(product, updatedCount - count);
    };

    return (
      <>
        <View className="bg-white h-96 rounded-lg shadow-md p-8 flex flex-1 justify-start items-center">
          <View className="relative block flex-1">
            <Image
              source={{ uri: image || "" }}
              defaultSource={require("../assets/images/fallback.png")}
              className="h-40 w-40 object-contain mb-2"
              resizeMode="contain"
            />
            <Text className="text-white bg-light-green top-8 left-0 px-4 py-0.5 block absolute rounded-3xl">
              Sales
            </Text>
          </View>
          <View className="flex flex-1 flex-row justify-between">
            <View className="flex-1">
              <Text className="text-base text-secondary underline">
                {supplier}
              </Text>
              <Text className="text-lg text-primary">{name}</Text>
              <View className="flex-row items-center gap-2 w-full mb-3">
                {discounted_price ? (
                  <>
                    <Text className="text-light-green text-base">
                      ${discounted_price}
                    </Text>
                    <Text className="text-light-red text-base line-through stroke-light-red">
                      ${price}
                    </Text>
                  </>
                ) : (
                  <Text className="text-light-green text-base">${price}</Text>
                )}
              </View>
              <Quantity value={count} setValue={updateCart} />
              <View className="flex-row itmes-center">
                <Text className="text-lg text-primary font-bold">Total: </Text>
                <Text className="text-lg text-light-red">
                  ${" "}
                  {(count * Number(discounted_price || price || 0)).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  },
);

export default CartProductItem;
