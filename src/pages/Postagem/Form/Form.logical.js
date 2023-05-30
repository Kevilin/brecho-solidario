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

  //Upload do post para o Firebase
  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "posts"), {
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

  const notificaSeNecessario = async (descricao, estadoPeca) => {
    const data = {
      "descricao": descricao,
      "estadoPeca": estadoPeca,
    };

    axios.post(`${urlBase}/usuario/notificaSeNecessario`, data)
      .then(response => {
        console.log(`notificação realizada: ${user.uid}`);
      })
      .catch(error => {
        console.log('erro ao atualizar dados');
      });
  }

  const handleSubmit = (e) => {
    const validate = inputs.titulo_post === "";
    e.preventDefault();
    inputs.nome = dadosUsuario.nome
    inputs.sobrenome = dadosUsuario.sobrenome
    inputs.cep = dadosUsuario.cep
    inputs.cidade = dadosUsuario.cidade
    inputs.bairro = dadosUsuario.bairro
    inputs.estado = dadosUsuario.estado
    inputs.logradouro = dadosUsuario.logradouro
    inputs.whatsapp = dadosUsuario.whatsapp
    inputs.fotoDoador = user.photoURL
    if (validate) {
      return alert("Revise todos os campos");
    }
    setToSubmit(true);
    setTimeout(() => {
      setToSubmit(false);
      setRedirect(true);
    }, 3000);
    firebaseAdd();
    notificaSeNecessario(inputs.titulo_post, inputs.estado_peca);
  };

  //Upload das imagens para o Firebase
  const onFileChange = async (e) => {
    if (urlLink.length < 3) {
      //lê arquivo
      const file = e.target.files[0];
      //Upload
      const fileRef = ref(storage, `imagens-roupas/${file.name}`);
      const upload = await uploadBytes(fileRef, file);
      //Pega a URL para download
      const urlParaDownload = await getDownloadURL(fileRef);
      setUrlLink((prevUrlLink) => [...prevUrlLink, { urlLink: urlParaDownload, imageData: upload.ref.name }]);
    } else {
      return alert("Só é possivel inserir 3 imagens.");
    }
  };

  //Lê e salva os inputs
  const handleChange = (e) => {
    buscaDadosUsuario();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      urlLink,
      usuario
    });
  };

  return { handleSubmit, handleChange, onFileChange, firebaseAdd, urlLink, toSubmit, redirect };
};
