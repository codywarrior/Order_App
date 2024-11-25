/**
 * Header Component
 *
 * Placed a top which includes the title of the app and search bar.
 */

// Exteranl Dependencies
import { View, Text } from "react-native";
import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDebounceValue } from "usehooks-ts";

// Internal Dependencies
import SearchBar from "./SearchBar";
import store from "@/store/store";

const Header: FC = observer(() => {
  const [keyword, setKeyWord] = useState(store.keyword);
  const [debouncedKeyword] = useDebounceValue(keyword, 300);

  useEffect(() => {
    store.setKeyword(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <View className="bg-primary w-full h-60 p-10 flex flex-col gap-5 justify-end">
      <Text className="text-3xl text-white">Order Book</Text>
      <SearchBar
        value={keyword}
        onChange={(text: string) => setKeyWord(text)}
      />
    </View>
  );
});

export default Header;
