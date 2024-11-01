import { UserRepository } from "../../repositories/UserRepository";

export default function userSearch(username) {
  // repo here
  const userRepository = new UserRepository();

  return async function execute() {
    try {
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      const results = [];

      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      return results;
    } catch (error) {
      console.error("Failed to search user:", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}
