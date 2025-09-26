import { useState,useRef } from "react";

function Body() {
    const [text,setText] = useState("");
    const inputRef = useRef(null);

    const handleOnClick = (e) => {
        const value = inputRef.current.value;
        setText(value);
    }


    return (
        <>
        <h1>This is Body Component</h1>
        <input type="text" ref={inputRef}/>
        <p>{text}</p>
        <button onClick={handleOnClick}>클릭</button>
        </>
    );
}

export default Body;
