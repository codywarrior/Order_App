/**
 * Browse Screen
 *
 * TODO: Currently not implemented.
 */

// External Dependencies
import { View, Text } from "react-native";
import { FC } from "react";
import Octicons from "@expo/vector-icons/Octicons";

const BrowseScreen: FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Octicons name="info" size={56} color="#356b82" />
      <Text className="text-primary text-lg mt-5">Will be released soon!</Text>
    </View>
  );
};

export default BrowseScreen;
