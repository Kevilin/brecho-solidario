import React from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Text, Button, Image, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";
import collage from "../../assets/images/cabide.png";
import Botao from "../../components/Botao";

const MotionBox = motion(Box);

const Home = () => {

  return (
    <>
      <MotionBox as="main" initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }} transition={{ delay: 0.5 }} mt="5rem">
        <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-evenly">
          <Box p={5}>
            <Text as="h1" color="brand.text" fontSize={{ base: "2rem", md: "2.5rem" }} fontWeight="700" m="1.5rem 0" lineHeight="1.8" textAlign="left">
              Encontre roupas ou doe as suas para quem precisa!
              <Box fontSize="1.5rem" fontWeight="500" as="p">
                Negocie de uma forma fácil e totalmente gratuita!
              </Box>
            </Text>
            <ButtonGroup>
              <Botao route="explorar" title="Preciso de doações" />
              <Link to="publicar">
                <Button role="button" mt={4} bg="rgba(158, 194, 177, 0.31)" color="#66AD8C" _hover="">
                  Quero doar
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
          <Box>
            <Image src={collage} p={40} loading="lazy" mt={10} />
          </Box>
        </Stack>
      </MotionBox>
    </>
  );
};

export default Home;
