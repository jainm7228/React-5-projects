import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/avtar.jpg"
const Footer = () => {
  return (
    <Box
      bgColor={"black"}
      color={"whitesmoke"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>AboutUs</Text>{" "}
          <Text 
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center","left "]}
          fontWeight={"bold"}>We are the best crypto trading app in India , we provide our guideance at a very reasonable price</Text>{" "}
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Foundation</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
