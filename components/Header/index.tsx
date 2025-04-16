import { Heading } from "@/components/ui/heading";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { Box } from "../ui/box";
const Header = () => {
  return (
    <Box className="h-[10%]">
      <Box className="flex-row justify-between w-full px-12">
        <Heading size="xl" className="text-white">
          Hi, Nada
        </Heading>
        <Fontisto name="bell-alt" size={24} color="white" />
      </Box>
    </Box>
  );
};

export default Header;
