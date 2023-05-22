import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import { Text, Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs"; // Exemplo de ícone adicional
import logo from "../../assets/images/logo.png";
import { useUserAuth } from "../../context/userAuthContext";
import "./Navbar.css";

const NavBar = () => {
  const { user, logOut } = useUserAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <Stack
      as="nav"
      position="fixed"
      top="0"
      zIndex={10}
      direction="row"
      p=".4rem 2rem"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="#716D6D"
      alignItems="center"
      bg="#0E76A8"
      w="100%"
    >
      {user && user.photoURL ? (
        <Link to="/">
          <div className="fotoPerfil">
            <img src={user && user.photoURL} alt="foto de perfil" />
          </div>
        </Link>
      ) : (
        <Link to="/">
          <Image
            width="50px"
            display={{ base: "none", md: "flex" }}
            src={logo}
            alt="cabide-logo"
            className="logo-header"
          />
        </Link>
      )}

      <Box display={{ base: "none", md: "block" }}>
        <UnorderedList
          display="flex"
          fontFamily="Inter"
          fontWeight="500"
          fontSize={{ base: ".8rem", md: "1rem" }}
        >
          <ListItem
            listStyleType="none"
            _hover={{ color: "brand.btn", transition: "0.2s" }}
            m={4}
          >
            <Link to="/">Inicio</Link>
          </ListItem>
          <ListItem
            listStyleType="none"
            m={4}
            _hover={{ color: "brand.btn", transition: "0.2s" }}
          >
            <Link to="/explorar">Explorar</Link>
          </ListItem>
          <ListItem
            listStyleType="none"
            m={4}
            _hover={{ color: "brand.btn", transition: "0.2s" }}
          >
            <Link to="/notifique-me">Não encontrei o que queria</Link>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<Icon as={GiHamburgerMenu} />}
          variant="ghost"
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>

      {user ? (
        <>
          {isDesktop ? (
            <Menu>
              <MenuButton as={Button} colorScheme="blue">
                Minha conta
              </MenuButton>
              <MenuList>
                <MenuGroup title={user.email}>
                  <Link to="/meus-dados">
                    <MenuItem>
                      <Text>Endereço e contato</Text>
                    </MenuItem>
                  </Link>
                  <Link to="/meus-posts">
                    <MenuItem>
                      <Text>Meus Posts</Text>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={logOut}>
                    <Text>Sair</Text>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Link to="/meus-dados">
              <IconButton
                icon={<Icon as={BsPersonFill} />}
                variant="ghost"
              />
            </Link>
          )}
        </>
      ) : (
        <>
          <Link to="/login">
            <Button
              bg="brand.btn"
              display={{ base: "none", md: "flex" }}
              color="brand.bg"
              _hover={{ bg: "#008000" }}
            >
              Login
            </Button>
          </Link>
        </>
      )}
    </Stack>
  );
};

export default NavBar;
