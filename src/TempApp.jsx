import React,{useState} from "react";

function Temp(){
 const [kel,setKel]=useState()
const [degree,setDegree]=useState()

// const C=(e)=>{
// setDegree(e.target.value)

// } 
// const K=(e)=>{
// setKel(e.target.value)

// }
return(
<div>

    <div>
    <input type="number" value={kel} onChange={(event) => setKel((event.target.value * 9 / 5) + 32).toFixed(2)}    placeholder="Please Enter The Temperature"/><br></br>
    <input type="number"  value={degree} onChange={(event) => setDegree((event.target.value - 32) * 5 / 9).toFixed(2)} placeholder="Please Enter The Temperature"/>
     
    </div>

</div>
)
}
export default Temp;