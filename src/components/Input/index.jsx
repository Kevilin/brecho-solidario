import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputComp = ({ id, label, type, place, value, nameprop, valorDefault }) => {
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} onChange={value} name={nameprop} placeholder={place} defaultValue={valorDefault} bg="#E5E5E5" />
    </FormControl>
  );
};

export default InputComp;
