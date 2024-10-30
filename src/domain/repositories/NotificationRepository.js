import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../../Firebase";
import { Notification } from "../entities/Notification";

export class NotificationRepository {
  async createNotification({ userId, type, postId, commentId }) {
    try {
      const id = uuidv4();
      const notification = new Notification({
        id,
        userId,
        type,
        postId,
        commentId,
        timestamp: serverTimestamp(),
      });

      await setDoc(doc(firestore, "notifications", id), {
        userId: notification.userId,
        type: notification.type,
        postId: notification.postId,
        commentId: notification.commentId,
        timestamp: notification.timestamp,
      });

      return notification;
    } catch (e) {
      console.error("Error creating notification: ", e);
      throw e;
    }
  }

  async getNotifications(userId) {
    try {
      const notificationsCollection = collection(firestore, "notifications");
      const querySnapshot = await getDocs(notificationsCollection);
      const notifications = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return new Notification({
          id: doc.id,
          userId: data.userId,
          type: data.type,
          postId: data.postId,
          commentId: data.commentId,
          timestamp: data.timestamp,
        });
      });

      return notifications.filter(
        (notification) => notification.userId === userId
      );
    } catch (e) {
      console.error("Error fetching notifications: ", e);
      throw e;
    }
  }

  async deleteNotification(notificationId) {
    try {
      await deleteDoc(doc(firestore, "notifications", notificationId));
    } catch (e) {
      console.error("Error deleting notification: ", e);
      throw e;
    }
  }
}
