import {initializeApp} from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
 

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAL-iuZJ7aOneqZ--JdSohszQbUxAdKMGM",
  
    authDomain: "crwn-clothing-14781.firebaseapp.com",
  
    projectId: "crwn-clothing-14781",
  
    storageBucket: "crwn-clothing-14781.appspot.com",
  
    messagingSenderId: "575122388306",
  
    appId: "1:575122388306:web:39c688a02887a04876768b"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseapp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionInformation={}) => {
    const userDocRef = doc(db, "users",userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName,email,createdAt,...additionInformation});
            
        }catch (error) {
            console.log("error creating the user",error.message);

        }
    }
    return userDocRef;
  }
export const createAuthUserWithEmailandPassword = async (email,password) => {
    if (!email ||!password) return;
    return createUserWithEmailAndPassword(auth,email,password);
};
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth,callback)
}