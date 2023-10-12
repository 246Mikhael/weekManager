import React from "react";

function EditPastTasksButton({
    getFlag,
    flagTasksEditButton}) {

        let text;

      if (flagTasksEditButton) {
        text = 'сохранить' 
      } else {
        text = 'редактировать'
      }
    

    return <button 
                className = {!flagTasksEditButton ? "button-edit-past": "button-save-past"}
                data-tooltip-id="tooltip"
                data-tooltip-content = {text}
                onClick={()=>getFlag()}>
           </button>
}

export default EditPastTasksButton;