import React from "react";

function InputTask({setValue}){
    return <input onChange={(event)=> setValue(event.target.value)} className="input-task"/>
}
export default InputTask;