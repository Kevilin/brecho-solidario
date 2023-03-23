import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Rotas from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Center as="header">
          <NavBar />
        </Center>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
