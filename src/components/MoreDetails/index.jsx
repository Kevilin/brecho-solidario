import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { nanoid } from "nanoid";
import { Stack, HStack, Text, Box, Avatar, Image, Icon, Link, Button } from "@chakra-ui/react";
import { BiPackage, BiCloset, BiMap } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { GetData } from "../../helpers/helpers";

const MotionBox = motion(Box);

const MoreDetails = ({ res }) => {
  //Get userkey state
  const [userKey, setUserKey] = useState();
  const { deleteDataFirebase } = GetData();
  const { name, title, locality, urlLink, surname, qtd_pecas, estado_peca, phone, address, others, description, user } = res.data().inputs;
  const urlLinkThumb = urlLink.slice(1, 3);
  const houseSpecs = [
    { title: "Quantidade de peças", name: qtd_pecas, icon: BiPackage },
    { title: "Estado da peça", name: estado_peca, icon: BiCloset },
  ];
  //Get user key
  useEffect(() => {
    const key = window.localStorage.getItem("text");
    setUserKey(key);
  }, []);

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack justifyContent={"center"} p={{ base: "10", md: "5" }}>
        <Box w="90%" m="0 auto">
          <Stack>
            <HStack>
              <Avatar name={name} mr={3} />
              <Text display="flex" alignItems="center">
                {name} {surname}
              </Text>
            </HStack>
            <Text as="h1" fontSize={{ base: "2rem", md: "2.5rem" }} fontWeight="700" pt={3} lineHeight="1.2" textAlign="left">
              {title}
            </Text>
            <Text as="p" mt={3} color="brand.description">
              <Icon as={BiMap} /> {address} - {locality}
            </Text>
            <Stack direction={{ base: "column", lg: "row" }} w="100%" h={{ base: "none", lg: "70vh" }} overflow="hidden" alignItems="center">
              <Box w={{ base: "none", lg: "70%" }} minHeight={{ base: "none", lg: "50vh" }} borderRadius="xl" overflow="hidden">
                <Image
                  loading="lazy"
                  src={urlLink.length === 0 ? null : urlLink[0].urlLink}
                  alt={urlLink.length === 0 ? null : urlLink[0].imageData}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  style={{ scale: "1", transition: "0.5s ease-in-out" }}
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Box>
              <Stack display="flex" spacing={2}>
                {urlLink.length === 0
                  ? null
                  : urlLinkThumb.map((thumbnails) => (
                      <Box key={nanoid()} overflow="hidden" w={{ base: "none", lg: "80%" }} minHeight={{ base: "none", lg: "35vh" }} maxHeight="25vh" borderRadius="md">
                        <Image
                          loading="lazy"
                          src={thumbnails.urlLink}
                          alt={thumbnails.imageData}
                          w="100%"
                          h="35vh"
                          objectFit="cover"
                          style={{ scale: "1", transition: "0.5s ease-in-out" }}
                          _hover={{ transform: "scale(1.1)" }}
                          borderRadius="md"
                        />
                      </Box>
                    ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4}>
            <Stack direction="row" flexWrap={{ base: "wrap", lg: "nowrap" }} w="100%">
              <Box w={{ base: "100%", lg: "60%" }}>
                <Text as="h2" fontSize={{ base: "1.5rem", md: "2rem" }} w="100%" fontWeight="700" lineHeight="1.2" textAlign="left">
                  Descrição:
                </Text>
                <Text as="p" mt={3} color="brand.description" minW="100%">
                  {description}
                </Text>
              </Box>
              {/* Detalhes */}
              <Box w={{ base: "100%", lg: "30%" }}>
                <Text as="h2" fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="700" paddingTop={{ base: 5, lg: 0 }} lineHeight="1.2" textAlign="left">
                  Detalhes:
                </Text>
                <Stack direction={{ base: "column", md: "row" }} flexWrap="wrap" p={3}>
                  {houseSpecs.map((data) => (
                    <HStack key={nanoid()} p="1rem 0">
                      <Icon
                        as={data.icon}
                        color={data.name === "green.100"}
                        fontSize="2rem"
                        p="5px"
                        bg={data.name === "green.100"}
                        borderRadius="md"
                        ml={2}
                      />
                      <Text as="h4" fontWeight="600" color={data.name === "no" ? "red.400" : "green.400"} fontSize="1rem">
                        {data.title} : {data.name}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
                <Stack>
                  <Text as="p" mt={3} color="brand.description">
                    {others}
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={{ base: 1, lg: 2 }} flexWrap="wrap" alignItems="center">
            <Link
              href={`https://api.whatsapp.com/send?phone=5551${phone}&text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20anunciou%20uma%20roupa%20no%20Brech%C3%B3%20Solid%C3%A1rio.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F`}
              _hover=""
              isExternal
              w={{ base: "100%", lg: "15rem" }}
            >
              <Button role="button" mt={4} bg="brand.btn" color="brand.bg" w="100%" _hover={{ bg: "#789b8b" }}>
                Contato por Whatsapp <Icon as={SiWhatsapp} ml={2} />
              </Button>
            </Link>
            {userKey === user ? (
              <LinkRouter to="/brecho-solidario/explorar/">
                <Text onClick={() => deleteDataFirebase(res.id)} w="100%" paddingTop={4} fontWeight={500} color="red.400">
                  Remover publicação
                </Text>
              </LinkRouter>
            ) : null}
          </Stack>
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default MoreDetails;
