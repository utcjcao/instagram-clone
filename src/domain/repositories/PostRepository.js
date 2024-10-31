import {
  updateDoc,
  arrayUnion,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";
import { storage, firestore, auth } from "../../Firebase";

export class PostRepository {
  async uploadPost(file, caption, user_id) {
    try {
      const img_id = uuidv4();
      const storageRef = ref(storage, `uploads/${user_id}/${img_id}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      const newPost = new Post({
        filename: file.name,
        timeUploaded: serverTimestamp(),
        url: url,
        user_id: user_id,
        img_id: img_id,
        caption: caption,
        likes: [],
        comments: [],
      });

      setDoc(doc(firestore, "img_data", `${img_id}`), { ...newPost });
    } catch (e) {
      console.error("Error adding img: ", e);
    }
  }
  getPostsByUser(user_id, callback) {
    onSnapshot(collection(firestore, "img_data"), async (snapshot) => {
      const loadedImageData = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          if (data.user_id == user_id) {
            const imageRef = ref(storage, `uploads/${user_id}/${data.img_id}`);

            try {
              const url = await getDownloadURL(imageRef);
              return { id: doc.id, ...data, url };
            } catch (error) {
              return { id: doc.id, ...data, url: null };
            }
          }
          return null;
        })
      );
      const filteredImageData = loadedImageData.filter((data) => data !== null);
      callback(filteredImageData);
    });
  }
  getAllPosts(callback) {
    onSnapshot(collection(firestore, "img_data"), async (snapshot) => {
      const loadedImageData = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();

          const imageRef = ref(
            storage,
            `uploads/${data.user_id}/${data.img_id}`
          );

          try {
            const url = await getDownloadURL(imageRef);
            return { id: doc.id, ...data, url };
          } catch (error) {
            return { id: doc.id, ...data, url: null };
          }
        })
      );
      callback(loadedImageData);
    });
  }
  deletePost(user_id, img_id) {
    const storageRef = ref(storage, `uploads/${user_id}/${img_id}`);
    deleteObject(storageRef)
      .then(() => {})
      .catch((error) => {});
    deleteDoc(doc(firestore, "img_data", `${img_id}`));
  }
  async likePost(img_id, user_id) {
    try {
      const updateRef = doc(firestore, "img_data", `${img_id}`);
      await updateDoc(updateRef, {
        likes: arrayUnion(user_id),
      });
    } catch (e) {
      console.error("Error liking post: ", e);
    }
  }
  async unlikePost(img_id, user_id) {
    try {
      const updateRef = doc(firestore, "img_data", `${img_id}`);
      await updateDoc(updateRef, {
        likes: arrayRemove(user_id),
      });
    } catch (e) {
      console.error("Error liking post: ", e);
    }
  }
  async commentPost(img_id, user_id, comment_txt) {
    try {
      const updateRef = doc(firestore, "img_data", `${img_id}`);
      const newComment = new Comment({
        comment_id: uuidv4(),
        user_id: user_id,
        comment_txt: comment_txt,
        timestamp: serverTimestamp(),
      });

      await updateDoc(updateRef, {
        comments: arrayUnion(newComment),
      });
    } catch (e) {
      console.error("Error commenting post: ", e);
    }
  }
}
