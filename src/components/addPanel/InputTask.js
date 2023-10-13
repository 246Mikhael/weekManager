import React from "react";
import { nanoid } from "@reduxjs/toolkit";


function InputTask({ setValue, 
                     setId,
                     setTask,
                     idOfDay, 
                     flag, 
                     newTask, 
                     date
                    }) {
  
    function id() {
        return nanoid();
    }
                        
    let iden = id();
                        
    const obj = {date: date, 
                newTask: newTask,
                id: iden          
                }
                                    
    return <input
             placeholder="введите задание"
             onChange={(event)=> setValue(event.target.value)} 
             onKeyDown={(event) => {
                if (event.code === "Enter") {
                   if (flag === true) {
                       setId(idOfDay);
                       setValue('');
                   } if (!flag) {
                      
                       if (newTask !== '') {
                          setTask(obj);    
                       }
                       setId(undefined);
                    }
                }
              }}
             className="input-task"/>
}
export default InputTask;