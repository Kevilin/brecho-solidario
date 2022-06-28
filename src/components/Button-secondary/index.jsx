import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const ButtonSecondary = ({ route, title }) => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link to={route}>
      <Button role="button" mt={4} bg="brand.btntwo" onClick={handleTop} _hover={{ bg: "#008000" }} color="brand.bg">
        {title}
      </Button>
    </Link>
  );
};

export default ButtonSecondary;
