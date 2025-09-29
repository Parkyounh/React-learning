import { useState,useEffect, useSyncExternalStore } from "react"

export default function Timer(){
const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
          setSeconds(prev => prev+1);  
        },1000);

        return () => {
            clearInterval(interval);
        }
    
    },[]);  // 빈 배열, 한번만 실행


    return(
        <p>타이머: {seconds}초</p>
    )
}

