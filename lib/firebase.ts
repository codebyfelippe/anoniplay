New-Item -ItemType Directory -Force -Path lib | Out-Null
@"
// Anoniplay - Site/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase que você forneceu
const firebaseConfig = {
  apiKey: "AIzaSyCNEGDpDLuWYrxTkoONy4oQujnatx6KIS8",
  authDomain: "anoniplay.firebaseapp.com",
  databaseURL: "https://anoniplay-default-rtdb.firebaseio.com",
  projectId: "cineveok",
  storageBucket: "anoniplay.firebasestorage.app",
  messagingSenderId: "805536124347",
  appId: "1:805536124347:web:b408c28cb0a4dc914d089e",
  measurementId: "G-H7WVDQQDVJ"
};

// Inicializa o Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

export { app, firestore };
"@ | Out-File -FilePath lib/firebase.ts -Encoding utf8
$file = Get-Item lib/firebase.ts
$file.CreationTime = (Get-Date).AddDays(-7)
$file.LastWriteTime = (Get-Date).AddDays(-7)
$file.LastAccessTime = (Get-Date).AddDays(-7)
