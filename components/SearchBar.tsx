/**
 * SearchBar component
 *
 * Should be placed on the PageHeader component and used for filtering the products
 */

// External Dependencies
import { FC } from "react";
import { View, TextInput, Pressable } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <View className="flex flex-row justify-between items-center h-12 px-5 rounded-3xl bg-white text-primary">
      <FontAwesome6 name="magnifying-glass" size={16} color="#0a7ea4" />
      <TextInput
        placeholder="Input Keyword"
        className="outline-none w-full flex-shrink text-lg px-4 placeholder:text-gray-400 text-primary"
        value={value}
        onChangeText={(text) => onChange(text)}
      />
      {value && (
        <Pressable onPress={() => onChange("")}>
          <AntDesign name="closecircle" size={16} color="#0a7ea4" />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
