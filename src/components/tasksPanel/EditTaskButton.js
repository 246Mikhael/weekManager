import React from "react";

function EditTaskButton({
  editTask, 
  changeIsEdit, 
  id, 
  date, 
  isEdit, 
  valueOfInput,
  setVisibleAdd}){

   let obj = {id: id, date: date, value: valueOfInput};
  
    return <button className="edit-button" onClick={()=>{
        if(isEdit){
          setVisibleAdd()
          changeIsEdit()
          console.log('!!!')
        } else{
          console.log(obj)
          editTask(obj)
          setVisibleAdd()
          changeIsEdit() 
        }
    }}></button>
}

export default EditTaskButton;