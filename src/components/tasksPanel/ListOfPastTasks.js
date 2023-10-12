import React from "react";
import DeleteTaskButton from "./DeleteTaskButton";

function ListOfPastTasks({
    value,
    deleteTask,
    date,
    id,
    isChecked, 
    flagTasksEditButton,
    deleteEmptyDay,
    tasksFromStore
}){
 
   const style = {
        textDecoration: isChecked ? 'line-through' : 'none',
        paddingLeft: '5px',
        marginBottom: '10px'
    }

    if(flagTasksEditButton){
      return <div>
       <li style={style}>
         {value}
        <DeleteTaskButton 
           deleteTask={deleteTask} 
           date={date} 
           id={id}
           tasksFromStore={tasksFromStore}
           deleteEmptyDay={deleteEmptyDay}/>
        </li>
     </div>
    } else {
      return <div>
        <li style={style}>
          {value}
          </li>
      </div>
    } 
}

export default ListOfPastTasks;