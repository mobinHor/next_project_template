import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

const index = () => {
  return (
    <div className={styles.container}>
        <img className={styles.bg} alt="" src={`/wave.png`}/>
        <Grid className={styles.inside} container justifyContent='space-between' alignItems='center'>
            <Grid item xs={12} md={5} component={'div'} style={{ position: 'relative', width: '100%' , maxWidth: '400px', minHeight: '25vw' , maxHeight:'35vw' }}>
                <Image alt="" src={`/auth.png`} layout='fill'/>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={styles.right}>
                    <h1 className='fs-2 weight-200'>من یک دولوپر هستم</h1>
                    <svg width="352" height="4" viewBox="0 0 352 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="352" y="4" width="352" height="4" rx="2" transform="rotate(-180 352 4)" fill="url(#paint0_linear_94_54)"/>
                        <defs>
                        <linearGradient id="paint0_linear_94_54" x1="352" y1="4" x2="655.86" y2="6.75696" gradientUnits="userSpaceOnUse">
                        <stop offset="0.338542" stopColor="#996CF6"/>
                        <stop offset="0.692708" stopColor="#FAF9FE"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <p>من یک دولوپر هستم ، خوب به انم من یک دولوپر هستم ، خوب به انم من یک دولوپر هستم ، خوب به انم من یک دولوپر هستم ، خوب به انم من یک دولوپر هستم ، خوب به انم من یک دولوپر هستم ، خوب به انم</p>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default index