import React from "react";


function DeleteTaskButton({deleteTask, id, date, deleteEmptyDay, tasksFromStore}){
    let obj = {id: id, date: date}
    let tasksOfDay = tasksFromStore[date]
    
    return <button 
    className="delete-button"
    onClick={()=>{deleteTask(obj);
        if(tasksOfDay.length === 1){ 
            deleteEmptyDay(date)}
   
    }}>
    </button>
}

export default DeleteTaskButton;
