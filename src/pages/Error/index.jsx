import React from "react";
import { Text, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import error from "../../assets/images/404.png";

const Error = () => {
  return (
    <VStack justifyContent="center" w="100%" h="100vh">
      <Image src={error} width="10rem" />
      <Text textAlign="center" fontWeight="600" color="brand.text" p={3} fontSize={{ base: "1.5rem", md: "2rem" }}>
        Ops, parece que a rota que você digitou não existe!
      </Text>
      <Link to="/">
        <Text color="brand.text">&larr; Voltar ao início</Text>
      </Link>
    </VStack>
  );
};

export default Error;
