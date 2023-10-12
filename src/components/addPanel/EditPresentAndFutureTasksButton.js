import React from "react";

function EditPresentAndFutureTasksButton({
    getFlag,
    flagTasksEditButton}){

      let text;

      if (flagTasksEditButton) {
        text = 'сохранить' 
      } else {
        text = 'редактировать'
      }

    
    return <button 
       className = {!flagTasksEditButton ? "button-edit": "button-save"} 
       data-tooltip-id="tooltip"
       data-tooltip-content = {text}
       onClick={()=>getFlag()}>      
     </button>
}

export default EditPresentAndFutureTasksButton;