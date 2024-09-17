import { useState } from 'react'
import './App.css'
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import { storage } from './firebase-config'

function App() {
  const [fileUpload, setFileUpload] = useState()
  const [urls,setUrl] = useState([])
  const uploadFile = () => {
    if (!fileUpload) return;

    const fileRef = ref(storage, `apks/${fileUpload.name}`);

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setUrl(url);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload</button>
      <p>{urls}</p>
    </div>
  )
}

export default App
