// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Calci from './components/Calci';

function App() {
  // const[result,setResult]=useState(0);
  // const[clear,setClear]=useState(false);
  // function add(e){
  //   e.preventDefault();
  //   if(clear)
  //   setClear(false);
  //   let currentValue=document.querySelector('#num').value;
  //   if(currentValue==='')
  //     return;
  //   let sum=result+parseInt(currentValue);
  //   setResult(sum);
  //   document.querySelector('#num').value='';
  // }
  // function clr(e)
  // {
  //   e.preventDefault();
  //   document.querySelector("form").reset();
  //   setResult(0);
  //   setClear(false);
  // }
  return (
    <div className="App">
      {/* <form >
        <input type="text" id="result" value={result}/>
        <input type="text" id="num"  placeholder='enter any value to add'/>
        <button onClick={add}>add</button>
        <button onClick={clr}>clear</button>
      </form> */}
      <Calci/>
    </div>
  );
}

export default App;
