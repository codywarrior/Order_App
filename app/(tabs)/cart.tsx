/**
 * Cart Screen
 *
 * Used for Managing the cart.
 */

// External Dependencies
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { FC, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { observer } from "mobx-react-lite";

// Internal Dependencies
import CartProductItem from "@/components/CartProductItem";
import store from "@/store/store";
import ConfirmationModal from "@/components/ConfirmationModal";

const CartScreen: FC = observer(() => {
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const cartItems = store.getCartProducts();
  const isLoading = store.products.length === 0;

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#356b82" />
        <Text className="text-primary text-lg">Loading Products</Text>
      </View>
    );
  }

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <MaterialCommunityIcons name="cart-minus" size={32} color="#356b82" />
        <Text className="text-primary text-lg">
          There's no products in the cart!
        </Text>
        <Text className="text-primary text-sm">
          Please go back to the products page and add products to the cart.
        </Text>
      </View>
    );
  }

  const getCheckoutPrice = () => {
    return cartItems
      .map(({ product, count }) => {
        const { discounted_price, price } = product;
        return count * Number(discounted_price || price || 0);
      })
      .reduce((sum, cur) => sum + cur, 0)
      .toFixed(2);
  };

  return (
    <>
      <View className="bg-secondary flex-1">
        <FlatList
          data={cartItems}
          keyExtractor={(item) => `${item.product.id}`}
          renderItem={({ item }) => (
            <CartProductItem product={item.product} count={item.count} />
          )}
          numColumns={1}
          contentContainerStyle={{ padding: 20, gap: 20 }}
        />
        <TouchableOpacity
          className="bg-primary flex-row justify-center items-center p-2 mt-auto mx-5 mb-2 rounded-lg"
          onPress={() => setConfirmationModalVisible(true)}
        >
          <Text className="text-lg text-white">Checkout</Text>
        </TouchableOpacity>
      </View>
      {isConfirmationModalVisible && (
        <ConfirmationModal
          content={`$${getCheckoutPrice()} will be checked out.\nDo you want to continue?`}
          onClose={() => setConfirmationModalVisible(false)}
          onConfirm={() => {
            store.checkout();
            setConfirmationModalVisible(false);
          }}
        />
      )}
    </>
  );
});

export default CartScreen;
