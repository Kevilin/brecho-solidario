import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app);
const db = getFirestore(app);

export const HandleClick = () => {
  //eslint-disable-next-line
  const [user, setUser] = useState(nanoid());
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});
  const [urlLink, setUrlLink] = useState([]);

  //Upload post firebase
  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        inputs,
      });
    } catch (e) {
      console.error(e);
    }
  };

  //When the form is submit
  const handleSubmit = (e) => {
    handleStorage();
    const validate = inputs.name === "" || inputs.address === "" || inputs.locality === "" || inputs.surname === "" || inputs.phone.length < 8 || inputs.title === "";
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

  //Upload images to Firebase
  const onFileChange = async (e) => {
    if (urlLink.length < 3) {
      //Read file
      const file = e.target.files[0];
      //Upload
      const fileRef = ref(storage, `documents/${file.name}`);
      const upload = await uploadBytes(fileRef, file);
      //Get the url for download
      const urlLinkAwait = await getDownloadURL(fileRef);
      setUrlLink((prevUrlLink) => [...prevUrlLink, { urlLink: urlLinkAwait, imageData: upload.ref.name }]);
    } else {
      return alert("Só é possivel inserir 3 imagens.");
    }
  };

  //Create key for user
  const handleStorage = () => {
    window.localStorage.setItem("text", user);
  };

  //Read and save inputs value on state
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      urlLink,
      user,
    });
  };

  return { handleSubmit, handleChange, onFileChange, firebaseAdd, urlLink, toSubmit, redirect };
};
