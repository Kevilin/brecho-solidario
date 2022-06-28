import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export const GetData = () => {
  const [data, setData] = useState([]);
  //Get data from firebase
  const getDataFirebase = async () => {
    const data = await getDocs(collection(db, "posts"));
    setData(data.docs);
  };

  return { getDataFirebase, data };
};
