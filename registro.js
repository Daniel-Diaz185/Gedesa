  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH8rQnHrqBkPCuwP9-DKEyTXeGOOK3sVs",
    authDomain: "plataforma-para-gedesa.firebaseapp.com",
    projectId: "plataforma-para-gedesa",
    storageBucket: "plataforma-para-gedesa.appspot.com",
    messagingSenderId: "270718654027",
    appId: "1:270718654027:web:d8b57b29966df4afcadfce",
    measurementId: "G-42RF4MJ4HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

document.getElementById("btnEnviar").addEventListener("click", async () => {
    const Nombre = document.getElementById("inputNombre").value;
    const Telefono = document.getElementById("inputTelefono").value;
    const Direccion = document.getElementById("inputDireccion").value;

    console.log(Nombre, Telefono, Direccion);

    try {
        const id = new Date().getTime(); // Genera un ID único basado en el tiempo
        await setDoc(doc(db, "usuario", id.toString()), {
            Nombre: Nombre,
            Telefono: Telefono,
            Direccion: Direccion,
        });
        alert("Usuario creado");
    } catch (e) {
        console.error("Error creando usuario:", e);
    }
});
  