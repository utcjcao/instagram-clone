import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { firestore } from "../../Firebase";
import { FollowRequest } from "./FollowRequest";

export class FollowRequestRepository {
  async createFollowRequest(requesterId, recipientId) {
    const followRequest = new FollowRequest({
      id: uuidv4(),
      requesterId,
      recipientId,
      timestamp: Date.now(),
      status: "pending",
    });

    await setDoc(
      doc(firestore, "follow_requests", followRequest.id),
      followRequest
    );
  }

  async acceptFollowRequest(requestId) {
    const followRequestRef = doc(firestore, "follow_requests", requestId);
    await setDoc(followRequestRef, { status: "accepted" }, { merge: true });
  }

  async rejectFollowRequest(requestId) {
    const followRequestRef = doc(firestore, "follow_requests", requestId);
    await setDoc(followRequestRef, { status: "rejected" }, { merge: true });
  }

  async getFollowRequestsForUser(userId) {
    const querySnapshot = await getDocs(
      collection(firestore, "follow_requests")
    );
    const requests = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.recipientId === userId) {
        requests.push(new FollowRequest(data));
      }
    });

    return requests;
  }
}
