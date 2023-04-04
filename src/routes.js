import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import MeusPosts from "./pages/MeusPosts";
import Postagem from "./pages/Postagem";
import InfoPost from "./components/InfoPost";
import Error from "./pages/Error";
import NotifiqueMe from "./pages/NotifiqueMe";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";
import MeusDados from "./pages/MeusDados";

function Rotas() {
    return (
        <Routes>
            <Route path="/brecho-solidario/" element={<Home />} />
            <Route path="/brecho-solidario/explorar" element={<Posts />} />
            <Route path="/brecho-solidario/meus-posts" element={<MeusPosts />} />
            <Route path="/brecho-solidario/meus-dados" element={<MeusDados />} />
            <Route path="/brecho-solidario/notifique-me" element={<NotifiqueMe />} />
            <Route path="/brecho-solidario/login" element={<Login />} />
            <Route path="/brecho-solidario/signup" element={<Signup />} />
            <Route path="/brecho-solidario/publicar" element={<Postagem />} />
            <Route path="/brecho-solidario/explorar/posts/:id" element={<InfoPost />} />
            <Route path="/brecho-solidario/*" element={<Error />} />
        </Routes>
    );
}

export default Rotas;