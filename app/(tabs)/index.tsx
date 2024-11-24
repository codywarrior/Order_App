/**
 * Home Screen
 *
 * Fetches the products from the API and put the products to the cart.
 */

// External Dependencies

import { FC } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import { observer } from "mobx-react-lite";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Internal Dependencies
import ProductCard from "@/components/ProductCard";
import store from "@/store/store";
import { fetchProducts } from "@/services/product";

const HomeScreen: FC = observer(() => {
  const { data, isLoading, error } = useQuery("products", fetchProducts, {
    onSuccess: (data) => store.setProducts(data),
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#356b82" />
        <Text className="text-primary text-lg">Loading Products</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <FontAwesome name="warning" size={28} color="#ff5b49" />
        <Text className="text-primary text-lg">Failed to fetch products.</Text>
      </View>
    );
  }

  return (
    <View className="bg-secondary flex-1">
      <FlatList
        data={data}
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
});

export default HomeScreen;
