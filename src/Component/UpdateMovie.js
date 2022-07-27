import React,{useState} from 'react'
import db from './FirebaseConfig'
import { doc,updateDoc } from 'firebase/firestore'

const UpdateMovie = () => {
    const [name,Setname] =useState('')
    const [id,Setid] = useState('')
    const handleChange = async(e)=>{
        Setname(e.target.value)

    }
    const handleChange2= (e)=>{
        Setid(e.target.value)
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
       Setname('')
       Setid('')
       try {
        const docref = doc(db,'movies',id)
        const result = await updateDoc(docref,{name})
        return result
       } catch (error) {
        console.log(error.message)
       }
        
    }
//console.log(id,name)
  return (
    <div>
        <div className="container">
        <form onSubmit={handleSubmit} className='text-center'>
            
        <h1 className='my-4 text-center '>Edit Movie</h1>
        <input type="text" placeholder='movie id' value={id} onChange={handleChange2}  /> <br />
        <input type="text" placeholder='movie name' value={name} onChange={handleChange} className='my-2'/> <br />
        <button className='btn btn-secondary'>update movie</button>
        </form>

        </div>
      
    </div>
  )
}

export default UpdateMovie
