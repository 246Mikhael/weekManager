import React from "react";

function CurrentWeekButton({currentWeek}) {

    return <button className="week-button" id="current-week-button" 
                   onClick={()=>currentWeek()}>текущая неделя</button>
}

export default CurrentWeekButton;