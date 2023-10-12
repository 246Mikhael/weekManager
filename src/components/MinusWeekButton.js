import React from "react";

function MinusWeekButton({decrease}) {


    return <button
            className="week-button" 
            id="minus-week-button" 
            onClick={()=>decrease()}>
                прошлая неделя
         </button>
}

export default MinusWeekButton;