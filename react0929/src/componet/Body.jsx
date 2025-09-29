import { useEffect } from "react"

export default function Body(){
    useEffect(()=>{
        console.log('컴포넌트가 처음 마운트됨');
    
        return() => {
            console.log('컴포넌트가 언마운트될 때 실행됨');
        };
    },[]);


    return(
        <>
          <h1>Body</h1>
        </>
    )
}

