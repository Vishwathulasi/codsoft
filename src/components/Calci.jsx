import React from 'react'
import { useState } from 'react'
import "./Calci.css"

const Calci = () => {
    const [input,setInput]=useState('0');
    const handleClick=(val)=>{
        if(input==='0')
            setInput(val);
        else
        setInput(input + val);
    }
    const calculate=()=>{
        try{
            setInput(eval(input).toString());
        }
        catch(error)
        {
            setInput(error);
        }
    }
    const handleClear=()=>{
        setInput('0');
    }
  return (
    <div className='wrap'>
        <div className='screen'>
            <input type="text" value={input} />
        </div>
        <div className='btn'>
            <div>
                <button onClick={()=>{handleClick('7')}} className='btn-group'>7</button>
                <button onClick={()=>{handleClick('8')}} className='btn-group'>8</button>
                <button onClick={()=>{handleClick('9')}} className='btn-group'>9</button>
                <button onClick={()=>{handleClick('/')}} className='btn-group'>/</button>
            </div>
            <div>
                <button onClick={()=>{handleClick('4')}} className='btn-group'>4</button>
                <button onClick={()=>{handleClick('5')}} className='btn-group'>5</button>
                <button onClick={()=>{handleClick('6')}} className='btn-group'>6</button>
                <button onClick={()=>{handleClick('*')}} className='btn-group'>x</button>
            </div>
            <div>
                <button onClick={()=>{handleClick('1')}} className='btn-group'>1</button>
                <button onClick={()=>{handleClick('2')}} className='btn-group'>2</button>
                <button onClick={()=>{handleClick('3')}} className='btn-group'>3</button>
                <button onClick={()=>{handleClick('-')}} className='btn-group'>-</button>
            </div>
            <div>
                <button onClick={()=>{handleClick('0')}} className='btn-group'>0</button>
                <button onClick={()=>{handleClear()}} className='btn-group'>CE</button>
                <button onClick={()=>{calculate('=')}} className='btn-group'>=</button>
                <button onClick={()=>{handleClick('+')}} className='btn-group'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Calci