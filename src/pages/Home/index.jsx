import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Text, Button, Image, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";
import collage from "../../assets/images/cabide.png";
import Botao from "../../components/Botao";
import { useUserAuth } from "../../context/userAuthContext";
import axios from 'axios';

const MotionBox = motion(Box);

const Home = () => {

  const {user} = useUserAuth();
  const [existeUsuario, setExisteUsuario] = useState();
  const urlBase = 'http://127.0.0.1:8000/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user.uid) {
          const response = await axios.get(`${urlBase}/usuario/dados/existe/${user.uid}`);
          setExisteUsuario(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

  const criaUsuarioViaAPI = async () => {
    const data = {
      "uidFirebase": user.uid,
      "email": user.email
    };

    axios.post(`${urlBase}/usuario/dados/insere`, data)
      .then(response => {
        console.log(`novo usuario criado: ${user.uid}`);
      })
      .catch(error => {
        console.log('erro ao criar usuario');
      });
  }

  if (existeUsuario !== true && existeUsuario !== undefined && user) {
    criaUsuarioViaAPI()
  }

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
              {user ?
              <Link to="publicar">
                <Button role="button" mt={4} bg="rgba(158, 194, 177, 0.31)" color="#66AD8C" _hover="">
                  Quero doar
                </Button>
              </Link> :
              <Link to="login">
                <Button role="button" mt={4} bg="rgba(158, 194, 177, 0.31)" color="#66AD8C" _hover="">
                  Quero doar
                </Button>
              </Link> }
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
