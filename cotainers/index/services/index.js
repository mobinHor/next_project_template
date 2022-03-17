import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './index.module.scss'
import ServiceCard from './_components/ServiceCard'


const cards = [
    {id : 0 , icon : '/service.png' , title : 'نام اشتراک اول' , price : '2000000' , period : 'یک ماهه' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
    {id : 1 , icon : '/service.png' , title : 'نام اشتراک دوم' , price : '3000000' , period : 'دو ماهه' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
    {id : 2 , icon : '/service.png' , title : 'نام اشتراک سوم' , price : '4000000' , period : 'سه ماهه' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
]

const index = () => {
  return (
    <div className={styles.container}>
        <h1 className='fs-2 weight-700'>سرویس های ما شامل چه چیزهایی میشن ؟</h1>
        <svg width="614" height="4" viewBox="0 0 614 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="614" y="4" width="614" height="4" rx="2" transform="rotate(-180 614 4)" fill="url(#paint0_linear_94_13)"/>
            <defs>
            <linearGradient id="paint0_linear_94_13" x1="614" y1="4" x2="1143.94" y2="12.387" gradientUnits="userSpaceOnUse">
            <stop offset="0.338542" stopColor="#996CF6"/>
            <stop offset="0.692708" stopColor="white"/>
            </linearGradient>
            </defs>
        </svg>
        <Grid className='mt-2' direction='row-reverse' justifyContent='center' container spacing={5}>
            {cards.map((card , index)=>(
                <Grid key={card.id} item xs={12} md={6} lg={4}>
                    <ServiceCard index={index} card={card}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default index