import React, { useState } from "react";
import "./democalc.css"
function CalC() {
    const [result, setResult] = useState("")

    const clickHandle = (e) => {
        // const join=e.target.value
        // setResult()
        setResult(result.concat(e.target.value))

    }

    const calculate=()=>{
setResult(eval(result.toString()))

    }

    return (<div className="calc">
        <h1>  My Calculator</h1>
        <input type="text" placeholder="0" id="answer" value={result}></input>
        <input type="button" value="9" className="button" onClick={clickHandle}/>
        <input type="button" value="8" className="button" onClick={clickHandle}/>
        <input type="button" value="7" className="button" onClick={clickHandle}/>
        <input type="button" value="6" className="button" onClick={clickHandle}/>
        <input type="button" value="5" className="button" onClick={clickHandle}/>
        <input type="button" value="4" className="button" onClick={clickHandle}/>
        <input type="button" value="3" className="button" onClick={clickHandle}/>
        <input type="button" value="2" className="button" onClick={clickHandle}/>
        <input type="button" value="1" className="button" onClick={clickHandle}/>
        <input type="button" value="0" className="button" onClick={clickHandle}/>
        <input type="button" value="." className="button" onClick={clickHandle}/>
        <input type="button" value="+" className="button" onClick={clickHandle}/>
        <input type="button" value="-" className="button" onClick={clickHandle}/>
        <input type="button" value="*" className="button" onClick={clickHandle}/>
        <input type="button" value="/" className="button" onClick={clickHandle}/>
        <input type="button" value="%" className="button" onClick={clickHandle}/>
        < input type="button" value="clear" className="button button1" onClick={() => { setResult("") }}/>
        <input type="button" value="=" className="button button1" onClick={calculate} />
    </div>)

}
export default CalC