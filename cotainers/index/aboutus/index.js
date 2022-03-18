import React from 'react'
import { Grid } from '@material-ui/core'

const index = () => {
  return (
    <Grid className='p-4 bg-light' container justifyContent="space-between">
        <Grid item xs={7}>
            <h1 className='fs-md-2'>بازدهی سبدگردانی نواندیشان</h1>
            <h2 className='mt-3 fs-md-1 weight-400 color-semi-dark'>
                سرمایه گذاری در بازار سرمایه بدون نیاز به صرف دانش و زمان
                سرمایه گذاری در بازار سرمایه بدون نیاز به صرف دانش و زمان
                سرمایه گذاری در بازار سرمایه بدون نیاز به صرف دانش و زمان
                سرمایه گذاری در بازار سرمایه بدون نیاز به صرف دانش و زمان
                سرمایه گذاری در بازار سرمایه بدون نیاز به صرف دانش و زمان
            </h2>
        </Grid>
        <Grid className='text-center' item xs={5}>
            <div className='d-flex flex-column justifyCenter alignCenter text-center'>
                <svg className='w-100' height="448" viewBox="0 0 451 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 447C1 447 399.561 361.7 446 2" stroke="#64C2CB" strokeWidth="2"/>
                    <path d="M1 447C1 447 399.561 361.7 446 2V447H1Z" fill="url(#paint0_linear_225_1732)"/>
                    <path d="M446.917 0L437 10.2L445.167 7.8L451 12L446.917 0Z" fill="#64C2CB"/>
                    <defs>
                    <linearGradient id="paint0_linear_225_1732" x1="106" y1="147" x2="428" y2="469" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#64C2CB"/>
                    <stop offset="1" stopColor="#64C2CB" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
                <small className='text-center fs-0'>بازده یک ساله</small>
            </div>
        </Grid>
    </Grid>
  )
}

export default index