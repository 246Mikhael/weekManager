import React from "react";

function EditTaskButton({
  editTask, 
  changeIsEdit, 
  id, 
  date, 
  isEdit, 
  valueOfInput,
  setVisibleAdd}){

   let obj = {id: id, 
              date: date, 
              value: valueOfInput
            };

   let text;

    if (isEdit) {
      text = 'редактировать' 
    } else {
      text = 'сохранить'
    }
  
    return <button 
      className={!isEdit ? "save-button" : "edit-button" }

      data-tooltip-id="tooltip"
      data-tooltip-content = {text}

      onClick={()=>{
        if (isEdit) {
          setVisibleAdd()
          changeIsEdit()
        } else {
          editTask(obj)
          setVisibleAdd()
          changeIsEdit() 
        }
    }}></button>
}

export default EditTaskButton;