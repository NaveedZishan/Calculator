import React,{useState} from 'react'
import "./Digitalclock.css"
function Digitalclock() {
const Time= new Date().toLocaleTimeString()
  const [cTime,setCtime]=useState(Time)


  const updateTime=()=>{
    const Time= new Date().toLocaleTimeString()
    setCtime(Time)

  }
 setInterval(updateTime,1000)

  return (
    <div className='main-div'>

<h1 id='h1'>  {cTime} </h1>

    </div>
  )
}

export default Digitalclock