import React from 'react'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import CustomBtn from '@/components/utils/CustomBtn'
import styles from './Navbar.module.scss'

const Navbar = () => {

  return (
    <Grid className={styles.container} container justifyContent='space-between' alignItems="center">
        <Grid item>
            <Image alt="سبدگردانی آریل" width={60} height={50} src="/logo.png"/>
        </Grid>
        <Grid item>
            <Grid container spacing={1}>
                <Grid item>
                    <CustomBtn style={{borderRadius:'6px'}} bgClass="solid" text="معرفی طرح‌های سبدگردانی"/>                
                </Grid>
                <Grid item>
                    <CustomBtn style={{borderRadius:'6px'}} bgClass="primary" text="دریافت مشاوره رایگان"/>                
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Navbar