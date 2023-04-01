import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Image, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { useUserAuth } from "../../context/userAuthContext";

const NavBar = () => {

  const { usuario, logOut} = useUserAuth()

  return (
    <Stack
      as="nav"
      position="fixed"
      top="0"
      zIndex={10}
      direction="row"
      p=" .5rem 2rem"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="#716D6D"
      alignItems="center"
      bg="#0E76A8"
      w="100%"
    >
      <Link to="/brecho-solidario">
        <Image width="50px" display={{ base: "none", md: "flex" }} src={logo} alt="cabide-logo" className="logo-header" />
      </Link>
      <Box>
        <UnorderedList display="flex" fontFamily="Inter" fontWeight="500" fontSize={{ base: ".8rem", md: "1rem" }}>
          <ListItem listStyleType="none" _hover={{ color: "brand.btn", transition: "0.2s" }} m={4}>
            <Link to="/brecho-solidario">Inicio</Link>
          </ListItem>
          <ListItem listStyleType="none" m={4} _hover={{ color: "brand.btn", transition: "0.2s" }}>
            <Link to="/brecho-solidario/explorar">Explorar</Link>
          </ListItem>
        </UnorderedList>
      </Box>

      {usuario ?
      <>
        <p>{usuario.email}</p>
        <Button bg="brand.btn" display={{ base: "none", md: "flex" }} color="brand.bg" _hover={{ bg: "#008000" }} onClick={logOut}>
          Logout
        </Button>
      </>
      :
      <>
      <Link to="/brecho-solidario/login">
      <Button bg="brand.btn" display={{ base: "none", md: "flex" }} color="brand.bg" _hover={{ bg: "#008000" }}>
        Login
      </Button>
      </Link>
      </>}
    </Stack>
  );
};

export default NavBar;
