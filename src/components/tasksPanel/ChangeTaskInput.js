import React from "react";

function ChangeTaskInput({valueOfInput, changeHandler, style}){
    return <input style={style}
            value={valueOfInput} 
            onChange={(event)=> changeHandler(event.target.value)}/>
}

export default ChangeTaskInput;