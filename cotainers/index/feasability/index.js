import React from 'react'
import { Grid } from '@material-ui/core'
import CustomBtn from '@/components/utils/CustomBtn'

const index = () => {
  return (
    <Grid className='p-4' container justifyContent="space-between" alignItems="flex-start">
        <Grid className='text-center' item xs={6}>
            <svg width="397" height="397" viewBox="0 0 397 397" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M377.15 0H19.85C8.88715 0 0 8.88715 0 19.85V377.15C0 388.113 8.88715 397 19.85 397H377.15C388.113 397 397 388.113 397 377.15V19.85C397 8.88715 388.113 0 377.15 0Z" fill="#DEE7EE"/>
                <path d="M357.3 19.85H39.7001C28.7372 19.85 19.8501 28.7371 19.8501 39.7V357.3C19.8501 368.263 28.7372 377.15 39.7001 377.15H357.3C368.263 377.15 377.15 368.263 377.15 357.3V39.7C377.15 28.7371 368.263 19.85 357.3 19.85Z" fill="#B8C5D0"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M69.4751 267.975C69.4751 267.975 144.98 34.7375 223.313 267.975C223.313 267.975 274.997 163.763 332.488 267.975H69.4751ZM243.163 133.988C251.385 133.988 258.05 140.653 258.05 148.875C258.05 157.097 251.385 163.763 243.163 163.763C234.94 163.763 228.275 157.097 228.275 148.875C228.275 140.653 234.94 133.988 243.163 133.988Z" fill="#89969F"/>
            </svg>
        </Grid>
        <Grid item xs={6}>
            <div>
                <h1 className='fs-md-2'>سنجش آنلاین ریسک‌ پذیری</h1>
                <h2 className='fs-md-1 weight-400 color-semi-dark my-auto'>برای دریافت  مشاره سبدگردانی ، کافیست طرح موردنظر خود را انتخاب کنید تا مشاوران سرمایه‌گذاری ما با شما تماس بگیرند</h2>
                <CustomBtn style={{borderRadius:'6px' , marginTop:'2rem'}} bgClass="primary" text="سنجش ریسک‌ پذیری"/>                
            </div>
        </Grid>
    </Grid>
  )
}

export default index