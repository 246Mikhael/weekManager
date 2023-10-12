import React from "react";
import { nanoid } from "@reduxjs/toolkit";


function AddButton({setId,setTask,idOfDay, flag, newTask, date, setValue}){

  function id() {
    return nanoid();
  }

  let iden = id();

  const obj = {date: date, 
                newTask: newTask,
                id: iden          
               }

  let text;

  if (flag) {
    text = 'добавить задание'; 
  } else {
    text = 'сохранить';
  }

  return <button  
      className = {flag ? "button-add" : "button-save-with-input" } 
      data-tooltip-id = "tooltip"
      data-tooltip-content = {text}

      onClick={() => {
        if (flag === true) {
            setId(idOfDay);
            setValue('');
        } if (!flag) {
              
            if (newTask !== '') {
              setTask(obj);    
          }
          setId(undefined);
        }
        
      }}>
  
</button>
}

export default AddButton;