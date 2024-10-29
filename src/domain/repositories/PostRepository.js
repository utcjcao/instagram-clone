import { storage, firestore, auth } from "../../Firebase";

export class PostRepository {
  async uploadPost(file, caption, user_id) {
    try {
      const imageId = uuidv4();
      const storageRef = ref(storage, `uploads/${user_id}/${imageId}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDoc(doc(firestore, "img_data", `${imageId}`), {
        filename: file.name,
        timeUploaded: serverTimestamp(),
        url: url,
        user_id: user_id,
        img_id: imageId,
        caption: caption,
        likes: [],
        comments: [],
      });
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
            const imageRef = ref(storage, `uploads/${user_id}/${data.imageId}`);

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
            `uploads/${data.user_id}/${data.imageId}`
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
  updatePost() {}
  deletePost(user_id, img_id) {
    const storageRef = ref(storage, `uploads/${user_id}/${img_id}`);
    deleteObject(desertRef)
      .then(() => {})
      .catch((error) => {});
    deleteDoc(doc(firestore, "img_data", `${img_id}`));
  }
}
