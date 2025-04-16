import { Card } from "@/components/ui/card";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState } from "react";
import { Heading } from "../ui/heading";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { formatNumber } from "@/lib/utils";
const SliderBox = () => {
  const [amount, setAmount] = useState(30);
  return (
    <Card
      variant="elevated"
      className="w-52 h-52 rounded-2xl p-6 gap-5 justify-center"
    >
      <FontAwesome5 name="shopping-cart" size={24} color="#ccc" />
      <Heading>BNPL Limit</Heading>
      <Box className="gap-2">
        <Slider
          defaultValue={30}
          size="lg"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
          value={amount}
          onChange={(e) => setAmount(e)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box className="flex-row justify-between">
          <Text>{formatNumber(amount * 100000)}</Text>
          <Text>EGP</Text>
        </Box>
      </Box>
    </Card>
  );
};

export default SliderBox;
