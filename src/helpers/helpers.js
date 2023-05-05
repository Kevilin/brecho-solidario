import { useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import app from "../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export const GetConexaoFirebase = () => {

  const [data, setData] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const getDadosPostsFirebase = async () => {
    const data = await getDocs(collection(db, "posts"));
    setData(data.docs);
  };

  const deletaPostFirebase = async (idPost) => {
    await deleteDoc(doc(db, "posts", `${idPost}`));
    localStorage.clear();
  };

  return { getDadosPostsFirebase, deletaPostFirebase, data, usuarios };
};
