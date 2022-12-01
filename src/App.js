import React,{useState} from "react";
import"./Calc.css"

const arr=[9,8,7,6,5,4,3,2,1,0,".","+","-","*","/","%"]
function App() {

const[result,setResult]=useState("");

  const clickHandler=(val)=>{
setResult(result.concat(val))
//console.log(val);
 }
 const clear=()=>{
setResult("")

 }

 const calculate=()=>{

  setResult(eval(result.toString()))
 }
  return (
    <div className="calc">
      
      <input type= "text " placeholder="0" id="answer" value={result}></input>
      {
        arr.map((val,i)=>{

         return( <button  className="button"  key={i} onClick={()=>clickHandler(val)}   >{val}</button>)
        })
      }
      {/* <input type= "button" value="9" className="button" onClick={clickHandler}></input >
      <input type= "button" value="8"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="7"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="6"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="5"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="4"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="3"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="2"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="1"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="0"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="."  className="button" onClick={clickHandler}></input>
      <input type= "button" value="+"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="-"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="*"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="/"  className="button" onClick={clickHandler}></input>
      <input type= "button" value="%"  className="button" onClick={clickHandler}></input> */}
      <input type= "button" value="Clear"  className="button button1" onClick={clear}></input>
      <input type= "button" value="="  className="button button1" onClick={calculate}></input>
    </div>
  );
}

export default App;
