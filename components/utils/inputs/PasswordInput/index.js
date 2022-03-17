import React, { useState , useRef, forwardRef, useImperativeHandle } from 'react'
import CustomTextField from '../CustomTextField'
import styles from './index.module.scss'
import {HasNumber} from '../../../../helpers/methods/FormValidations/HasNumber'
import {HasUpperCase} from '../../../../helpers/methods/FormValidations/HasUpperCase'

const PasswordInput = ({label='رمز عبور' , hasStrengthValidation=false , value , ...rest} , ref) => {

    const [show , setShow] = useState(false)

    const CheckStrength = ()=>{
        let checked = []
        if(HasUpperCase(value)){
            checked.push('UPPERCASE')
        }
        if(HasNumber(value)){
            checked.push('NUMBER')
        }
        if(value.length > 5){
            checked.push('LENGTH')
        }
        return checked
    }

    const CalcStrength = ()=>{
        let checked = CheckStrength()
        const color = (val)=>{
            switch (val) {
                case 0: return 'red'
                case 1: return 'red'
                case 2: return 'orange'
                case 3: return 'green'
                default: return 'inherit'
            }
        }
        const percent = (val)=>{
            switch (val) {
                case 0: return '0%'
                case 1: return '33%'
                case 2: return '66%'
                case 3: return '100%'
                default: return '0%'
            }
        }
        return {
            color : color(checked.length),
            percent : percent(checked.length)
        }
    }

    const RenderText = ()=>{
        let checked = CheckStrength()
        if(checked.indexOf('NUMBER') === -1){
            return <p>برای یه رمز قویتر به یک <span className='color-primary'>عدد</span> نیاز داریم</p>
        }
        if(checked.indexOf('UPPERCASE') === -1){
            return <p>فکر کنم فراموش کردی که یک <span className='color-primary'>حرف بزرگ</span> هم به کار ببری</p>
        }
        if(checked.indexOf('LENGTH') === -1){
            return <p>فکر نمیکنی یکم رمزت <span className='color-primary'>کوتاهه</span> !؟ </p>
        }
        return <p>عالی شد ، به این میگن یه رمز حسابی ، <span className='color-primary'>بزن بریم</span></p>
    }

    useImperativeHandle(ref , ()=>({
        strength : CheckStrength().length===3 ? true : false
    }))

    return (
        <div>
            <CustomTextField type={show ? 'text' : 'password'} label={label} {...rest}
                adornment={
                    <div className='pl-1' style={{cursor:'pointer'}} onClick={()=>setShow(!show)}>
                        {!show ?
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 11C0.5 5.15 5.15 0.5 11 0.5C16.85 0.5 21.5 5.15 21.5 11H20C20 6.05 15.95 2 11 2C6.05 2 2 6.05 2 11H0.5ZM6.5 11C6.5 8.45 8.45 6.5 11 6.5C13.55 6.5 15.5 8.45 15.5 11C15.5 13.55 13.55 15.5 11 15.5C8.45 15.5 6.5 13.55 6.5 11ZM8 11C8 12.65 9.35 14 11 14C12.65 14 14 12.65 14 11C14 9.35 12.65 8 11 8C9.35 8 8 9.35 8 11Z" fill="#9192FF"/>
                            </svg>
                            :
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 0C8.75 0 6.8 0.6 5.15 1.8L6.35 2.85C7.7 1.95 9.2 1.5 11 1.5C15.95 1.5 20 5.55 20 10.5H21.5C21.5 4.65 16.85 0 11 0ZM0.5 1.5L2.9 3.75C1.4 5.55 0.5 7.95 0.5 10.5H2C2 8.25 2.75 6.3 4.1 4.8L7.4 7.8C6.8 8.55 6.5 9.45 6.5 10.5C6.5 13.05 8.45 15 11 15C12.2 15 13.25 14.55 14 13.8L18.5 18L19.55 16.95L1.55 0.45L0.5 1.5ZM8.45 8.85L12.8 12.9C12.35 13.2 11.75 13.5 11 13.5C9.35 13.5 8 12.15 8 10.5C8 9.9 8.15 9.3 8.45 8.85ZM15.5 11.25L14 9.9C13.7 8.7 12.65 7.65 11.3 7.5L9.8 6.15C10.25 6 10.55 6 11 6C13.55 6 15.5 7.95 15.5 10.5V11.25Z" fill="#9192FF"/>
                            </svg>
                        }
                    </div>
                }
            />
            {hasStrengthValidation && 
                <div className={`${styles.validation} ${value!=='' && styles.showValidation}`}>
                    <div className={styles.validatorContainer}>
                        <div style={{width : CalcStrength().percent , background: CalcStrength().color}} className={styles.validator}></div>
                    </div>
                    {RenderText()}
                </div>
            }
        </div>
    )
}

export default forwardRef(PasswordInput)