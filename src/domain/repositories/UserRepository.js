import {
  updateDoc,
  arrayUnion,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import { firestore } from "../../Firebase";
import User from "../entities/User";

export class UserRepository {
  getUserProfile(user_id) {
    return getDoc(doc(firestore, "users", user_id));
  }
  createUserProfile(username, email, bio, profile_picture) {
    newUser = new User({
      username,
      email,
      bio,
      profile_picture,
    });

    setDoc(doc(firestore, "users", `${email}`), {
      newUser,
    });
  }
}
