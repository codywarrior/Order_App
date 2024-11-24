/**
 * Product Card
 *
 * Component shows the details of the Product
 */

// External Dependencies
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

// Internal Dependencies
import { Product } from "@/Types/Product.type";
import store from "@/store/store";
import AddCartModal from "./AddCartModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = observer(({ product }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { image, price, supplier, name, discounted_price } = product;

  const addProductToCart = (product: Product, quantity: number) => {
    store.addProductToCart(product, quantity);
  };

  return (
    <>
      <View className="bg-white w-60 h-96 rounded-lg shadow-md p-8 flex justify-start items-center">
        <View className="relative block">
          <Image
            source={{ uri: image || "" }}
            defaultSource={require("../assets/images/fallback.png")}
            className="h-40 w-40 object-contain mb-2"
            resizeMode="contain"
          />
          <Text className="text-white bg-light-green top-8 left-0 px-4 py-0.5 block absolute rounded-3xl">
            Sales
          </Text>
          <TouchableOpacity
            className="bg-light-blue absolute w-10 h-10 p-2 rounded-full flex justify-center bottom-0 right-0"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-white font-bold text-center text-2xl align-middle">
              {store.cart.get(product.id) || "+"}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-start">
          <Text className="text-base text-secondary underline">{supplier}</Text>
          <Text className="text-lg text-primary">{name}</Text>
          <View className="flex-row items-center gap-2 w-full">
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
        </View>
      </View>
      {isModalVisible && (
        <AddCartModal
          product={product}
          addCart={addProductToCart}
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
});

export default ProductCard;
