import React from 'react'
import styled from 'styled-components'
import Day from './Day'

const Days = ({days, setSelectedDayIndex, selectedDayIndex}) => {
  return <StyledDiv>
    {days.map((day, index)=><Day selectedDayIndex={selectedDayIndex} key={day.dt.toString()} day={day} dayIndex={index} setSelectedDayIndex={setSelectedDayIndex}/>)}
  </StyledDiv>
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
`

export default Days