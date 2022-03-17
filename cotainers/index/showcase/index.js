import React from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import CustomBtn from '../../../components/utils/CustomBtn'
import styles from './index.module.scss'
import { Hidden } from '@material-ui/core'
import {connect} from 'react-redux'
import {TestToggle} from '../../../Redux/Actions/GlobalActions'

const Showcase = ({TestToggle}) => {
  return (
      <>
        <Hidden smDown>
            <Grid className='mt-5' justifyContent='space-between' alignItems='center' container>
                <Grid component={'div'} style={{ position: 'relative', width: '100%', maxWidth:'50vw' , minHeight: '30vw' }} md={7} item lg={7}>
                    <Image alt="" src='/showcase.png' layout="fill" />
                </Grid>
                <Grid xs={12} item lg={5} md={5}>
                    <Grid className={styles.container} container direction='column' alignItems='flex-end' spacing={5}>
                        <Grid className={styles.heading} component='h1' item>
                            لورم ایپسوم متن ساختنگی
                        </Grid>
                        <Grid className={styles.info} component='p' item>
                            لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی
                        </Grid>
                        <Grid item>
                            <CustomBtn bgClass="secondary" OnClick={()=>TestToggle('here')} text="لورم ایپسوم"/>                
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
        <Hidden mdUp>
            <Grid className='mt-5' justifyContent='center' alignItems='center' container>
                <Grid item component={'div'} style={{ position: 'relative', width: '100%', minHeight: '40vw' }} xs={12}>
                    <Image alt=""  src='/showcase.png' layout="fill" />
                </Grid>
                <Grid item xs={12}>
                    <Grid className={styles.container} container direction='column' justifyContent='center' alignItems='center'>
                        <Grid className={styles.heading} component='h1' item>
                            لورم ایپسوم متن ساختنگی
                        </Grid>
                        <Grid className={styles.info + ' mt-3'} component='p' item>
                            لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی لورم ایپسوم متن ساختنگی
                        </Grid>
                        <Grid item className='mt-3'>
                            <CustomBtn bgClass="secondary" text="لورم ایپسوم"/>                
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
      </>
  )
}

export default connect(null , {TestToggle})(Showcase)