import { useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import app from "../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export const GetData = () => {
  const [data, setData] = useState([]);
  //Get data from firebase
  const getDataFirebase = async () => {
    const data = await getDocs(collection(db, "posts"));
    setData(data.docs);
  };

  //Delete data from firebase
  const deleteDataFirebase = async (idPost) => {
    await deleteDoc(doc(db, "posts", `${idPost}`));
    localStorage.clear();
  };

  return { getDataFirebase, deleteDataFirebase, data };
};
