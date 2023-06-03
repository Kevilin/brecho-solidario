import React, { useState, useEffect } from "react";
import {
  Stack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import Confetti from "../../../components/Confetti";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../../context/userAuthContext";
import axios from "axios";

const Form = () => {
  const { handleSubmit, handleChange, toSubmit, redirect } = HandleClick();
  const [preFilledData, setPreFilledData] = useState(null);
  const { user } = useUserAuth();
  const urlBase = "https://api-brecho-solidario.kmr.dev.br/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${urlBase}/usuario/dados/busca/${user.uid}`
        );
        setPreFilledData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataAgain = async () => {
      try {
        const response = await axios.get(
          `${urlBase}/usuario/dados/busca/${user.uid}`
        );
        setPreFilledData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API novamente:", error);
      }
    };

    fetchDataAgain();
  }, []);

  return (
    <Stack
      as="form"
      w="100%"
      p={{ md: "6", base: "0" }}
      spacing={6}
      onSubmit={handleSubmit}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp
          nameprop="nome_usuario"
          label="Nome"
          type="text"
          place=""
          value={handleChange}
          valorDefault={preFilledData?.nome}
        />
        <InputComp
          nameprop="sobrenome_usuario"
          label="Sobrenome"
          type="text"
          place=""
          value={handleChange}
          valorDefault={preFilledData?.sobrenome}
        />
      </Stack>
      <Box>
        <FormControl isRequired>
          <FormLabel>
            Número de WhatsApp para que possam entrar em contato (ddd + 8 números)
          </FormLabel>
          <InputGroup>
            <InputLeftAddon children="+55" bg="green.400" color="brand.bg" />
            <Input
              type="number"
              name="telefone"
              bg="#E5E5E5"
              placeholder="Número de Whatsapp com ddd, sem o 9"
              onChange={handleChange}
              defaultValue={preFilledData?.whatsapp}
            />
          </InputGroup>
        </FormControl>
      </Box>
      <InputComp
        nameprop="cep"
        label="CEP"
        type="text"
        place=""
        value={handleChange}
        valorDefault={preFilledData?.cep}
      />
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp
          nameprop="logradouro"
          label="Logradouro"
          type="text"
          place=""
          value={handleChange}
          valorDefault={preFilledData?.logradouro}
        />
        <InputComp
          nameprop="bairro"
          label="Bairro"
          type="text"
          place=""
          value={handleChange}
          valorDefault={preFilledData?.bairro}
        />
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp
          nameprop="cidade"
          label="Cidade"
          type="text"
          place=""
          value={handleChange}
          valorDefault={preFilledData?.cidade}
        />
        <SelectComp
          title="Estado"
          options={[
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO",
          ]}
          name="estado"
          handleChange={handleChange}
        />
      </Stack>
      {toSubmit ? <Confetti /> : null}
      <Button
        role="button"
        type="submit"
        mt={4}
        p={2}
        w="100%"
        bg="brand.btn"
        color="brand.bg"
        _hover={{ bg: "#789b8b" }}
      >
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                Salvo!
                <span role="img" aria-labelledby="emoji-hearth">
                  🤗
                </span>{" "}
                Redirecionando...
              </Text>
              <Spinner />
            </HStack>
          </>
        ) : (
          "Salvar"
        )}
      </Button>
      {redirect && (
        <Box>
          <Navigate to="/" />
        </Box>
      )}
    </Stack>
  );
};

export default Form;
