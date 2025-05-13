import Banner from "@/components/Banner";
import FloatingHeader from "@/components/FloatingHeader";
import Header from "@/components/Header";
import MyLimits from "@/components/MyLimits";
import SliderBox from "@/components/SliderBox";
import { Box } from "@/components/ui/box";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white android:pt-[15%]">
      <Box className="bg-[#057dcd] absolute left-0 top-0 right-0 h-[32%]" />
      <Header />
      <FloatingHeader />
      <ScrollView
        className="h-[90%] bg-blue-50 rounded-t-[3rem] relative pt-24 px-6"
        contentContainerClassName="gap-6"
      >
        <Banner />
        <MyLimits />
        <Box className="flex-row justify-between">
          <SliderBox />
          <SliderBox />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
