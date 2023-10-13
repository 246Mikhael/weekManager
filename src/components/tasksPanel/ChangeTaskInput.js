import React from "react";

function ChangeTaskInput({ 
                         valueOfInput, 
                         changeHandler,
                         id,
                         date,
                         editTask,
                         setVisibleAdd,
                         changeIsEdit
                        }) {

    let obj = { id: id, 
                date: date, 
                value: valueOfInput
              };

    return <input className="change-task"
            value={valueOfInput} 
            onChange={(event) => 
                changeHandler(event.target.value)}
            onKeyDown={(event) => {
                if (event.code === "Enter") {
                    setVisibleAdd()
                    changeIsEdit()
                    editTask(obj)
                }
            }}
            
            />
}

export default ChangeTaskInput;