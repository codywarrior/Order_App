/**
 * Header Component
 *
 * Placed a top which includes the title of the app and search bar.
 */

// Exteranl Dependencies
import { View, Text } from "react-native";
import { FC, useState } from "react";

// Internal Dependencies
import SearchBar from "./SearchBar";

const Header: FC = () => {
  const [keyword, setKeyWord] = useState("");

  return (
    <View className="bg-primary w-full h-60 p-10 flex flex-col gap-5 justify-end">
      <Text className="text-3xl text-white">Order Book</Text>
      <SearchBar
        value={keyword}
        onChange={(text: string) => setKeyWord(text)}
      />
    </View>
  );
};

export default Header;
