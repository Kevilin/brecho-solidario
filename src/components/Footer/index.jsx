import React from "react";
import { Stack, Box, Text, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Stack flexWrap="wrap" p="2.5rem" mt="1rem" direction="row" as="footer" alignItems="center" justifyContent="space-between" bg="brand.footerbg">
        <Box>
          <Text as="h3" color="brand.btn" fontWeight="500">
            Todos os direitos reservados. © {new Date().getFullYear()} Brechó Solidário.
          </Text>
        </Box>
        <StackDivider p={1} />
        <Stack direction="row" spacing={5} color="brand.btn">
          <Link to="/brecho-solidario/">Inicio</Link>
          <Link to="/brecho-solidario/explorar">Explorar</Link>
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
