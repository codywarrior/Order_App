/**
 * Product Card
 *
 * Component shows the details of the Product
 */

// External Dependencies
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FC } from "react";

// Internal Dependencies
import { Product } from "@/Types/Product.type";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <View className="bg-white w-60 h-96 rounded-lg shadow-md">
      <View className="absolute top-2 left-2 bg-green-200 rounded-lg px-2">
        <Text className="text-green-600 font-bold text-xs">sale</Text>
      </View>
      <Image
        source={{ uri: product.image || "" }}
        className="h-20 w-full object-contain mb-2"
        resizeMode="contain"
      />
      <Text className="text-gray-700 text-xs">Store</Text>
      <Text className="text-black font-bold text-sm">title</Text>
      <View className="flex-row items-center mt-2">
        <Text className="text-green-600 font-bold text-sm">
          {product.price}
        </Text>
        <Text className="text-gray-400 text-xs line-through ml-2">
          {/* {product.salePrice} */}
        </Text>
      </View>
      <TouchableOpacity className="bg-blue-500 mt-2 p-2 rounded-full">
        <Text className="text-white font-bold text-center">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
