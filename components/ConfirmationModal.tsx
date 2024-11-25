/**
 * ConfirmationModal
 *
 * Ask user's confirmation for checkout
 */

// External Dependencies
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import Octicons from "@expo/vector-icons/Octicons";

interface ConfirmationModalProps {
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  content,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View className="w-full absolute bottom-0 flex flex-col gap-5 items-center bg-white mb-12">
        <View className="flex-1 flex flex-col gap-1 items-center justify-center mt-5">
          <View className="flex flex-1 items-center justify-center w-full">
            <Octicons name="info" size={50} color="#356b82" />
          </View>
          <Text className="px-10 py-5 flex-1 text-center text-2xl text-primary">
            {content}
          </Text>
        </View>

        <View className="flex flex-1 flex-row items-center justify-center gap-12 h-10 mb-2">
          <TouchableOpacity
            className="bg-primary h-10 px-6 py-1"
            onPress={onConfirm}
          >
            <Text className="text-lg text-white">Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary h-10 px-6 py-1"
            onPress={onClose}
          >
            <Text className="text-lg text-white">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
