import React,{useState} from 'react'
import './List-input.css'

export default function List_input({inputHandle}) {
   const [first, setfirst] = useState("")
he
  return (
    <div className='input-container'>
        <label>Enter Data in list A</label> 
        <input type="text"  onKeyDown={
            (e) => {
                if(e.code === "Enter"){
                let val = e.target.value;
                inputHandle.inputA(val);
                e.target.value="";
            }}}
            onBlur={ (e) =>
                {  setfirst(e.target.value);
                  e.target.value="";}
              }     />
        <button className="data-enter" onClick={() =>{inputHandle.inputA(first)}}>Submit</button>
        
        <label>Enter Data in list B</label> 
        <input type="text"  onKeyDown={
            (e) => {
                if(e.code === "Enter"){
                let val = e.target.value;
                inputHandle.inputB(val);
                e.target.value="";
            }} } 
            onBlur={ (e) =>
              {  setfirst(e.target.value);
                e.target.value="";}
            }   />
        <button className="data-enter" onClick={() =>{inputHandle.inputB(first)}}>Submit</button>
    </div>
  )
}
