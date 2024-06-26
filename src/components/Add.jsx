import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addvideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
  //create a state to hold data from input
 const [video, setVideo] =useState({
  caption:"",
  image:"",
  url:""
 })

  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false)
    setVideo({
      caption:"",
      image:"",
      url:""
    })
  };
  const handleShow = () => setShow(true);

     const validateLink =(e)=>{
    console.log(e.target.value);
    const link = e.target.value
    if(link.endsWith('?v=kBHstSYCgew')){
      const yTkey = link.slice(-26,-15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})

    }
    else if(link.startsWith('https://www.youtu.be')){
      const yTkey = link.slice(17,28)
      console.log(yTkey);
      let embedLink =`https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
    else{
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink =`https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
  }
 
  const handleUpload= async (e)=>{
   e.preventDefault()
   const {caption , image , url} = video

   if(!caption||!image||!url){
    alert('Please fill the form completely')
   }
   else{
    const result = await addvideoApi(video)
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Video uploaded successfully')
      setAddStatus(result.data)
      handleClose()
    }
    else{
      toast.error('Something went wrong')
      handleClose()
    }
   }
  }
   //https://www.youtube.com/watch?v=kBHstSYCgew
   //https://youtu.be/kBHstSYCgew?si=85IDp9Rg0XxRi--x
   //https://www.youtube.com/embed/kBHstSYCgew
   /*<iframe width="935" height="526" src="https://www.youtube.com/embed/kBHstSYCgew" title="Hero Video Songs - Tamil |Over&#39;a Feel Pannuren Video Song | Sivakarthikeyan,Kalyani | Yuvan Shankar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
  console.log(video);
  return (
    <>
    <div className='d-flex align-items-center justify-content-center'>
        <h5 className='text-white' id='h'>Upload new Video </h5>
        <button className='btn mb-2 text-white' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl'></FontAwesomeIcon></button>
    </div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-white'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border rounded-3 border-1 p-3'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text" placeholder='Video Url' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' positio='top-center' autoclose={2000} />
    </>
  )
}

export default Add