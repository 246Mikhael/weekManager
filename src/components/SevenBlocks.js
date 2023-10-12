import React from "react"
import DayBlock from './DayBlock'
import { nanoid } from '@reduxjs/toolkit'
import MinusWeekButton from './MinusWeekButton'
import PlusWeekButton from './PlusWeekButton'
import CurrentWeekButton from './CurrentWeekButton'
import { Tooltip } from 'react-tooltip'


function SevenBlocks({numberOfWeek, 
                      increase, 
                      decrease, 
                      currentWeek}){


                        
  function id(){
    return nanoid();
  }
  const days = [
    {name:'пн',id: id()},
    {name:'вт',id: id()},
    {name:'ср',id: id()},
    {name:'чт',id: id()},
    {name:'пт',id: id()},
    {name:'сб',id: id()},
    {name:'вс',id: id()}
  ];
  
  
  function getCurrentDate(num){
    if(num === undefined){
      num = 0;
    } 
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day =(date.getDate() + num);

      return { year: year, 
               month: month,
              day: day
              }
  }

  let currentDate = getCurrentDate(numberOfWeek);
  
  function createDate({year, month, day}){
     
      let date1 = new Date(year, month, day);
      let currentDay = date1.getFullYear() +" " + date1.getMonth() + " " + date1.getDate();
      return currentDay;
  }
  
  
  function createAnotherDate({ year, month, day }, count){
     
    let date1 = new Date(year, month, day + count);
    let currentDay = date1.getFullYear() +" " + date1.getMonth() + " " + date1.getDate();
    return currentDay;
  }
  
  let currentDay = createDate(currentDate);
  let today = createDate(getCurrentDate(0));
     
  function findDayOfWeek(day){
    let days = ['вс','пн','вт','ср','чт','пт','сб'];
    let arr = day.split(' ');
    let date = new Date(...arr);

    return  days[date.getDay()];
  }
  
  function getOtherDaysOfWeekBefore(nameOfDay){

    let days = ['пн','вт','ср','чт','пт','сб','вс'];
    let index = days.indexOf(nameOfDay);

    if (index > 0) {
      let arr = [];
      
      for (let i = index-1; i >= 0; i--) {
          arr.push(days[i]);
        }
        return arr.reverse();
    } else {
      return [];
    }
  }
  
  function getOtherDaysOfWeekAfter(nameOfDay) {

    let days = ['пн','вт','ср','чт','пт','сб','вс'];
    let index = days.indexOf(nameOfDay);
    let arr = [];

    for (let i = index + 1; i < days.length; i++) {
        arr.push(days[i]);
      } return arr;
  }
    
  const arrOfDaysBefore = getOtherDaysOfWeekBefore(findDayOfWeek(currentDay));
  const arrOfDaysAfter = getOtherDaysOfWeekAfter(findDayOfWeek(currentDay));
  
  function AnotherDaysData(arrOfDays1, arrOfDays2, objOfCurrentDate,func){
    let arr = [];
  
    if (arrOfDays1.length) {

      for ( let i = 0; i <= arrOfDays1.length-1; i++) {
        arr.push({
          day: arrOfDays1[i], 
          date: func(objOfCurrentDate, - (arrOfDays1.length - i))
        })
        } 
      }
  
      for (let i = 0; i <= arrOfDays2.length-1; i++) {
        arr.push({
          day: arrOfDays2[i], 
          date: func(objOfCurrentDate, + (i + 1))
        })
      }
      return arr;
       
  }

  let dataOfDays = AnotherDaysData(
        arrOfDaysBefore,
        arrOfDaysAfter,
        currentDate,
        createAnotherDate
        )
    
  function compareDays(day1, day2) {
      if (day1 === day2) {
        return true;
      } else {
        return false;
       }
     }
  
  
  
  const res = days.map((item) => {
    return <DayBlock 
              key={item.id} 
              day={item.name} 
              idOfDay={item.id}
              compareDays={compareDays}
              findDayOfWeek={findDayOfWeek}
              currentDay={currentDay}
              today={today}
              getOtherDaysOfWeekBefore={getOtherDaysOfWeekBefore}
              dataOfDays={dataOfDays}
           />
  }) 
  return <>
  <Tooltip id="tooltip"/>
    <div className="seven-blocks">
      <div id="first-block">
        <div id="flag-first-block">ПЛАННЕР</div>
      </div>
      {res}
      <div className="change-weeks">
         <MinusWeekButton decrease={decrease}/>
         <CurrentWeekButton currentWeek={currentWeek}/>
         <PlusWeekButton increase={increase} numberOfWeek={numberOfWeek}/>
      </div>
    </div>
    
  </>
}

export default SevenBlocks;