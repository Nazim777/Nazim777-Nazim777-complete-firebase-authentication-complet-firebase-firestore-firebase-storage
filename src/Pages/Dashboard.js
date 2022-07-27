import React,{useEffect, useState}from 'react'
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate()
  const [LoggedInUser,setLoggedInUser] =useState('')
  const auth = getAuth();
const user = auth.currentUser;
useEffect(()=>{
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    // console.log(displayName,email,photoURL,emailVerified,uid)
   const loggeduser ={
      Name: displayName,
    Email: email,
    PhotoURL: photoURL,
    EmailVerified: emailVerified,
    id: uid
     
    }
    
    if(loggeduser){
      setLoggedInUser(loggeduser)
    }
  }

},[user])
//console.log(LoggedInUser)
const handleUpdate= async()=>{
  navigate('/updatepassword')

}
const handleUpdate2 = async()=>{
  navigate('/updateemail')
}
const handleUpdate3 =()=>{
  navigate('/updateprofile')
}

  return (
    <div>
        <h1 className='text-center'>Dashboard</h1>
        {
          <div className='text-center'>
           
            <img src={LoggedInUser.PhotoURL} alt="" className='img-fluid' style={{height:'150px'}} />
           
            <h4> name: {LoggedInUser.Name}</h4>
            <h4>email: {LoggedInUser.Email}</h4>
            <h4>userId: {LoggedInUser.id}</h4>
            
          </div>
        }
        <div className="updatePassword text-center mt-4">
          <button className='btn btn-info me-2'onClick={handleUpdate}>update password</button>
          <button className='btn btn-info me-2'onClick={handleUpdate2}>update email</button> 
          <button className='btn btn-info'onClick={handleUpdate3}>update profile</button>
        </div>
    </div>
  )
}

export default Dashboard
