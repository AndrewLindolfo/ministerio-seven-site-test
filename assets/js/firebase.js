import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1i_AwLX2VvOVOFnuIhimZoLDc85cds3Y",
  authDomain: "ministerio-seven-teste.firebaseapp.com",
  projectId: "ministerio-seven-teste",
  storageBucket: "ministerio-seven-teste.firebasestorage.app",
  messagingSenderId: "563867930059",
  appId: "1:563867930059:web:725ad34b931a583cd37a4e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, provider, db, storage };
