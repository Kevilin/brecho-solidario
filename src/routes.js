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
            <Route path="/" element={<Home />} />
            <Route path="/explorar" element={<Posts />} />
            <Route path="/meus-posts" element={<MeusPosts />} />
            <Route path="/meus-dados" element={<MeusDados />} />
            <Route path="/notifique-me" element={<NotifiqueMe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/publicar" element={<Postagem />} />
            <Route path="/explorar/posts/:id" element={<InfoPost />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
}

export default Rotas;