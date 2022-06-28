import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";
import Info from "./pages/Posts/Info";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Center as="header">
          <NavBar />
        </Center>
        <Routes>
          <Route path="/brecho-solidario/" element={<Home />} />
          <Route path="/brecho-solidario/Explorar" element={<Posts />} />
          <Route path="/brecho-solidario/publicar" element={<Submit />} />
          <Route path="/brecho-solidario/explorar/posts/:id" element={<Info />} />
          <Route path="/brecho-solidario/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
