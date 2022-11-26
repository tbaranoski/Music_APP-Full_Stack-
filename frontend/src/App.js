
import React, {useState, useEffect } from 'react'
import Login from './components/Login'

function App(){
  
  const [data,setData] = useState([{}])
  
  useEffect (() => {
    fetch("/members").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])

  //console.log("hello")

  return (
    <div>
      <Login />
      

    </div>
  )
}


export default App;
