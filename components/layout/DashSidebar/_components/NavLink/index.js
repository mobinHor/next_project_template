import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({title , icon , url}) => {

  const Router = useRouter()

  const checkIfActive = (url)=>{
    return Router.pathname.includes(url)
  }

  return (
    <Link style={{width:'100%'}} href={url}>
      <a className={`${styles.link} ${checkIfActive(url) ? styles.activeLink : ''}`}>
        {icon}
        <h1>{title}</h1>
      </a>
    </Link>
  )
}

export default NavLink