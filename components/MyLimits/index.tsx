import { Text } from "@/components/ui/text";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Heading } from "../ui/heading";
const MyLimits = () => {
  return (
    <View className="flex-row justify-between w-full">
      <Heading size="lg">My Limits</Heading>
      <TouchableOpacity>
        <Text className="text-[#057dcd] font-bold">View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyLimits;
