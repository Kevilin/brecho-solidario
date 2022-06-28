import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { GetData } from "../../../helpers/helpers";
import MoreDetails from "../../../components/MoreDetails";
const Info = () => {
  const params = useParams();
  const { getDataFirebase, data } = GetData();

  useEffect(() => {
    getDataFirebase();
    //eslint-disable-next-line
  }, []);
  const filterInfo = data.filter((param) => param.id === params.id);

  return (
    <Box minHeight="100vh" mt="5rem">
      {data.length === 0 ? (
        <Center mt={3}>
          <Spinner size="xl" color="brand.btn" m="0 auto" />
        </Center>
      ) : (
        filterInfo.map((res) => <MoreDetails res={res} key={nanoid()} />)
      )}
    </Box>
  );
};

export default Info;
