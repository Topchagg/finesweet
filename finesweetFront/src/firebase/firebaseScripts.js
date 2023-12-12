import { v4 as uuidv4 } from 'uuid';
import storage from './firebase'
import {ref,uploadBytes,getDownloadURL, deleteObject, getMetadata} from 'firebase/storage'


export async function downloadImgTo(img, folderName) {
    const imgRef = ref(storage, folderName + uuidv4());
    await uploadBytes(imgRef, img);
    const imgURL = await getDownloadURL(imgRef);
    return imgURL
}

export async function deleteImg(img) {
   await getMetadata(ref(storage,img)).then(async (metadata) => {
    const filePath = metadata.fullPath
    const fileRef = ref(storage,filePath)
    await deleteObject(fileRef)
   })
}

export async function updateImg(oldImg, newImg){
    await deleteImg(oldImg);
    const imgUrl = await downloadImgTo(newImg);
    return imgUrl;
}