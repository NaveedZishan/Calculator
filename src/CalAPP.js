import React,{useState} from "react";
import "./APPP.css"

function APPP(){
const[result,setResult]=useState("")
const clickHandler=(e)=>{
    setResult(result.concat(e.target.value))    
}


const clear=()=>{
    setResult("")
}

const calculate=()=>{

    setResult(eval(result.toString()))
}

    return(<div className="calc">
        <h1>My Calculator</h1>
        <input type="text" placeholder="0"  id="answer"   value={result}/>
<input type="button" value="9"   className="button" onClick={clickHandler}/>
<input type="button" value="8" className="button" onClick={clickHandler}/>
<input type="button" value="7" className="button" onClick={clickHandler}/>
<input type="button" value="6" className="button" onClick={clickHandler}/>
<input type="button" value="5" className="button" onClick={clickHandler}/>
<input type="button" value="4" className="button" onClick={clickHandler}/>
<input type="button" value="3" className="button" onClick={clickHandler}/>
<input type="button" value="2" className="button" onClick={clickHandler}/>
<input type="button" value="1" className="button"onClick={clickHandler}/>
<input type="button" value="0" className="button" onClick={clickHandler}/>
<input type="button" value="." className="button" onClick={clickHandler}/>
<input type="button" value="+" className="button" onClick={clickHandler}/>
<input type="button" value="-" className="button"onClick={clickHandler}/>
<input type="button" value="*"className="button" onClick={clickHandler}/>
<input type="button" value="/"  className="button" onClick={clickHandler}/>
<input type="button" value="%" className="button" onClick={clickHandler}/>
<input type="button" value="clear" className="button button1" onClick={clear}/>
<input type="button" value="=" className="button button1" onClick={calculate}/>



    </div>
    )
}
export default APPP