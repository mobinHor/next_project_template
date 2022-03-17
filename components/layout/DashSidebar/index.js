import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import NavLink from './_components/NavLink'
import {links} from './_constants/Links'
import SimpleBar from 'simplebar-react'
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('./_components/Card'));

const DashSideBar = () => {

  return (
      <SimpleBar>
        <div className={styles.container}>
            <div className='px-2 mt-1'>
                <Image alt="" src="/logo.svg" width={40} height={40}/>
            </div>
            <div className={styles.links}>
                {links.map(link=>(
                    <NavLink 
                        key={link.url} 
                        title={link.title} 
                        url={link.url} 
                        icon={link.icon}
                    />
                ))}
            </div>
            <Card />
        </div>
      </SimpleBar>
  )
}

export default DashSideBar