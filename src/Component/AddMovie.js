import React,{ useState} from 'react'
import db from './FirebaseConfig'
import {  collection,addDoc, doc, setDoc } from 'firebase/firestore';



const AddMovie = () => {
    const userId = localStorage.getItem('userId')
    const [name,Setname] =useState('')
    const handleChange = async(e)=>{
        Setname(e.target.value)

    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
       Setname('')
        try {
        //     const movieRef = await addDoc(collection(db,'movies'),{name})
        //     console.log(movieRef.id)
        //    return movieRef

        await setDoc(doc(db, 'movies', userId), {
           name,
           userId:userId,
           
          });



        } catch (error) {
            console.log(error.message)
        }
        // console.log(movieName)
    }

  return (
    <div>
        <div className="container">
        <form onSubmit={handleSubmit} className='text-center'>
        <h1 className='my-5 text-center '>Add Movie</h1>
        <input type="text" placeholder='movie name' value={name} onChange={handleChange} className='my-2' /> <br />
        <button className='btn btn-secondary'>add movie</button>
        </form>

        </div>
      
    </div>
  )
}

export default AddMovie
