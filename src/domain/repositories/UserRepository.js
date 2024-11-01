import {
  updateDoc,
  arrayUnion,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import { auth, firestore } from "../../Firebase";
import User from "../entities/User";

export class UserRepository {
  async findUserProfile(user_id) {
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
  async getUsersFollowed(user_id) {
    try {
      const doc = await getDoc(doc(firestore, "users", user_id));
      if (doc.exists()) {
        return doc.data().followed;
      } else {
        throw new Error("no such user!");
      }
    } catch (error) {
      throw error;
    }
  }
  async followUser(follower_id, followed_id) {
    try {
      const followerRef = await getDoc(doc(firestore, "users", follower_id));
      const followedRef = await getDoc(doc(firestore, "users", followed_id));
      if (followerRef.exists() && followedRef.exists()) {
        await updateDoc(followerRef, {
          followed: arrayUnion(followed_id),
        });
        await updateDoc(followedRef, {
          followed: arrayUnion(follower_id),
        });
      } else {
        throw new Error("follower/followed user does not exist!");
      }
    } catch (error) {
      throw error;
    }
  }
  async unfollowUser(follower_id, followed_id) {
    try {
      const followerRef = await getDoc(doc(firestore, "users", follower_id));
      const followedRef = await getDoc(doc(firestore, "users", followed_id));
      if (followerRef.exists() && followedRef.exists()) {
        await updateDoc(followerRef, {
          followed: arrayRemove(followed_id),
        });
        await updateDoc(followedRef, {
          followed: arrayRemove(follower_id),
        });
      } else {
        throw new Error("follower/followed user does not exist!");
      }
    } catch (error) {
      throw error;
    }
  }
}
