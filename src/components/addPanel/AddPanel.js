import React, { useState} from "react";
import AddButton from "./AddButton";
import InputTask from "./InputTask";
import EditPastTasksButton from "./EditPastTasksButton";
import EditPresentAndFutureTasksButton from "./EditPresentAndFutureTasksButton";

function AddPanel({
  idOfDay,
  setId,
  valueId,
  getFlag,
  flagTasksEditButton,
  setTask ,
  visibleAdd,
  date,
  today,
  tasksFromStore}){




  const[newTask, setNewTask] = useState('');

  function setValue(value){
    setNewTask(value);
  }

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
  
  
  let flag = true;

  if(valueId === idOfDay){
    flag = false;
  } 
  if (valueId === undefined) {
    flag = true;
  }

  let res;

  let tasksThisDay = tasksFromStore[date];

  if ( flag === true && 
       normalDate >= normalToday && 
       tasksThisDay && 
       !flagTasksEditButton) {
    
      res = <div><AddButton 
        setId={setId} 
        idOfDay={idOfDay} 
        flag={flag} 
        setValue={setValue}
        date={date}
      />
      <EditPresentAndFutureTasksButton 
      getFlag={getFlag} 
      flagTasksEditButton={flagTasksEditButton}/>
      </div>
  }

  if (flag === true && 
     normalDate >= normalToday && 
     tasksThisDay && 
     flagTasksEditButton) {
    
        res = <div>
           <EditPresentAndFutureTasksButton 
            getFlag={getFlag} 
            flagTasksEditButton={flagTasksEditButton}/>
          </div>
  }  
      
  if (flag === true && 
      normalDate >= normalToday && 
      !tasksThisDay) {
      
        res = <div>
          <AddButton
          setId={setId} 
          idOfDay={idOfDay} 
          flag={flag} 
          setValue={setValue}
          date={date}
        />
        </div>
  } 
        
        
  if (flag === false && 
      normalDate >= normalToday) {
        res = <div>
                <InputTask 
                   setValue={setValue}/>
                <AddButton 
                  newTask={newTask} 
                  setTask={setTask}
                  setId={setId}
                  date={date}
                  />
             </div>
  } if ( normalDate < normalToday &&
         tasksThisDay) {
           res = <EditPastTasksButton
                 getFlag={getFlag} 
                flagTasksEditButton={flagTasksEditButton}/>
  }



  return <div className="add-panel">
      {res}
  </div>
}

export default AddPanel;