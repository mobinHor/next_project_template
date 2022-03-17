import React from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@material-ui/core'
import styles from './index.module.scss'
const Spinner = dynamic(() => import('../Spinner'), { ssr: false })

const CustomBtn = (props) => {

    const {
        variant='contained',
        text,
        load=false,
        disabled=false,
        OnClick,
        fullWidth,
        bgClass='primary',
        prevent=true,
        style={borderRadius : '26px'}
    } = props

    const handleClick = (e)=>{
        if(prevent){
            e.preventDefault()
        }
        OnClick(e)
    }

    return (
        <Button 
            fullWidth={fullWidth} 
            className={styles[bgClass]} 
            onClick={handleClick} 
            style={style}
            disabled={disabled || load} 
            variant={variant}>
            {load ? 
                <Spinner />
                :
                text
            }
        </Button>
    )
}

export default CustomBtn