import React from 'react'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const Navbar = () => {

    const links = [
        {id : 4 , text : 'ورود / ثبت نام' , url:'/login'},
        {id : 1 , text : 'صفحه اصلی' , url:'/'},
        {id : 2 , text : 'صفحه اصلی' , url:'/'},
        {id : 3 , text : 'صفحه اصلی' , url:'/'},
    ]

  return (
    <Grid className={styles.container} justifyContent="flex-end" alignItems='center' container spacing={5}>
        {links.map(l=>(
            <Grid key={l.id} item>
                <Link href={l.url}>
                    <a className={styles.navLink}>
                        {l.text}
                    </a>
                </Link>
            </Grid>
        ))}
        <Grid item>
            <Image alt="" src="/logo.svg" width={40} height={40}/>
        </Grid>
    </Grid>
  )
}

export default Navbar