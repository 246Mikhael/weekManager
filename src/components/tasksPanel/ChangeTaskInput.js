import React from "react";

function ChangeTaskInput({valueOfInput, changeHandler}){
    return <input className="change-task"
            value={valueOfInput} 
            onChange={(event)=> changeHandler(event.target.value)}/>
}

export default ChangeTaskInput;