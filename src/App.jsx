import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Rotas from "./routes";
import { UserAuthContextProvider } from "./context/userAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Center as="header">
            <NavBar />
          </Center>
          <Rotas />
          <Footer />
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
