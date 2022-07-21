import React from 'react'
import './List-input.css'

export default function List_input({inputHandle}) {

    
  return (
    <div className='input-container'>
        <label>Enter Data in list A</label> 
        <input type="text"  onKeyDown={
            (e) => {
                if(e.code === "Enter"){
                let val = e.target.value;
                inputHandle.inputA(val);
                e.target.value="";
            }
                
            }
        }   /><br/>
        
        <label>Enter Data in list B</label> 
        <input type="text"  onKeyDown={
            (e) => {
                if(e.code === "Enter"){
                let val = e.target.value;
                inputHandle.inputB(val);
                e.target.value="";
            }
                
            }
        }   /><br/>
    </div>
  )
}
