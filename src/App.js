import React from 'react'
import Info from './cmps/Info'
import Select from './cmps/Select'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCity: ''
    }
  }

  setSelectedCity = city => this.setState({ selectedCity: city })


  render() {
    return <MainStyle>
      <Helmet>
        <title>Nagima Weather</title>
      </Helmet>
      <Select setSelectedCity={this.setSelectedCity} />
      <Info selectedCity={this.state.selectedCity} />
    </MainStyle>
  }
}


const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 12%;
`

export default App
