import React, { useState ,useRef} from "react";

function DemoAudio() {

    const [index, setIndex] = useState(0)
    const [audio, setAudio] = useState(["./audio/a.mp3", "./audio/b.mp3", "./audio/c.mp3", "./audio/d.mp3", "./audio/e.mp3"])
    // console.log(audio[index]);
 const referen=useRef(null)
const forward=()=>{

setIndex(index+1)
// setAudio(audio[index])
setAudio(audio)
if(index===4){
    setIndex(0)
}
}

const backward=()=>{

    setIndex(index-1)
    // setAudio(audio[index])
    setAudio(audio)

    if(index===0){
        setIndex(4)
    }
    

}


const play=()=>{

    referen.current.play();

}

const pausE=()=>{
referen.current.pause()
    

}




    return (<>

        <div main-div>
            <div id="inner-div">

            <h1>  MX-PLAYER  {audio[index]}</h1>
<button onClick={forward}>Addition  </button>

<button onClick={backward}>Subtraction</button>
{<audio      src={audio[index]} ref={referen}  />}
<button onClick={play}>  PLAY</button>
<button onClick={pausE}>  Pause</button>


            </div>
        </div>
    </>)
}
export default DemoAudio