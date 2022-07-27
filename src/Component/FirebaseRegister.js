import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const FirebaseRegister = () => {
  const navigate = useNavigate()
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const auth = getAuth()
    const handlesubmit= async(e)=>{
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth,email,password)
            console.log(user)
           // window.alert('Register Successfully!')
           navigate('/')
            SetEmail('')
            SetPassword('')
        } catch (error) {
           // console.log(error.message)
            window.alert(error.message)
            
        }
    }
    const provider = new GoogleAuthProvider();
     const signInwithGoogle= async()=>{
          try {
            await signInWithPopup(auth,provider)
            navigate('/')
          } catch (error) {
            console.log(error.message)
            
          }

        }

  return (
    <div>
       <div className="register text-center mt-4">
        <h4>Register users</h4>
        <form onSubmit={handlesubmit}>
            <input type="email" placeholder='email' value={email} onChange={(e)=>SetEmail(e.target.value)} /> <br />
            <input type="password" placeholder='password' value={password} onChange={(e)=>SetPassword(e.target.value)} className='my-2'/> <br />
            <button className='btn btn-primary my-2' >Register</button> 
        </form>
        <button className='btn btn-secondary mt-2' onClick={signInwithGoogle}>sign in with google</button> <br />
        <span onClick={()=>navigate('/forgetpassword')} style={{cursor:'pointer'}}>forget password?</span>
       </div>
      
    </div>
  )
}

export default FirebaseRegister
