import React from "react";
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
  MenuGroup
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { useUserAuth } from "../../context/userAuthContext";
import "./Navbar.css";

const NavBar = () => {
  const { user, logOut } = useUserAuth();

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
      <Box>
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
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <UnorderedList
          display="flex"
          fontFamily="Inter"
          fontWeight="500"
          fontSize="1rem"
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
        <Menu>
          <MenuButton as={Button} colorScheme="blue" size="sm">
            Menu
          </MenuButton>
          <MenuList>
            <MenuGroup title="Navegação">
              <Link to="/">
                <MenuItem>Início</MenuItem>
              </Link>
              <Link to="/explorar">
                <MenuItem>Explorar</MenuItem>
              </Link>
              <Link to="/notifique-me">
                <MenuItem>Não encontrei o que queria</MenuItem>
              </Link>
            </MenuGroup>
            {user ? (
          <Menu>
            <MenuButton as={Button} colorScheme="blue" size="sm">
              Minha conta
            </MenuButton>
            <MenuList>
              <MenuGroup title={user.email}>
                <Link to="/meus-dados">
                  <MenuItem>Endereço e contato</MenuItem>
                </Link>
                <Link to="/meus-posts">
                  <MenuItem>Meus Posts</MenuItem>
                </Link>
                <MenuItem onClick={logOut}>Sair</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        ) : (
          <Link to="/login">
            <Button
              bg="brand.btn"
              color="brand.bg"
              _hover={{ bg: "#008000" }}
            >
              Login
            </Button>
          </Link>
        )}
          </MenuList>
          
        </Menu>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        {user ? (
          <Menu>
            <MenuButton as={Button} colorScheme="blue" size="sm">
              Minha conta
            </MenuButton>
            <MenuList>
              <MenuGroup title={user.email}>
                <Link to="/meus-dados">
                  <MenuItem>Endereço e contato</MenuItem>
                </Link>
                <Link to="/meus-posts">
                  <MenuItem>Meus Posts</MenuItem>
                </Link>
                <MenuItem onClick={logOut}>Sair</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        ) : (
          <Link to="/login">
            <Button
              bg="brand.btn"
              color="brand.bg"
              _hover={{ bg: "#008000" }}
            >
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
};

export default NavBar;
