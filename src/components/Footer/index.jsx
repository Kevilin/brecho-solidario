import React from "react";
import { Stack, Box, Text, StackDivider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Stack
        flexWrap="wrap"
        h="auto"
        p="1rem"
        mt="1rem"
        direction="column"
        as="footer"
        alignItems="center"
        justifyContent="center"
        bg="brand.footerbg"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={1}
          color="brand.btn"
          textAlign="center"
          justifyContent="space-between"
        >
          <Box>
            <Text as="h3" color="brand.btn" fontWeight="500" textAlign="center" mb="1rem">
              Todos os direitos reservados. © {new Date().getFullYear()} Brechó Solidário.
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Text textAlign="center" fontSize=".9rem" p={3} bg="brand.footerbg" color="brand.bg">
        Desenvolvido por{" "}
        <Box
          as="a"
          fontWeight={500}
          _hover={{ borderBottom: "1px solid", borderColor: "brand.btn" }}
          href="https://github.com/kevilin"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kevilin Rodrigues
        </Box>
      </Text>
    </>
  );
};

export default Footer;
