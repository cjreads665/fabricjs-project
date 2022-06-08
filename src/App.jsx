import { useEffect, useState } from 'react'
import './App.css'
import { fabric } from "fabric";


function App() {
  let [canvas,setCanvas] = useState('')
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
       height: 800,
       width: 1300,
       backgroundColor: 'pink'
    })
 );
  useEffect(()=>{
setCanvas(initCanvas())
},[canvas])
  return (
    <div className="App">
     <h1 className='text-3xl font-bold'>Fabric.js Demo</h1>
     <canvas id='canvas' className='canvas border border-1 border-black'></canvas>
    </div>
  )
}

export default App
