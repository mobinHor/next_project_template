import React from 'react'
import styles from './index.module.scss'

const Switch = ({textRight , textLeft , checked , OnChange , name , ...rest}) => {

    const handleOnChange = ()=>{
        OnChange(name , !checked)
    }

    return (
        <div {...rest}>
            <div onClick={handleOnChange} className={styles.container}>
                <div style={{color : !checked ? '#fff' : ''}} className={styles.option}>{textLeft}</div>
                <div style={{color : checked ? '#fff' : ''}} className={styles.option}>{textRight}</div>
                <div style={{right : checked ? "0" : "50%"}} className={styles.toggler}></div>
            </div>
        </div>
    )
}

export default Switch