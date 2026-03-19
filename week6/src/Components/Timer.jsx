import React from 'react'
import { useState,useEffect } from 'react'

function Timer () {
    const [seconds,setSeconds]=useState(0)
    const [running,setIsRunning]=useState(false)

    useEffect(()=>{
        let interval=null
        if(running) {
           interval=setInterval(()=>{
                setSeconds(seconds=>seconds+1)
            },1000)
        }
        return ()=> clearInterval(interval)
    },[running])

    function Start() {
        setIsRunning(true)
    }
    return (
        <div>
        <h1>Timer Component </h1>
        <p>Timer: {seconds}</p>
        <button onClick={Start}>click to start</button>
        <button onClick={()=>setIsRunning(false)}>stop</button>
        <button onClick={()=>{setSeconds(0)}}>reset</button>
        </div>
    )
    
}
export default Timer
