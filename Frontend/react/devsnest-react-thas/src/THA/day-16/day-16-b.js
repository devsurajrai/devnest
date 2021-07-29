import { div } from 'prelude-ls'
import './day-16-b.css'
// import React,{useState}from 'react'




function DaySixteenB(){

  let lightBox=<span className="light"></span>;
  let darkBox=<span className="dark"></span>

  let arr=[]
  function box(){
      for(let i=0;i<70;i+=1){
      arr.push(<span>{darkBox}{lightBox}</span>)
}}
box()
var boxElements=arr.map((item)=>{return(item)})

return(
    <div className="main-container">
      <div className="board">
      {boxElements}
         
      </div>
    </div>
  )
}

export default DaySixteenB