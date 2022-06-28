import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, HStack, Text, Icon, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiPackage, BiMap } from "react-icons/bi";
import { Avatar } from "@chakra-ui/avatar";

const MotionBox = motion(Box);

const Cards = ({ post }) => {
  const { name, title, address, locality, surname, qtd_pecas, estado_peca, urlLink } = post.data().inputs;

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Box maxW="sm" borderRadius="xl" w={{ base: "100%", md: "23rem" }} p={4} bg="brand.bg" overflow="hidden" minH="25rem" boxShadow="xl">
        <HStack alignItems="center" mb={4}>
          <Avatar size="sm" name={name} />
          <Text as="h5">
            {name} {surname}
          </Text>
        </HStack>
        <Box overflow="hidden" rounded="20px" maxHeight="20rem">
          <Image
            src={urlLink.length === 0 ? null : urlLink[0].urlLink}
            alt={urlLink.length === 0 ? null : urlLink[0].imageData}
            borderRadius="sm"
            loading="lazy"
            w="100%"
            h="30vh"
            objectFit="cover"
            style={{ scale: "1", transition: "0.5s ease-in-out" }}
            _hover={{ transform: "scale(1.1)" }}
            rounded="20px"
          />
        </Box>
        <Text m=".5rem 0" as="h4" fontSize="xl" fontWeight="600" w="20rem">
          {title}
        </Text>
        <HStack color="gray" fontSize="sm">
          <span role="img">
            <BiMap />
          </span>
          <Text as="span">{address} - {locality}</Text>
        </HStack>
        <Divider mt={2} borderColor="gray" m=".5rem 0" />
        <HStack as="span" fontSize="sm">
          {qtd_pecas === "" ? null : (
            <HStack>
              <Icon as={BiPackage} color="gray" fontSize="1.2rem" /> <Text>{qtd_pecas} peças </Text>
            </HStack>
          )}
        </HStack>
        <Link to={`posts/${post.id}`}>
          <Button role="button" w="100%" mt={4} bg="brand.btn" onClick={() => window.scrollTo({ top: 0 })} color="brand.bg" _hover={{ bg: "#789b8b" }}>
            Ver mais
          </Button>
        </Link>
      </Box>
    </MotionBox>
  );
};

export default Cards;
