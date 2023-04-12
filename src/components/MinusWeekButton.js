import React from "react";

function MinusWeekButton({decrease}){


    return <button className="week-button" id="minus-week-button" 
    onClick={()=>decrease()}>предыдущая неделя</button>
}

export default MinusWeekButton;