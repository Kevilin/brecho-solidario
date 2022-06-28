import React, { useEffect } from "react";
import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Form from "../Submit/Form";

const MotionBox = motion(Box);

const Submit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //eslint-disable-next-line
  }, []);
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack textAlign="center" p={8} mt="4rem">
        <Text as="h1" fontSize="48px" fontWeight="700" m="1rem 0" lineHeight="1.2">
          Obrigado por doar!
          <span role="img" aria-labelledby="emoji-house">
            <Image
              src="https://res.cloudinary.com/dqp3lvyd0/image/upload/v1639582003/smiling-face-with-smiling-eyes_1f60a_t7lnqb.png"
              paddingLeft={1}
              width="2.3rem"
              display="unset"
            />
          </span>
        </Text>
        <Text as="span">Basta preencher o seguinte formulário para que possamos publicar sua doação.</Text>
      </Stack>
      <Stack direction="row" mt={6} justifyContent="center">
        <Box w="80%" borderRadius="md">
          <Form />
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default Submit;
