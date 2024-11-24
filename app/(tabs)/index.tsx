/**
 * Home Screen
 *
 * Fetches the products from the API and put the products to the cart.
 */

// External Dependencies

import { FC } from "react";
import { View, FlatList } from "react-native";

// Internal Dependencies
import ProductCard from "@/components/ProductCard";

import { mockProducts } from "@/constants/Products";

const HomeScreen: FC = () => {
  return (
    <View className="bg-secondary flex-1">
      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={{
          gap: 20,
          justifyContent: "center",
          marginVertical: 20,
          marginHorizontal: 10,
        }}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
