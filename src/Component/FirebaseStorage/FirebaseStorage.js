import React,{useState} from 'react'
import { storage } from '../FirebaseConfig'
import {  ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";

const FirebaseStorage = () => {
    const [Image,setImage] = useState('')
    const [proc,setProc] = useState(0)
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(Image)
        if(Image){
           
            try {
                const storageRef = ref(storage, `/images/${Image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, Image);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    setProc(progress)
                    setImage('')
                    
                }, 
                (error) => {
                console.log(error.message)
                }, 
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    });
                }
                );
                
            } catch (error) {
                console.log(error.message)
                
            }



        }

        
    }
  return (
    <div className='container'>
        <h1 className='text-center my-2'>Upload image</h1>
        <div class="mb-3 text-center">

           <h4 className='text-center'>{proc}</h4>
            <form onSubmit={handleSubmit}>
            
            <input type="file" id="formFile" value={Image} onChange={(e)=>setImage(e.target.files[0])} className='mb-2' /> <br />
            <button type='submit' className='btn btn-success my-3' >upload image</button>
           
            </form>
            </div>

      
    </div>
  )
}

export default FirebaseStorage
