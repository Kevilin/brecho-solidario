import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Submit from "./pages/Submit";
import Info from "./pages/Posts/Info";
import Error from "./pages/Error";

function Rotas() {
    return (
        <Routes>
            <Route path="/brecho-solidario/" element={<Home />} />
            <Route path="/brecho-solidario/Explorar" element={<Posts />} />
            <Route path="/brecho-solidario/publicar" element={<Submit />} />
            <Route path="/brecho-solidario/explorar/posts/:id" element={<Info />} />
            <Route path="/brecho-solidario/*" element={<Error />} />
        </Routes>
    );
}

export default Rotas;
