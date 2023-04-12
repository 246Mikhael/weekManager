import React from "react";
import TaskCheckBox from "./TaskCheckbox";
import ListOfPastTasks from "./ListOfPastTasks"

function TasksCheckBoxes({
  tasksFromStore,
  deleteTask,
   date,
   changeCheck, 
   editTask,
   setVisibleAdd,
   today,
   flagTasksEditButton,
   deleteEmptyDay
  }){
   

  const tasksOfDay = tasksFromStore[date]; 
  function addZeros(date){
    let arr = date.split(' ')
    arr[1] = addZero(String(Number(arr[1])));
    arr[2] = addZero(String(Number(arr[2])));
    return arr.join(' ')
 }
 
 function addZero(num){
  if (num >= 0 && num <= 9){
     return '0' + num;
  } else {
     return num;
  }
}

let normalDate = addZeros(date);
let normalToday = addZeros(today); 

 

  let res;
 if(!tasksOfDay){
   res = '';
 } else {
   res = tasksOfDay.map(function(item, index){
     if(normalDate >= normalToday){
    return <TaskCheckBox key={index}
                         index={index}
                         value={item.value}
                         date={date} 
                         isChecked={item.isChecked}
                         changeCheck={changeCheck}
                         setVisibleAdd={setVisibleAdd}
                         deleteTask={deleteTask}
                         editTask={editTask}
                         id={item.id}
                         flagTasksEditButton={flagTasksEditButton}
                         deleteEmptyDay={deleteEmptyDay}
                         tasksFromStore={tasksFromStore}
                         />
     } else {
      return <ListOfPastTasks value={item.value}
                             key={index}
                             id={item.id}
                             deleteTask={deleteTask}
                             date={date}
                             isChecked={item.isChecked}
                             flagTasksEditButton={flagTasksEditButton}
                             deleteEmptyDay={deleteEmptyDay}
                             tasksFromStore={tasksFromStore} />
     }                   
   })
 }
   return <div>{res}</div>;  
}
export default TasksCheckBoxes;