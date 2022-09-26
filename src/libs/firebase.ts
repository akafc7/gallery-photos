import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAkkITqaEgnkGMrBMnuXbc8WHbvs8lHdGo",
    authDomain: "gallery-4a0ac.firebaseapp.com",
    projectId: "gallery-4a0ac",
    storageBucket: "gallery-4a0ac.appspot.com",
    messagingSenderId: "255539784125",
    appId: "1:255539784125:web:ba3aef60a1787e5cf48ad4"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);