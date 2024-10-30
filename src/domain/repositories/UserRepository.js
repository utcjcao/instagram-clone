import {
  updateDoc,
  arrayUnion,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import { storage, firestore, auth } from "../../Firebase";

export class UserRepository {
  getUserProfile(user_id) {
    return getDoc(doc(firestore, "users", user_id));
  }
  createUserProfile(email, profile_picture, bio) {
    setDoc(doc(firestore, "users", `${email}`), {
      email: email,
      bio: bio,
      profile_picture: profile_picture,
      caption: caption,
      followers: [],
    });
  }
}
