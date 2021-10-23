import { storage } from '../utils/firebase'
import store from '../store'

export const uploadImage = (file) => {
  const date = new Date(),
        fileName = date.getTime() + "-" + file.name,
        metadata = {
          contentType: 'image/jpeg'
        }

  var uploadTask = storage.ref().child('images/' + fileName).put(file, metadata)

  return uploadTask.then(snapshot => {
    const url = snapshot.ref.getDownloadURL()
    .then((link) => {
      store.commit('SET_RECIPIENT_ID_CARD', link)
    })
    return url
  })
}
  
export const removeImage = function (file) {
  return storage.refFromURL(file).delete()
}