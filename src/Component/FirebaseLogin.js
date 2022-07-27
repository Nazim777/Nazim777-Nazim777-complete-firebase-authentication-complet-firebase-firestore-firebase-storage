import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const FirebaseLogin = () => {
const navigate = useNavigate()

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const auth = getAuth()
    const handlesubmit= async(e)=>{
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth,email,password)
            console.log(user)
            localStorage.setItem('userId', user.user.uid)
            //window.alert('Login Successfully!')
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
         <div className="loginUser text-center mt-4">
        <h4>Login User</h4>
        <form onSubmit={handlesubmit}>
            <input type="email" placeholder='email' value={email} onChange={(e)=>SetEmail(e.target.value)} className='mb-2' /> <br />
            <input type="password" placeholder='password' value={password} onChange={(e)=>SetPassword(e.target.value)} className='my-2'/> <br />
            <button className='btn btn-primary my-2'>Login</button> <br />
        </form>
        <button className='btn btn-secondary mt-2' onClick={signInwithGoogle}>sign in with google</button> <br />
        <span onClick={()=>navigate('/forgetpassword')} style={{cursor:'pointer'}}>forget password?</span>
       </div>
      
      
    </div>
  )
}

export default FirebaseLogin
