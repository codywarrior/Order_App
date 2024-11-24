/**
 * AddCartModal
 *
 * Used for adding the product to the cart
 */

// External Dependencies
import { Modal, View, Image, Text, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

// Internal Dependencies
import { Product } from "@/Types/Product.type";
import Quantity from "./Quantity";

interface AddCartModalProps {
  product: Product;
  addCart: (product: Product, quantity: number) => void;
  onClose: () => void;
}

const AddCartModal: FC<AddCartModalProps> = ({ product, addCart, onClose }) => {
  const { image, name, unit_size, price, discounted_price } = product;
  const [quantity, setQuantity] = useState(0);

  return (
    <Modal animationType="slide" transparent={true}>
      <View className="w-full absolute bottom-0 p-10 h-1/3 flex flex-col bg-white mb-12">
        <View className="w-full flex flex-row justify-end">
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="close" size={24} color="#356b82" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center">
          <View className="size-40">
            <Image
              source={{ uri: image || "" }}
              defaultSource={require("../assets/images/fallback.png")}
              className="size-40 object-contain mb-2"
              resizeMode="contain"
            />
          </View>
          <View className="w-2/3">
            <Text className="text-xl text-primary font-bold">{name}</Text>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-lg text-primary">Unit Size</Text>
              <Text className="ml-auto text-lg text-primary">{unit_size}</Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-lg text-primary">Price</Text>
              <View className="flex-row items-center gap-2 ml-auto">
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
        </View>
        <View className="flex flex-row items-center mt-8">
          <Text className="text-xl text-primary font-bold">Quantity</Text>
          <Quantity value={quantity} setValue={setQuantity} />
        </View>
        <TouchableOpacity
          className="bg-secondary flex-row justify-center items-center p-2 mt-2"
          onPress={() => {
            addCart(product, quantity);
            onClose();
          }}
        >
          <Text className="text-lg text-white">Add Cart</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddCartModal;
