import {
  updateDoc,
  arrayUnion,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import { auth, firestore } from "../../Firebase";
import User from "../entities/User";

export class UserRepository {
  async getUserProfile(user_id) {
    try {
      const doc = await getDoc(doc(firestore, "users", user_id));
      if (doc.exists()) {
        return doc;
      } else {
        throw new Error("no such user!");
      }
    } catch (error) {
      throw error;
    }
  }

  async createUserProfile(username, email, bio, profile_picture) {
    newUser = new User({
      username,
      email,
      bio,
      profile_picture,
    });

    await setDoc(doc(firestore, "users", `${email}`), {
      newUser,
    });
  }
  async getCurrentUserProfile() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
  }
  async getUserFollowers(user_id) {
    try {
      const doc = await getDoc(doc(firestore, "users", user_id));
      if (doc.exists()) {
        return doc.data().followers;
      } else {
        throw new Error("no such user!");
      }
    } catch (error) {
      throw error;
    }
  }
}
