import React, { useState } from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack, Spinner } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import { nanoid } from "nanoid";
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
    <Stack as="form" w="100%" p={{ md: "6", base: "0" }} spacing={6} onSubmit={handleSubmit}>
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp nameprop="nome_usuario" label="Nome" type="text" place="" value={handleChange} />
        <InputComp nameprop="sobrenome_usuario" label="Sobrenome" type="text" place="" value={handleChange} />
      </Stack>
      <Box>
        <FormControl isRequired>
          <FormLabel>Número de WhatsApp para que possam entrar em contato (8 caracteres)</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+55" bg="green.400" color="brand.bg" />
            <Input type="number" name="telefone" bg="#E5E5E5" placeholder="Número de Whatsapp com ddd" onChange={handleChange} />
          </InputGroup>
        </FormControl>
      </Box>
      <InputComp nameprop="cep" label="CEP" type="text" place="" value={handleChange} />
      <Stack direction={{ base: "column", md: "row" }}>
      <SelectComp title="Cidade" options={["Bastante usada","Pouco usada", "Semi nova"]} name="cidade" handleChange={handleChange} />
      <SelectComp title="Estado" options={["Bastante usada","Pouco usada", "Semi nova"]} name="estado" handleChange={handleChange} />
      </Stack>
      <InputComp nameprop="logradouro" label="Logradouro" type="text" place="" value={handleChange} />
      <Stack direction={{ base: "column", md: "row" }}>
      <InputComp nameprop="numero" label="Número" type="text" place="" value={handleChange} />
      <InputComp nameprop="complemento" label="Complemento" type="text" place="" value={handleChange} />
      </Stack>

      <Box>
        <Text fontWeight="500">Adicione uma foto da roupa!</Text>
        <FormLabel textAlign="center" borderWidth=".1rem" borderColor="brand.btn" borderRadius="md" borderStyle="dashed" p={5} cursor="pointer">
          <Icon as={MdCloudUpload} fontSize="5rem" textAlign="center" cursor="pointer" transition=".3s" _hover={{ color: "brand.btn" }} />
          <Input
            type="file"
            disabled={uploadStatus ? true : null}
            nameprop="file"
            accept="image/png, image/jpeg"
            border="none"
            display="none"
            name="pictures"
            onChange={handleChanges}
          />
          <Text>Selecione um arquivo (jpeg, jpg, png)</Text>
        </FormLabel>
        <Box>
          <HStack justifyContent="center">
            {uploadStatus ? (
              <Spinner />
            ) : (
              urlLink.map((data) => (
                <VStack p={3} key={nanoid()}>
                  <Text>{data.imageData}</Text>
                  <Box w="70px" h="80px" overflow="hidden">
                    <Image loading="lazy" src={data.urlLink} borderRadius="md" objectFit="cover" w="100%" />
                  </Box>
                </VStack>
              ))
            )}
          </HStack>
          <Text textAlign="center" as="p" fontSize=".9rem" color="brand.description">
            Imagens anexadas: {urlLink.length} / 3
          </Text>
        </Box>
        <FormLabel>
        <InputComp nameprop="descricao_post" label="Descrição" type="text" place="" value={handleChange} />
        </FormLabel>
      </Box>
      {toSubmit ? <Confetti /> : null}
      <Button role="button" disabled={uploadStatus && true} type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                Obrigado por sua doação!
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
          <Navigate to="/brecho-solidario/explorar" />
        </Box>
      )}
    </Stack>
  );
};

export default Form;
