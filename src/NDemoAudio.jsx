import React from "react"
import { useState ,useRef} from "react"

function NDemoAudio() {
    const[index,setIndex]=useState(0)
    const[audio,setAudio]=useState(["./audio/a.mp3","./audio/b.mp3","./audio/c.mp3","./audio/d.mp3","./audio/e.mp3"])
    const refss=useRef()
const forward=()=>{

    setIndex(index+1)
    if(index==4){
setIndex(0)
    }
}
    
const backward=()=>{

    setIndex(index-1)
    if (index==0) {
    setIndex(4)    
    }
}
    
const play=()=>{
    refss.current.play()
}

const pause=()=>{
    refss.current.pause()
}






return(<>

<h1> This is MX-Player</h1>
<p> Topic is:{audio[index]}</p>
<audio src={audio[index]} ref={refss}    ></audio>
<button onClick={forward}>forward</button>
<button onClick={backward}>backward</button>
<button onClick={play}> Play</button>
<button onClick={pause}>Pause</button>
</>)

}
export default NDemoAudio