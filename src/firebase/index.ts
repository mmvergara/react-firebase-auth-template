import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseConfig } from "../../config";

// Initialize Firebase
export const MainFirebaseApp = initializeApp(FirebaseConfig);

export const FirebaseAuth = getAuth(MainFirebaseApp);

export const FirebaseFirestore = getFirestore(MainFirebaseApp);
