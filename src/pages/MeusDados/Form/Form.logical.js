import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { useUserAuth } from "../../../context/userAuthContext";
import axios from 'axios';
const db = getFirestore(app);

export const HandleClick = () => {
  const {user} = useUserAuth(); 
  const [usuario, setUsuario] = useState(user.uid);
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});
  const [email, setEmail] = useState(user.email);

  const urlBase = 'https://api-brecho-solidario.kmr.dev.br/api';

  //Upload do usuario para o Firebase
  const firebaseAdd = async () => {
    try {
      const usuariosRef = collection(db, "usuarios");
      await addDoc(usuariosRef, inputs);      
    } catch (e) {
      console.error(e);
    }
  };

  const atualizaDadosUsuario = async (nome,sobrenome,whatsapp,cep,logradouro,bairro,cidade,estado) => {

    const data = {
      "uidFirebase": user.uid,
      "nome": nome,
      "sobrenome": sobrenome,
      "whatsapp": whatsapp,
      "cep": cep,
      "logradouro": logradouro,
      "bairro": bairro,
      "cidade": cidade,
      "estado": estado,
    };

    axios.post(`${urlBase}/usuario/dados/atualiza`, data)
      .then(response => {
        console.log(`dados atualizados: ${user.uid}`);
      })
      .catch(error => {
        console.log('erro ao atualizar dados');
      });
  }

  const handleSubmit = (e) => {
    const validate = inputs.nome_usuario === "";
    e.preventDefault();
    if (validate) {
      return alert("Revise todos os campos");
    }
    setToSubmit(true);
    setTimeout(() => {
      setToSubmit(false);
      setRedirect(true);
    }, 3000);
    firebaseAdd();
    atualizaDadosUsuario(inputs.nome_usuario,inputs.sobrenome_usuario,inputs.telefone,inputs.cep,inputs.logradouro,inputs.bairro,inputs.cidade,inputs.estado);
  };

  //Lê e salva os inputs
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      usuario,
      email,
    });
  };

  return { handleSubmit, handleChange, firebaseAdd, toSubmit, redirect, atualizaDadosUsuario };
};
