import { Grid } from '@material-ui/core'
import React from 'react'

const index = () => {

    const data = [
        {value : "10000+" , sub : 'سرمایه گذار'},
        {value : '30000+' , sub : 'میلیارد ریال دارایی تحت مدیریت'},
        {value : '60+' , sub : 'شعبه در سراسر کشور'},
    ]

  return (
    <Grid className='p-4 bg-extra-grey' container>
        {data.map((d , i)=>(
            <Grid key={i} item lg={4}>
                <div className='d-flex weight-700 align-center flex-column gap-1'>
                    <p className='my-auto'>{d.value}</p>
                    <p className='color-semi-dark my-auto weight-500'>{d.sub}</p>
                </div>
            </Grid>
        ))}
    </Grid>
  )
}

export default index