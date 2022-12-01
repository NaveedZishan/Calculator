import React, { useState, useRef } from "react";
import "./audio.css"
function AppAudio() {
    const Refer = useRef(null)

    const Audioo = ["./audio/a.mp3", "./audio/b.mp3", "./audio/c.mp3", "./audio/d.mp3", "./audio/e.mp3"]

    const [index, setIndex] = useState(0)
    const [audio, setAudio] = useState(Audioo[index])
    // console.log(audio);
    // console.log(index);
    const forw = () => {
        setIndex(index + 1)
        setAudio(Audioo[index])

if(index==4)
{
setIndex(0);
}


    }

    const backw = () => {
        setIndex(index - 1)
        setAudio(Audioo[index])

if(index==0){
    setIndex(4)

}

    }
 
    const PlayEvent=()=>{

Refer.current.play()

    }

    const PauseEvent=()=>{

        Refer.current.pause();
    }

    return (<>
        <div id="main-div">

            <div id="middle-div">   
                     
            <h1>MX-Players audio{audio}</h1>
            {/* <h2> using useref </h2> */}
            {<audio src={audio}  ref={Refer} /> }
            
            <button onClick={forw}> Forword</button>
            <button onClick={backw}> Backword</button>
            <button onClick={PlayEvent}>Play</button>
            <button onClick={PauseEvent}>Pause</button>
                
                 </div>
        </div>
    </>)
}
export default AppAudio;