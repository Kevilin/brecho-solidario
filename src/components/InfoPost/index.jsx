import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import {GetConexaoFirebase} from "../../helpers/helpers";
import MaisDetalhes from "../MaisDetalhes";
const InfoPost = () => {
  const params = useParams();
  const { getDadosPostsFirebase, data } = GetConexaoFirebase();

  useEffect(() => {
    getDadosPostsFirebase();
  }, []);
  const filterInfo = data.filter((param) => param.id === params.id);

  return (
    <Box minHeight="100vh" mt="5rem">
      {data.length === 0 ? (
        <Center mt={3}>
          <Spinner size="xl" color="brand.btn" m="0 auto" />
        </Center>
      ) : (
        filterInfo.map((res) => <MaisDetalhes res={res} key={nanoid()} />)
      )}
    </Box>
  );
};

export default InfoPost;