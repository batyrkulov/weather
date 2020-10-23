import React from 'react'
import styled from 'styled-components'
import {getIconUrl} from '../helper'

const Day = ({day, setSelectedDayIndex, dayIndex, selectedDayIndex}) => {
  const primary = dayIndex === selectedDayIndex
  return <StyledDiv primary={primary} onClick={()=>{setSelectedDayIndex(dayIndex)}}>
    <div>{day.dt_txt.split(' ')[0]}</div>
    <div><img src={getIconUrl(day.weather[0].icon)} /></div>
    <div>{day.main.temp.toFixed()}</div>
  </StyledDiv>
}

const StyledDiv = styled.div`
  border: 1px solid #878787;
  color: ${props=> props.primary && 'green'};
  background-color: ${props=> props.primary && '#eff0f1'};
  text-align: center;
  border-radius: 15px;
  padding: 10px 0px;
`

export default Day