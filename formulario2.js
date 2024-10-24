import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/f...";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/f...";//https://cdnjs.cloudflare.com/ajax/libs/fir...

import {updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/f..."


const firebaseConfig = {
    apiKey: "AIzaSyBH8rQnHrqBkPCuwP9-DKEyTXeGOOK3sVs",
    authDomain: "plataforma-para-gedesa.firebaseapp.com",
    projectId: "plataforma-para-gedesa",
    storageBucket: "plataforma-para-gedesa.appspot.com",
    messagingSenderId: "270718654027",
    appId: "1:270718654027:web:d8b57b29966df4afcadfce",
    measurementId: "G-42RF4MJ4HT"
  };

  const app = initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)


                              
document.getElementById("botonDatos").addEventListener("click",async ()=>{
    var id = document.getElementById("nombre").value
    var dpi = document.getElementById("dni").value
    var tel = document.getElementById("movil").value
    var email = document.getElementById("email1").value
console.log(id,dpi,tel,email)
try{
    await setDoc(doc(db,"usuario", id),{
      nombre:nombre, 
      tel:tel,
      dpi:dni,
})
alert("usuario creado")
}catch(e){
console.log(e)
}
})