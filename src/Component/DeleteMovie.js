import React,{useState} from 'react'
import db from './FirebaseConfig'
import { doc,deleteDoc } from 'firebase/firestore'

const DeleteMovie = () => {
    const [id,Setid] =useState('')
    const handleSubmit= async(e)=>{
        e.preventDefault()
        Setid('')
       try {
        const docref = doc(db,'movies',id)
        await deleteDoc(docref)
       } catch (error) {
        console.log(error.message)
       }

    }
    const handleChange=(e)=>{
        Setid(e.target.value)

    }
  return (
    <div>
        <div className="container text-center mb-5">
            <h1 className='my-4'> Delete Movie</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='movie id' value={id} onChange={handleChange} className='my-2' /> <br />
            <button className='btn btn-secondary'>delete movie</button>
            </form>
        </div>
      
    </div>
  )
}

export default DeleteMovie
