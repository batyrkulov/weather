import React from 'react'
import styled from 'styled-components'
import {getIconUrl} from '../helper'

const Current = ({date, temp, feelsLike, icon, des}) => {
  return <StyledDiv>
    <div><img src={getIconUrl(icon, true)} align='left' /> <span style={{fontSize: 72}}>{temp.toFixed()}</span></div>
    <div style={{color: '#878787', fontSize: 21}}>
      <div>{date.split(' ')[0]}</div>
      <div>Feels like: {feelsLike.toFixed()}</div>
      <div>{des}</div>
    </div>
  </StyledDiv>
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
`

export default Current
