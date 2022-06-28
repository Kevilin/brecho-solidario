import React from "react";
import { FormControl, Select, FormLabel, Box } from "@chakra-ui/react";

const SelectComp = ({ title, options, name, handleChange }) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <Select isRequired iconColor="brand.btn" bg="#E5E5E5" name={name} placeholder="Selecionar" onChange={handleChange}>
        {options.map((option, i) => (
          <Box as="option" key={i}>
            {option}
          </Box>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComp;
