import React from 'react'
import {weatherAPI} from '../api'
import styled from 'styled-components'
import Current from './Current'
import Days from './Days'

export default class Info extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      weatherData: false,
      selectedDayIndex: 0
    }
  }

  setSelectedDayIndex = index => this.setState({selectedDayIndex: index})
  
  componentDidUpdate = async (prevProps) => {
    if (this.props.selectedCity!=='' && prevProps.selectedCity!==this.props.selectedCity) {
      let data = await weatherAPI.getWeather(this.props.selectedCity)
      this.setState({weatherData: data})
    }
  }

  render() {
    const {selectedCity} = this.props
    const {weatherData} = this.state

    if (!weatherData) return <>Select a city</>
    const currentDayWeather = weatherData[this.state.selectedDayIndex]

    return <StyledInfo>
      <Current 
        date = {currentDayWeather.dt_txt} 
        temp = {currentDayWeather.main.temp}
        feelsLike = {currentDayWeather.main.feels_like}
        icon = {currentDayWeather.weather[0].icon} 
        des = {currentDayWeather.weather[0].description} 
      />
      <Days days={weatherData} selectedDayIndex={this.state.selectedDayIndex} setSelectedDayIndex={this.setSelectedDayIndex}/>
    </StyledInfo>
  }
}


const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`