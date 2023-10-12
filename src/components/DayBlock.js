import React, {useState} from "react";
import ShowAddPanel from "../container/ShowAddPanel";
import ShowTasks from "../container/ShowTasks";


function DayBlock({
   day, 
   idOfDay,
   compareDays,
   findDayOfWeek,
   currentDay,
   dataOfDays,
   today,
   showAndHideTooltip
}){


   let currentDayOfWeek = findDayOfWeek(currentDay);

   function reverseDate(date) {

      let arr = date.split(' ');
      arr[1] = addZero(String(Number(arr[1]) + 1));
      addZero(arr[2])
      return arr.reverse().join('.');
   }

   function addZero(num) {
      if (num >= 0 && num <= 9){
         return '0' + num;
      } else {
         return num;
      }
   }

   let res;

   if (compareDays(day,currentDayOfWeek)) { 
     res =  currentDay
   } if (compareDays(day,dataOfDays[0].day)) {
      res = dataOfDays[0].date;
   } if (compareDays(day,dataOfDays[1].day)) {
      res = dataOfDays[1].date;
   } if (compareDays(day,dataOfDays[2].day)) {
      res = dataOfDays[2].date;
   } if (compareDays(day,dataOfDays[3].day)) {
      res = dataOfDays[3].date;
   } if (compareDays(day,dataOfDays[4].day)) {
      res = dataOfDays[4].date;
   } if (compareDays(day,dataOfDays[5].day)) {
      res = dataOfDays[5].date;
   } 



const[flag, setFlag] = useState(false);

function getFlag(){
   setFlag(!flag)
}

let style;

if (today === res) {
   style = {
      backgroundColor: "rgb(253, 155, 207)"
   }
}
 
  return  <div id={idOfDay} className="day-block"  >
      <div className="name-day-block" style={style}>
         {day} {reverseDate(res)}
      </div>
     
      <div className="task" >
         <ShowTasks date={res} today={today} flagTasksEditButton={flag}/>
      </div>
         <ShowAddPanel idOfDay={idOfDay}
                       date={res}
                       day={day}
                       today={today}
                       getFlag={getFlag}
                       flagTasksEditButton={flag}
                       showAndHideTooltip={showAndHideTooltip}/>
    </div>

}

export default DayBlock;