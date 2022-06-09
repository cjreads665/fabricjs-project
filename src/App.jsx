import { useEffect, useState } from 'react'
import './App.css'
import Canvas from './CanvasComponent';


function App() {
  let [pointX,setPointX] = useState(0)
  let [pointY,setPointY] = useState(0)
  let [clicked,setClicked] = useState('false')
  let [drag,setDrag] = useState('false')
  let [resize, setResize] = useState('false')
  let [scaling,setScaling] = useState('false')
  let [rotating,setRotating] = useState('false')
  return (
    <div className="App flex flex-col justify-center relative">
     <div className='flex flex-col justify-between h-32 ml-2 absolute top-4 left-0 bg-white'>
       <span>Fabric.js works!</span>
       <span>Shape Clicked : {clicked}</span>
       <span>Shape Dragged : {drag} </span>
       <span>Shape Resized : {resize} </span>
       <span>Shape Scaled : {scaling} </span>
       <span>Shape Rotated : {rotating} </span>
       <span>x-axis : {pointX}</span>
       <span>y-axis : {pointY}</span>
     </div>
     <Canvas setPointX={setPointX} setPointY={setPointY} setClicked={setClicked} setDrag={setDrag}
     setResize={setResize} setScaling={setScaling} setRotating={setRotating}
     />
    </div>
  )
}

export default App
