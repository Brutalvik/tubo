import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (userCredential) => {
  try {
    // Wait for the user to be created
    await createUserWithEmailAndPassword(
      auth,
      userCredential?.email,
      userCredential?.password
    );
    const user = auth?.currentUser;
    if (user) {
      console.log(user);
      const response = await setDoc(doc(db, "Users", user?.uid), {
        email: user.email,
        firstName: userCredential.firstName,
        uid: user.uid,
        lastName: userCredential.lastName,
        profilePicURL: userCredential.profilePicURL ?? "",
      });

      console.log("RESPONSE", response);
    }
  } catch (error) {
    // Check for the specific error message
    if (error.code === "auth/email-already-in-use") {
      console.error(
        "Error: The email is already in use. Please try another one."
      );
    } else {
      console.error("Error signing up:", error.message);
    }
    throw error; // Re-throw the error if you want it to be caught elsewhere
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  //save user data to db using result.user
  return result;
};

export const doSignInWithEmailAndPassword = async (user) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user?.email,
      user?.password
    );
 
    // Check if the user is verified
    // if (!userCredential.user.emailVerified) {
    //   console.error("Error: Email not verified. Please verify your email.");
    //   throw new Error("Email not verified");
    // }

    // You can now use the authenticated user for further actions, like navigating to another page or storing user info
    return userCredential.user;
  } catch (error) {
    // Handle specific errors
    if (error.code === "auth/user-not-found") {
      console.error("Error: User not found. Please check the email.");
    } else if (error.code === "auth/wrong-password") {
      console.error("Error: Wrong password. Please try again.");
    } else {
      console.error("Error signing in:", error.message);
    }
    throw error; // Re-throw if you want to catch the error elsewhere
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (user) => {
  return sendPasswordResetEmail(auth, user?.email);
};

export const doPasswordChange = (user) => {
  return updatePassword(auth.currentUser, user?.password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
