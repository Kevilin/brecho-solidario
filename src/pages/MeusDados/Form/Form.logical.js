import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { useUserAuth } from "../../../context/userAuthContext";
const db = getFirestore(app);

export const HandleClick = () => {
  const {user} = useUserAuth(); 
  const [usuario, setUsuario] = useState(user.uid);
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});

  //Upload do post para o Firebase
  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "usuarios"), {
        inputs,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    const validate = inputs.nome_usuario === "" || inputs.sobrenome_usuario === "" || inputs.endereco === "" || inputs.cidade === "" || inputs.cep === "" ||  inputs.telefone.length < 8;
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
  };

  //Lê e salva os inputs
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      usuario,
    });
  };

  return { handleSubmit, handleChange, firebaseAdd, toSubmit, redirect };
};
