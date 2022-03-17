import React from 'react'
import { TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';

const CustomTextField = ({label , ref , adornment , value , OnChange , name , ...rest}) => {

    const handleChange = (e)=>{
        OnChange(name , e.target.value)
    }

    return (
        <TextField 
            ref={ref}
            variant="outlined" 
            label={label}
            value={value}
            fullWidth
            onChange={handleChange}
            InputProps={
                adornment ? {
                    endAdornment: (
                    <InputAdornment position="end">
                        {adornment}
                    </InputAdornment>
                    ),
                }
                :
                null
            }
            {...rest}
        />
    )
}

export default CustomTextField