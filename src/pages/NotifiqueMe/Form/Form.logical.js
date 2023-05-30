import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUserAuth } from "../../../context/userAuthContext";
import axios from 'axios';
const storage = getStorage(app);
const db = getFirestore(app);

export const HandleClick = () => {
  const {user} = useUserAuth(); 
  const [usuario, setUsuario] = useState(user.uid);
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});
  const [urlLink, setUrlLink] = useState([]);
  const [dadosUsuario, setDadosUsuario] = useState([]);

  const urlBase = 'https://api-brecho-solidario.kmr.dev.br/api';

  //Upload da notificação para o Firebase
  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "filaNotificacoes"), {
        inputs,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const buscaDadosUsuario = async () => {
    const fetchData = async () => {
      try {
        if (user && user.uid) {
          const response = await axios.get(
            `${urlBase}/usuario/dados/busca/${user.uid}`
          );
          setDadosUsuario(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  const insereNotificacao = async (email, descricao, estadoPeca) => {
    const data = {
      "uidFirebase": user.uid,
      "email": email,
      "descricao": descricao,
      "estadoPeca": estadoPeca,
    };

    axios.post(`${urlBase}/usuario/insereNotificacao`, data)
      .then(response => {
        console.log(`dados inseridos: ${user.uid}`);
      })
      .catch(error => {
        console.log('erro ao atualizar dados');
      });
  }

  const handleSubmit = (e) => {
    const validate = inputs.descricao_procura === "";
    e.preventDefault();
    inputs.email = dadosUsuario.email
    if (validate) {
      return alert("Revise todos os campos");
    }
    setToSubmit(true);
    setTimeout(() => {
      setToSubmit(false);
      setRedirect(true);
    }, 3000);
    firebaseAdd();
    insereNotificacao(dadosUsuario.email, inputs.descricao_procura, inputs.estado_peca);
  };

  //Lê e salva os inputs
  const handleChange = (e) => {
    buscaDadosUsuario();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      usuario
    });
  };

  return { handleSubmit, handleChange, firebaseAdd, urlLink, toSubmit, redirect };
};
