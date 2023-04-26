const express = require("express");
const app = express();

const multer = require("multer");

const firebase = require("firebase/app");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytes,
} = require("firebase/storage");
const { getFirestore, collection, addDoc,doc,getDoc } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDaKCByiwY4DHgeH7MPEG9XTLtnTkQ8H4o",
    authDomain: "northwestconference-e048f.firebaseapp.com",
    projectId: "northwestconference-e048f",
    storageBucket: "northwestconference-e048f.appspot.com",
    messagingSenderId: "335112680242",
    appId: "1:335112680242:web:211379e3381d5ebcdadd2b",
    measurementId: "G-M0LXWCS31B"
  };
firebase.initializeApp(firebaseConfig);
const fapp = initializeApp(firebaseConfig)
const db = getFirestore(fapp)
const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", async(req, res) => {
//   res.json("Firebase Storage");
const email = req.body.Email;
const password = req.body.Password;
const userRef = await doc(db, "users")
});
app.post("/", upload.single("file"), (req, res) => {
  const itemRef = collection(db, "users");
  data = { ...req.body };
  console.log(data);
  addDoc(itemRef, data)
    .then(() => {
      console.log("Enter the Data");
    })
    .catch(() => {
      console.log("An Error occured");
    });

  res.status(200).send({ message: "File uploaded successfully" });
});

app.listen(5000);
