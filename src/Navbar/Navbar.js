import React from 'react'
import {Link} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'



const Navbar = (props) => {
  const navigate = useNavigate()
  
 // console.log(props.user)
  const  user = props.user
const auth = getAuth()
const userLogOut=async()=>{
             try {
              await signOut(auth)
              navigate('/login')
              localStorage.removeItem('userId')
              
             } catch (error) {
              console.log(error.message)
              
             }
}


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NavBrand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          
          <Link className='nav-link' to='/'>Home</Link>
        </li>
       
       
        {
          user? 
          <>
           <li className="nav-item">
          
          <Link className='nav-link' to='/firestore'>Firestore</Link>
        </li>
        <li className="nav-item">
          
          <Link className='nav-link' to='/storage'>Storage</Link>
        </li>
           <li className="nav-item">
            <Link className='nav-link' to='/dashboard'>Dashboard</Link>
        </li>

        <li className="nav-item">
         
         <Link className='nav-link' to='#' onClick={userLogOut}>Logout</Link>
       </li>
          
          </>
          :
          <>
           <li className="nav-item">
          
          <Link className='nav-link' to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          
          <Link className='nav-link' to='/login'>Login</Link>
        </li>
          </>
         
        }
       
      
       
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
