/**
 * Quantity
 *
 * Used for specifying the number of products in the cart
 */

// External Dependencies
import { FC } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface QuantityProps {
  value: number;
  setValue: (newValue: number) => void;
}

const Quantity: FC<QuantityProps> = ({ value, setValue }) => {
  return (
    <View className="flex-1">
      <View className="flex flex-row ml-auto">
        <TouchableOpacity
          onPress={() => value > 0 && setValue(value - 1)}
          className="bg-primary rounded-tl-lg rounded-bl-lg size-10 flex border-t border-b border-solid border-primary"
        >
          <Text className="text-2xl text-white flex-1 items-center justify-center text-center">
            {"-"}
          </Text>
        </TouchableOpacity>
        <TextInput
          keyboardType={"number-pad"}
          maxLength={3}
          className="border border-solid border-primary p-1 text-center w-1/5 h-10 box-border"
          value={`${value}`}
          onChangeText={(txt) => {
            const num = Number(txt);
            if (!isNaN(num) && num > 0 && num < 101) {
              setValue(num);
            } else {
              setValue(0);
            }
          }}
        />
        <TouchableOpacity
          onPress={() => value < 100 && setValue(value + 1)}
          className="bg-primary rounded-tr-lg rounded-br-lg size-10 flex border-t border-b border-solid border-primary"
        >
          <Text className="text-2xl text-white flex-1 items-center justify-center text-center">
            {"+"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quantity;
