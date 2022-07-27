import react,{ useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";


const UpdatePassword = () => {
    const [password,SetPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const auth = getAuth()
    const user = auth.currentUser;

    const handleSubmit=async(e)=>{
        e.preventDefault()
        SetPassword('')
        setConfirmPassword('')
        if(password&&confirmPassword){
            if(password===confirmPassword){
                try {
                      await updatePassword(user,password)
                      window.alert('password update successfully!')
                   
                 } catch (error) {
                     console.log(error.message)
                     
                 }

            }else{
                window.alert('password and confirm password not match!')

            }
            
        }else{
            window.alert('all fileld are required!')
        }

    }
  return (
    <div className="text-center">
        <h1>upadate password</h1>
        <form onSubmit={handleSubmit}>
            <input type="password" placeholder="password" value={password}  onChange={(e)=>SetPassword(e.target.value)} className='my-2'/> <br />
            <input type="password" placeholder="confirm password" value={confirmPassword}  onChange={(e)=>setConfirmPassword(e.target.value)}/> <br />
            <button className="btn btn-success my-2" type="submit">update</button>
        </form>
      
    </div>
  )
}

export default UpdatePassword
