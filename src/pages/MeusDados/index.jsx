import React, { useEffect } from "react";
import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Form from "./Form";
import { useUserAuth } from "../../context/userAuthContext";

const MotionBox = motion(Box);

const MeusDados = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack textAlign="center" p={8} mt="4rem">
        <Text as="h1" fontSize="48px" fontWeight="700" m="1rem 0" lineHeight="1.2">
          Meus Dados
          <span role="img" aria-labelledby="emoji-house">
            <Image
              paddingLeft={1}
              width="2.3rem"
              display="unset"
            />
          </span>
        </Text>
        <Text as="span">Esses dados serão exibidos junto aos seus posts, para identifica-lo.</Text>
      </Stack>
      <Stack direction="row" mt={6} justifyContent="center">
        <Box w="80%" borderRadius="md">
          <Form />
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default MeusDados;
