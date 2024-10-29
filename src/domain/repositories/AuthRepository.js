import { storage, firestore, auth } from "../../Firebase";

export class AuthRepository {
  signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }
  signOut() {
    signOut(auth);
  }
  signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  fetchUser() {
    return auth.currentUser;
  }
  isLoggedIn() {
    return auth.currentUser !== null;
  }
  onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
  }
}
