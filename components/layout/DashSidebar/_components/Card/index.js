import React from 'react'
import styles from './index.module.scss'
import CustomBtn from '@/components/utils/CustomBtn'

const Card = () => {
  return (
    <div className={styles.container}>
        <img className={styles.img} src="/sidebar.png" alt=""/>
        <h2>لورم ایپسوم متن ساختگی</h2>
        <CustomBtn style={{borderRadius:'6px'}} bgClass="secondary" text="ثبت سفارش جدید"/>                
    </div>
  )
}

export default Card