import React,{useState} from 'react'
import'./Data.css'
function Calculator() {
    const[data,setData]=useState('')

const actionMethod=(e)=>{
    setData(data.concat(e.target.name));
   
}
const Clear=()=>{
    setData("");
}
const Backspace=()=>{
    setData(data.slice(0,-1))
    
}
const calculator=()=>{
    try{
    setData(eval(data).toString())
    }
    catch{
        setData('')
    }
}

  return (
    <div className='primary'  >
        <h1>CALCULATOR</h1>
    <form>
        <input type="text" value={data}/>
        </form>
        <div className='keyboard'>
        <button name='CE' onClick={Backspace}>ce</button>
        <button name='C' onClick={Clear}>c</button>
        <button name='%' onClick={actionMethod}>%</button>
        <button name='^' onClick={actionMethod}>^</button>
       </div> 
       <div className='keyboard'>
        <button name='7' onClick={actionMethod}>7</button>
        <button name='8' onClick={actionMethod}>8</button>
        <button name='9' onClick={actionMethod}>9</button>
        <button name='/' onClick={actionMethod}>&divide;</button>
        </div>
        <div className='keyboard'>
        <button name='4' onClick={actionMethod}>4</button>
        <button name='5' onClick={actionMethod}>5</button>
        <button name='6' onClick={actionMethod}>6</button>
        <button name='*' onClick={actionMethod}>&times;</button>
        </div>
        <div className='keyboard'>
        <button name='1' onClick={actionMethod}>1</button>
        <button name='2' onClick={actionMethod}>2</button>
        <button name='3' onClick={actionMethod}>3</button>
        <button name='-' onClick={actionMethod}>-</button>
        </div> 
        <div className='keyboard'>
        <button name='.' onClick={actionMethod}>.</button>
        <button name='0' onClick={actionMethod}>0</button>
        <button name='+' onClick={actionMethod}>+</button>
        <button name='=' onClick={calculator}>=</button>
    </div>
    </div>
  )
}

export default Calculator
