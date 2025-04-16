import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "../ui/card";
const Banner = () => {
  return (
    <Card className="rounded-2xl w-full h-40 bg-[##00202e] items-center flex-row justify-between px-6">
      <View className="flex-row w-[70%] gap-2">
        <Image
          size="xl"
          alt="smart-watch"
          source={require("../../assets/images/watch.png")}
        />
        <View className="justify-center">
          <Heading className="text-white">This is an ad</Heading>
          <Text className="text-wrap text-white flex-wrap w-3/4">
            Lorem ipsum dolor, sit amet
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default Banner;
