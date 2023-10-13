import React, {useState} from "react";
import ChangeTaskInput from "./ChangeTaskInput";
import DeleteTaskButton from './DeleteTaskButton'
import EditTaskButton from './EditTaskButton'



function TaskCheckBox({ value,
                        id, 
                        date, 
                        isChecked, 
                        changeCheck,
                        deleteTask, 
                        editTask, 
                        setVisibleAdd,
                        flagTasksEditButton,
                        deleteEmptyDay,
                        tasksFromStore}) {

    const [valueOfInput, setValueOfInput] = useState(value);
    const [isEdit, setIsEdit] = useState(true);

  
   
    function changeHandler(value){
      setValueOfInput(value)
    }

    function changeIsEdit(){
      setIsEdit(!isEdit)
    }
    
    let res;


    if (isEdit && flagTasksEditButton) {
      res = <div>
        <DeleteTaskButton 
           deleteTask={deleteTask} 
           date={date} 
           id={id}
           deleteEmptyDay={deleteEmptyDay}
           tasksFromStore={tasksFromStore}/>
         <EditTaskButton 
          isEdit={isEdit}
          changeIsEdit={changeIsEdit}
          setVisibleAdd={setVisibleAdd}
          /> 
        

        <input type="checkbox" 
               className="checkbox"
               onChange={()=>{changeCheck(obj)}} checked={isChecked} />
       <label>
         {value}   
       </label>   
          
      </div>
    } if (!isEdit && flagTasksEditButton) {
      res = <div>
        <EditTaskButton 
          changeIsEdit={changeIsEdit}
          editTask={editTask} 
          date={date}  
          id={id}
          valueOfInput={valueOfInput}
          setVisibleAdd={setVisibleAdd}
          />
        <ChangeTaskInput 
          valueOfInput={valueOfInput}
          changeIsEdit={changeIsEdit}
          editTask={editTask} 
          date={date}  
          id={id}
          setVisibleAdd={setVisibleAdd} 
          changeHandler={changeHandler}/>
      </div>
    } if (!flagTasksEditButton) {
    
      let text;

    if (!isChecked) {
      text = 'пометить как выполненное' 
    } else {
      text = 'отменить пометку о выполнении'
    }

      res = <label>
               <input 
                      type="checkbox" 
                      className="checkbox"
                      data-tooltip-id="tooltip"
                      data-tooltip-content = {text}
                      onChange={()=>{changeCheck(obj)}} checked={isChecked} />
                     {value}   
               </label>
    }
  
    
    const obj = {id: id, 
                 date: date
                };
  
    return <div>
      {res}  
  </div>
}

export default TaskCheckBox;