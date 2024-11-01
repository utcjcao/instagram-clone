import { storage, firestore, auth } from "../../Firebase.js";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export class AuthRepository {
  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  async signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  }

  fetchUser() {
    return auth.currentUser;
  }

  isLoggedIn() {
    return auth.currentUser !== null;
  }

  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, callback);
  }
}
