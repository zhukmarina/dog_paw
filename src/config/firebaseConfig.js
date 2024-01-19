import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDTYkNlTeImQvKXf0tz9YVLG1aqJ_VpPQ",
  authDomain: "dogpaw-1e8fb.firebaseapp.com",
  projectId: "dogpaw-1e8fb",
  storageBucket: "dogpaw-1e8fb.appspot.com",
  messagingSenderId: "655526077909",
  appId: "1:655526077909:web:67dd6fefb3341571a3495c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



