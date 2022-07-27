import React,{useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";


const FirebaseUpdateProfile = () => {
  const auth = getAuth()
    const [name,setName] = useState('')
    const [photoUrl,setPhotoUrl] = useState('')
    const handleSubmit=async(e)=>{
      e.preventDefault()
      setName('')
      setPhotoUrl('')
      if(name&&photoUrl){
     try {
      await updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoUrl
      })

      window.alert('profile update successfully!')
     } catch (error) {
      console.log(error.message)
     }

      }else{
        window.alert('all fields are required!')
      }

    }
  return (
    <div className='text-center mt-4'>
        <h1>update profile</h1>
       <div className="firebaseupdateprofile">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' className='mt-2' value={name} onChange={(e)=>setName(e.target.value)} /> <br />
            <input type="text" placeholder='photo url' className='mt-2' value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/> <br />
            <button className='btn btn-success mt-2'>update profile</button>
        </form>
       </div>
      
    </div>
  )
}

export default FirebaseUpdateProfile
