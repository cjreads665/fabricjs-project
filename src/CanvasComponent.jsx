import React,{useEffect} from 'react'
import { fabric } from "fabric";

const CanvasComponent = ({setPointX,setPointY,setClicked,setDrag,setResize,setScaling,setRotating}) => {
useEffect(()=>{
	let canvas = new fabric.Canvas('c');
    let rect = new fabric.Rect({
		left: 200,
		top: 300,
		fill: 'red',
		width: 100,
		height: 120
	  });

	let circle = new fabric.Circle({
		radius: 30,
		fill: 'green',
		left: 400,
		top: 300
	});
//adding a rectange to the canvas
	  canvas.add(rect,circle);
	  var moveHandler = function (e) {
		var movingObject = e.target;
		setDrag('true')
		// console.log(movingObject.get('left'), movingObject.get('top'));
		setPointX(movingObject.get('left'))
		setPointY(movingObject.get('top'))
	};
	canvas.on('object:moving',moveHandler)
	rect.on('mousedown',(e)=>setClicked('true'))
	rect.on('mouseup',()=>setDrag('false'))
	rect.on('scaling',()=>setScaling('true'))
	rect.on('rotating',()=>setRotating('true'))
	rect.on('resizing',()=>setResize('true'))
	circle.on('mousedown',(e)=>setClicked('true'))
	circle.on('mouseup',()=>setDrag('false'))
	circle.on('scaling',()=>setScaling('true'))
	circle.on('rotating',()=>setRotating('true'))
	circle.on('resizing',()=>setResize('true'))
},[])
  return (
    <canvas id='c' width={window.innerWidth} height={window.innerHeight} className='border border-1 border-black' />
  )
}

export default CanvasComponent