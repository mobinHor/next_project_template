import { Grid } from '@material-ui/core'
import React from 'react'
import ServiceCard from './card'

const index = () => {


  return (
    <div className='bg-grey p-4'>
        <h1 className='text-center fs-md-2'>طرح‌های سبدگردانی اختصاصی</h1>
        <h2 className='color-semi-dark text-center fs-md-1 weight-500'>
            برای دریافت مشاوره سبدگردانی ، کافیست طرح مورد نظر خود را انتخاب کنید <br/> 
            تا مشاوران سرمایه گذاری ما با شما تماس برقرار کنند.
        </h2>
        <Grid container spacing={1} justifyContent="center">
            {[1,2,3,4,5,6].map((m , i)=>(
                <Grid item lg={4} key={i}>
                    <ServiceCard key={i}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default index