import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'


const cards = [
    {id : 0 , icon : '/utils/telegram.png' , title : 'سرویس های مربوط به تلگرام' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
    {id : 1 , icon : '/utils/instagram.png' , title : 'سرویس های مربوط به اینستاگرام' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
    {id : 2 , icon : '/utils/telegram.png' , title : 'بات های تلگرامی' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
    {id : 3 , icon : '/utils/instagram.png' , title : 'بات های اینستاگرامی' , text : 'لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم'},
]


const CatElement = ({card})=>(
    <div className={styles.card}>
        <Image src={card.icon} alt="" width={'90px'} height={'90px'}/>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
    </div>
)

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
        <Grid justifyContent='center' container>
            {cards.map(card=>(
                <Grid key={card.id} item xs={12} lg={5}>
                    <CatElement card={card}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default index