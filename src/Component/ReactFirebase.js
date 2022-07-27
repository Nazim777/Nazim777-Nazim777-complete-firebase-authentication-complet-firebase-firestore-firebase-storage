import React,{useEffect, useState} from 'react'
import db from './FirebaseConfig'
import {  collection, getDocs } from 'firebase/firestore';




const ReactFirebase = () => {
    const [movies,setMovies] = useState([])
  
    const getMovies = async()=>{
        const movie = collection(db, 'movies')
        const movieSnapShot = await getDocs(movie)
        const movieList = movieSnapShot.docs.map(doc => ({
            data:doc.data(),
            id:doc.id
        }));
       setMovies(movieList)
    }
    useEffect(()=>{
        getMovies()
    },[])
    // useEffect(()=>{
    //     console.log(movies)

    // },[movies])
    const handleClick= ()=>{
        getMovies()
    }
    

  return (
    <div className='text-center'>
    <ul>
           {
                movies&& movies.map((item)=>{
                  //  console.log(item)
                  
                    return(
                        <>
                        <li key={item.id}>{item.id}: {item.data.name}</li>
                        </>
                    )
                })
            }
    </ul>
    <div className="data my-5">
        <button className='btn btn-primary'  onClick={handleClick}>refresh movie</button>

    </div>
   
      
    </div>
  )
}

export default ReactFirebase
