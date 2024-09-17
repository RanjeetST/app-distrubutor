import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEDvrZ_wlqBwNuh-4GxU64-niPPnRDAOU",
  authDomain: "app-distributor-ad298.firebaseapp.com",
  projectId: "app-distributor-ad298",
  storageBucket: "app-distributor-ad298.appspot.com",
  messagingSenderId: "805587365535",
  appId: "1:805587365535:web:29a9e59c9a9cada0687caa",
  measurementId: "G-WWP5B377J4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);