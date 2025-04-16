import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "../ui/box";
import { Card } from "../ui/card";
const FloatingHeader = () => {
  return (
    <Card
      variant="elevated"
      className="w-[90%] absolute shadow-sm rounded-3xl top-32 left-[50%] translate-x-[-50%] z-10 py-5 flex-row justify-start"
    >
      <TouchableOpacity>
        <Box className="flex-row flex-grow items-center justify-between">
          <Box className="flex-row items-center gap-4 px-6 ">
            <AntDesign name="mail" size={30} color="#057dcd" />
            <Box>
              <Text>Title</Text>
              <Heading>Request</Heading>
            </Box>
          </Box>
          <Box>
            <AntDesign name="right" size={15} color="#ccc" />
          </Box>
        </Box>
      </TouchableOpacity>
      <Divider orientation="vertical" className="mx-2" />

      <TouchableOpacity>
        <Box className="flex-row w-full items-center flex-grow">
          <Box className="flex-row items-center gap-4 px-6 ">
            <FontAwesome5 name="history" size={25} color="#057dcd" />
            <Box>
              <Text>Title</Text>
              <Heading>Request</Heading>
            </Box>
          </Box>
          <Box>
            <AntDesign name="right" size={15} color="#ccc" />
          </Box>
        </Box>
      </TouchableOpacity>
    </Card>
  );
};

export default FloatingHeader;
