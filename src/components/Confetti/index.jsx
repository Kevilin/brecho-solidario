import React from "react";
import { Box } from "@chakra-ui/react";

const Confetti = () => {
  return (
    <Box position="fixed" bottom="-35px" zIndex={200} left="0" w="100%">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_nxsyeqbd.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100vh" }}
        loop
        autoplay
      ></lottie-player>
    </Box>
  );
};

export default Confetti;
