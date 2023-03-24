import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Postagem from "./pages/Postagem";
import Info from "./pages/Posts/Info";
import Error from "./pages/Error";
import NotifiqueMe from "./pages/NotifiqueMe";

function Rotas() {
    return (
        <Routes>
            <Route path="/brecho-solidario/" element={<Home />} />
            <Route path="/brecho-solidario/Explorar" element={<Posts />} />
            <Route path="/brecho-solidario/notifique-me" element={<NotifiqueMe />} />
            <Route path="/brecho-solidario/publicar" element={<Postagem />} />
            <Route path="/brecho-solidario/explorar/posts/:id" element={<Info />} />
            <Route path="/brecho-solidario/*" element={<Error />} />
        </Routes>
    );
}

export default Rotas;
