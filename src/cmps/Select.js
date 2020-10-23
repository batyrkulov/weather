import React, { useState } from 'react'
import Cities from '../cities'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const Search = ({setSelectedCity}) => {
  const classes = useStyles()
  const [val, setVal] = useState('select a city')

  const onSelect = e => {
    const value = e.target.value
    if (value!=='')  {
      setVal(value)
      setSelectedCity(value)
    }
  }

  return <StyledSelect>
    <FormControl  className={classes.formControl}>
        <InputLabel id="select-label">Cities</InputLabel>
        <Select
          labelId="select-label"
          id="city-select"
          value={val}
          onChange={onSelect}
        >
          {Cities.map(city=><MenuItem key={city} value={city}>{city}</MenuItem>)}
        </Select>
      </FormControl>
  </StyledSelect>
}

const StyledSelect = styled.div`
  
`

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default Search
