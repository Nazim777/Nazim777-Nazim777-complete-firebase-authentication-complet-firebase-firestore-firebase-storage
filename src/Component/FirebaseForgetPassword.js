import React,{useState} from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const FirebaseForgetPassword = () => {
    const [email,setEmail] = useState()
    const auth = getAuth()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(email){
          try {
            await sendPasswordResetEmail(auth,email)
            window.alert('reset password email sent!')
          } catch (error) {
            console.log(error.message)
          }


        }else{
            window.alert('input filed required!')
        }


    }
  return (
    <div>
        <h1 className='text-center my-4'>Send Reset Email</h1>
        <div className="firebaseforgetpassword text-center">
            <form onSubmit={handleSubmit}>
               
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} /> <br />
                <button className='btn btn-success my-2'>send email</button>
            </form>

        </div>
      
    </div>
  )
}

export default FirebaseForgetPassword
