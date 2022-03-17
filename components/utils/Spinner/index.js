import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = ({size=25 , color="light"}) => {
  return (
    <CircularProgress color={color} size={size}/>
  )
}

export default Spinner