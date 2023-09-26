"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getStorage, ref, getDownloadURL, getMetadata } from 'firebase/storage'
import app from '@/app/firebaseconf'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import FileSaver from 'file-saver';
const Book = ({ book }) => {
  const storage = getStorage(app)
  const photoRef = ref(storage, book.image_path)
  const [imgurl, setimgurl] = useState("")
  const shortDesc = book.description.slice(0, 100) + "...";
  const fileRef = ref(storage, book.path)
  const fetchFile = async () => {
    const downloadURL = await getDownloadURL(fileRef);
    const response = await fetch(downloadURL);
    console.log(response)
    const blob = await response.blob();
    return blob;
  };
  const download = async () => {
    const blob = await fetchFile();
    const md = await getMetadata(fileRef)
    const fileName = md.name
    FileSaver.saveAs(blob, fileName);
  };
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }
  const hideModal = () => {
    setVisible(false)
  }
  useEffect(() => {

    getDownloadURL(photoRef).then((url) => {
      setimgurl(url)
    })
  }, [])
  return (
    <>
      <div className="col-md-4 my-4">
        <div className="card" style={{ width: "18rem" }}>
          {
            imgurl != "" ? <Image src={imgurl} width={0}
              height={0}
              alt='image'
              sizes="100vw"
              style={{ width: '100%', height: '18rem', padding: '10px' }} /> :
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          }
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary"><span className="badge text-bg-success">{book.genre}</span></h6>
            <p className="card-text">{shortDesc}</p>

            <button className="btn btn-primary" onClick={showModal}>View</button>
          </div>
        </div>
      </div>

      <Rodal visible={visible} onClose={hideModal} closeMaskOnClick={false} closeOnEsc={true} customStyles={{ width: "clamp(50%,700px,90%)", height: "90%", overflowY: "auto" }}>
        <div className="container row p-1">
          <div className='col p-2'>
            <div>
              <Image src={imgurl} width={0}
                height={0}
                alt='image'
                sizes="100vw"
                style={{ width: '100%', height: '100%', padding: '10px' }} />
            </div>
            <div>
              <h1>{book.title}</h1>
              <h6>{book.author}</h6>
              <button className="btn btn-success" onClick={download}>Download</button>
            </div>
          </div>
          <div className='col p-3'>
            <h5>Genre: {book.genre}</h5>
            <details >
              <summary>Description</summary>
              <p>
                {book.description}
              </p>
            </details>
          </div>
        </div>
      </Rodal>

    </>
  )
}

export default Book