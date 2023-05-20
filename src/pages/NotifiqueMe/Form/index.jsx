import React, { useState } from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack, Spinner } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import Confetti from "../../../components/Confetti";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [uploadStatus, setUploadStatus] = useState(false);
  const { handleSubmit, handleChange, onFileChange, urlLink, toSubmit, redirect } = HandleClick();

  const handleChanges = (e) => {
    if (e.target.files.length === 0) {
      return null;
    }
    onFileChange(e);
    setUploadStatus(true);
    setTimeout(() => {
      setUploadStatus(false);
    }, 4000);
  };

  return (
    <>
    <Stack as="form" w="100%" p={{ md: "6", base: "0" }} spacing={6} onSubmit={handleSubmit}>
      {/* Características */}
      <InputComp nameprop="descricaoProcura" label="Descrição da roupa" type="text" place="Ex: Casaco cinza" value={handleChange} />
      <Stack direction={{ base: "column", md: "row" }}>
        <SelectComp title="Estado da peça" options={["Bastante usada","Pouco usada", "Semi nova"]} name="estado_peca" handleChange={handleChange} />
      </Stack>
      {toSubmit ? <Confetti /> : null}
      <Button role="button" disabled={uploadStatus && true} type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                <span role="img" aria-labelledby="emoji-hearth">
                  🤗
                </span>{" "}
                Redirecionando...
              </Text>
              <Spinner />
            </HStack>
          </>
        ) : (
          "Publicar!"
        )}
      </Button>
      {redirect && (
        <Box>
          <Navigate to="/explorar" />
        </Box>
      )}
    </Stack>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  );
};

export default Form;
