import React from "react";
import { nanoid } from "@reduxjs/toolkit";


function AddButton({setId,setTask,idOfDay, flag,newTask, date, setValue, style}){

  function id(){
    return nanoid()
  }
  let iden = id();

   const obj = {date: date, 
               newTask: newTask,
               id: iden          
            }

    return <button style={style}  className="buttons-add-edit" 
            onClick={()=>{
        if(flag === true){
            setId(idOfDay)
            setValue('')
        } if(!flag){
              
            if(newTask !== ''){
              setTask(obj)    
          }
          setId(undefined)
        }
    }
}>добавить</button>
}

export default AddButton;