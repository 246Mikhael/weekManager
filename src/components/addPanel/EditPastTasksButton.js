import React from "react";

function EditPastTasksButton({
    getFlag,
    flagTasksEditButton}){

    return <button className="button-edit-past" onClick={()=>getFlag()}>
       {!flagTasksEditButton ? 'изменить': 'сохранить'}
        </button>
}

export default EditPastTasksButton;