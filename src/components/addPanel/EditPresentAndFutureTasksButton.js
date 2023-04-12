import React from "react";

function EditPresentAndFutureTasksButton({
    getFlag,
    flagTasksEditButton}){

    return <button className="buttons-add-edit" onClick={()=>getFlag()}>
       {!flagTasksEditButton ? 'изменить': 'сохранить'}
        </button>
}

export default EditPresentAndFutureTasksButton;