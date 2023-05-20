import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Stack,
  HStack,
  Text,
  Box,
  Avatar,
  Image,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react";
import { BiPackage, BiCloset, BiMap } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { GetConexaoFirebase } from "../../helpers/helpers";
import { useUserAuth } from "../../context/userAuthContext";
import MapCard from "../MapCard";

const MotionBox = motion(Box);

const MaisDetalhes = ({ res }) => {
  const [userKey, setUserKey] = useState();
  const { deletaPostFirebase } = GetConexaoFirebase();
  const {
    nome_usuario,
    sobrenome_usuario,
    titulo_post,
    cidade,
    urlLink,
    qtd_pecas,
    estado_peca,
    telefone,
    endereco,
    outros,
    descricao_post,
    usuario,
  } = res.data().inputs;
  const urlLinkThumb = urlLink.slice(1, 3);
  const { user } = useUserAuth();
  const houseSpecs = [
    { title: "Quantidade de peças", name: qtd_pecas, icon: BiPackage },
    { title: "Estado da peça", name: estado_peca, icon: BiCloset },
  ];

  const address = {
    street: endereco,
    //neighborhood: "Sao Jose",
    city: cidade,
  };

  useEffect(() => {
    setUserKey(user.uid);
  }, []);

  return (
    <>
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
        <Stack justifyContent={"center"} p={{ base: "10", md: "5" }}>
          <Box w="90%" m="0 auto">
            <Stack>
              <HStack>
                <Avatar name={nome_usuario} mr={3} />
                <Text display="flex" alignItems="center">
                  {nome_usuario} {sobrenome_usuario}
                </Text>
              </HStack>
              <Text
                as="h1"
                fontSize={{ base: "2rem", md: "2.5rem" }}
                fontWeight="700"
                pt={3}
                lineHeight="1.2"
                textAlign="left"
              >
                {titulo_post}
              </Text>
              <Stack
                direction={{ base: "column", lg: "row" }}
                w="100%"
                h={{ base: "none", lg: "50vh" }}
                overflow="hidden"
                alignItems="center"
              >
                <Box
                  w={{ base: "none", lg: "40%" }}
                  minHeight={{ base: "none", lg: "50vh" }}
                  borderRadius="xl"
                  overflow="hidden"
                >
                  <Image
                    loading="lazy"
                    src={urlLink.length === 0 ? null : urlLink[0].urlLink}
                    alt={urlLink.length === 0 ? null : urlLink[0].imageData}
                    objectFit="cover"
                    w="80%"
                    h="80%"
                    style={{ scale: "1", transition: "0.5s ease-in-out" }}
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Box>
                <MapCard address={address} />
                <Stack display="flex" spacing={2}>
                  {urlLink.length === 0
                    ? null
                    : urlLinkThumb.map((thumbnails) => (
                        <Box
                          key={thumbnails.id}
                          overflow="hidden"
                          w={{ base: "none", lg: "80%" }}
                          minHeight={{ base: "none", lg: "35vh" }}
                          maxHeight="25vh"
                          borderRadius="md"
                        >
                          <Image
                            loading="lazy"
                            src={thumbnails.urlLink}
                            alt={thumbnails.imageData}
                            w="100%"
                            h="35vh"
                            objectFit="cover"
                            style={{
                              scale: "1",
                              transition: "0.5s ease-in-out",
                            }}
                            _hover={{ transform: "scale(1.1)" }}
                            borderRadius="md"
                          />
                        </Box>
                      ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" pt={4}>
              <Stack
                direction="row"
                flexWrap={{ base: "wrap", lg: "nowrap" }}
                w="100%"
              >
                <Box w={{ base: "100%", lg: "60%" }}>
                  <Text
                    as="h2"
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    w="100%"
                    fontWeight="700"
                    lineHeight="1.2"
                    textAlign="left"
                  >
                    Descrição:
                  </Text>
                  <Text as="p" mt={3} color="brand.description" minW="100%">
                    {descricao_post}
                  </Text>
                </Box>
                {/* Detalhes */}
                <Box w={{ base: "100%", lg: "30%" }}>
                  <Text
                    as="h2"
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    fontWeight="700"
                    paddingTop={{ base: 5, lg: 0 }}
                    lineHeight="1.2"
                    textAlign="left"
                  >
                    Detalhes:
                  </Text>
                  <Stack
                    direction={{ base: "column", md: "column" }}
                    flexWrap="wrap"
                    p={3}
                  >
                    {houseSpecs.map((data) => (
                      <HStack key={data.id} p="1rem 0">
                        <Icon
                          as={data.icon}
                          color={data.name === "green.100"}
                          fontSize="2rem"
                          p="5px"
                          bg={data.name === "green.100"}
                          borderRadius="md"
                          ml={2}
                        />
                        <Text
                          as="h4"
                          fontWeight="600"
                          color={"green.400"}
                          fontSize="1.3rem"
                        >
                          {data.title} : {data.name}
                        </Text>
                      </HStack>
                    ))}
                  </Stack>
                  <Stack>
                    <Text as="p" mt={3} color="brand.description">
                      {outros}
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={{ base: 1, lg: 2 }}
              flexWrap="wrap"
              alignItems="center"
            >
              <Link
                href={`https://api.whatsapp.com/send?telefone=5551${telefone}&text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20anunciou%20uma%20roupa%20no%20Brech%C3%B3%20Solid%C3%A1rio.%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F`}
                _hover=""
                isExternal
                w={{ base: "100%", lg: "15rem" }}
              >
                <Button
                  role="button"
                  mt={4}
                  bg="brand.btn"
                  color="brand.bg"
                  w="100%"
                  _hover={{ bg: "#789b8b" }}
                >
                  Contato por Whatsapp <Icon as={SiWhatsapp} ml={2} />
                </Button>
              </Link>
              {userKey === usuario ? (
                <LinkRouter to="/explorar/">
                  <Text
                    onClick={() => deletaPostFirebase(res.id)}
                    w="100%"
                    paddingTop={4}
                    fontWeight={500}
                    color="red.400"
                  >
                    Remover publicação
                  </Text>
                </LinkRouter>
              ) : null}
            </Stack>
          </Box>
        </Stack>
      </MotionBox>
    </>
  );
};

export default MaisDetalhes;
