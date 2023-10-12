import React from "react";


function DeleteTaskButton({ deleteTask, 
                            id, 
                            date, 
                            deleteEmptyDay, 
                            tasksFromStore}) {
    let obj = {id: id, 
               date: date
              }

    let tasksOfDay = tasksFromStore[date]
    
    return <button 
             className="delete-button"
             data-tooltip-id="tooltip"
             data-tooltip-content = "удалить"
    
             onClick={() => {deleteTask(obj);
                if(tasksOfDay.length === 1) { 
                   deleteEmptyDay(date)}
              }}>
            </button>
}

export default DeleteTaskButton;
