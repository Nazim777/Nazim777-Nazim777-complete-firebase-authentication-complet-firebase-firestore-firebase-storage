import React from 'react'
import ReactFirebase from './ReactFirebase'
import AddMovie from './AddMovie'
import UpdateMovie from './UpdateMovie'
import DeleteMovie from './DeleteMovie'
const FirebaseFireStore = () => {
  return (
    <div>
        <div className="container">
      <ReactFirebase/>
      <AddMovie/>
      <UpdateMovie/>
      <DeleteMovie/>
      

      </div>
      
    </div>
  )
}

export default FirebaseFireStore
