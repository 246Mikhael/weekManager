import React from "react";

function PlusWeekButton({increase, numberOfWeek}){
    
    return <button className="week-button" id="plus-week-button" 
    onClick={()=>{increase()}}>следующая неделя</button>
}

export default PlusWeekButton;