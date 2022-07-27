import './App.css';
import React,{useState} from 'react';
import FirebaseRegister from './Component/FirebaseRegister';
import FirebaseLogin from './Component/FirebaseLogin';
import FirebaseFireStore from './Component/FirebaseFireStore';
import FirebaseStorage from './Component/FirebaseStorage/FirebaseStorage';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UpdatePassword from './Component/UpdatePassword';
import FirebaseForgetPassword from './Component/FirebaseForgetPassword';
import FirebaseUpdateEmail from './Component/FirebaseUpdateEmail';
import FirebaseUpdateProfile from './Component/FirebaseUpdateProfile';


function App() {
  const auth = getAuth()
  const [user,SetUser] = useState(false)


  onAuthStateChanged(auth, (user) => {
    if (user) {
      SetUser(true)
      
      // const uid = user.uid;
    } else {
      SetUser(false)
    }
  });


//console.log(user)
//console.log(process.env)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar user = {user}/>
      <Routes>
        <Route path='/register' element={<FirebaseRegister/>}/>
        <Route path='/login' element={<FirebaseLogin/>}/>
        <Route path='/firestore' element={user?<FirebaseFireStore/>:<FirebaseLogin/>}/>
        <Route path='/storage' element={user?<FirebaseStorage/>:<FirebaseLogin/>}/>
        <Route path='/dashboard' element={user? <Dashboard/>:<FirebaseLogin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/updatepassword' element={user?<UpdatePassword/>:<FirebaseLogin/>}/>
        <Route path='/forgetpassword' element={<FirebaseForgetPassword/>}/>
        <Route path='/updateemail' element={user?<FirebaseUpdateEmail/>:<FirebaseLogin/>}/>
        <Route path='updateprofile' element={user?<FirebaseUpdateProfile/>:<FirebaseLogin/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
