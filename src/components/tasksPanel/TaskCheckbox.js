import React, {useState} from "react";
import ChangeTaskInput from "./ChangeTaskInput";
import DeleteTaskButton from './DeleteTaskButton'
import EditTaskButton from './EditTaskButton'



function TaskCheckBox({value,id, date, isChecked, changeCheck,
  deleteTask, editTask, setVisibleAdd,flagTasksEditButton,deleteEmptyDay,tasksFromStore}){

    const [valueOfInput, setValueOfInput] = useState(value);
    const [isEdit, setIsEdit] = useState(true);

   const style = {
      width: '168px',
      fontSize: '18px' 
    }
   
    function changeHandler(value){
      setValueOfInput(value)
    }

    function changeIsEdit(){
      setIsEdit(!isEdit)
    }
    console.log(isEdit)
    
    let res;


    if(isEdit && flagTasksEditButton){
      res = <div>
        <label>
         <EditTaskButton 
          isEdit={isEdit}
          changeIsEdit={changeIsEdit}
          setVisibleAdd={setVisibleAdd}
          /> 
        <DeleteTaskButton 
           deleteTask={deleteTask} 
           date={date} 
           id={id}
           deleteEmptyDay={deleteEmptyDay}
           tasksFromStore={tasksFromStore}/>

           <input type="checkbox" className="checkbox"
          onChange={()=>{changeCheck(obj)}} checked={isChecked} />
       {value}   
    </label>
          
      </div>
    } if(!isEdit && flagTasksEditButton) {
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
          changeHandler={changeHandler}
          style={style}/>
      </div>
    } if(!flagTasksEditButton) {
      res = <label>
               <input type="checkbox" className="checkbox"
                      onChange={()=>{changeCheck(obj)}} checked={isChecked} />
                     {value}   
               </label>
    }
  
    
    const obj = {id: id, date: date};
  
    return <div>
      {res}  
  </div>
}

export default TaskCheckBox;