import React, { useRef, useState } from 'react'
import CustomTextField from '../../components/utils/inputs/CustomTextField'
import CustomBtn from '../../components/utils/CustomBtn'
 import PasswordInput from '../../components/utils/inputs/PasswordInput'
import { toast } from 'react-toastify'
import { GetCodeForResetPass } from '@/calls/Auth'
import { ResetPassword , Login } from '@/calls/Auth'
import { CheckDisable } from '../../helpers/methods/FormValidations/CheckDisable'
import { useRouter } from 'next/router'
import styles from '../signup/index.module.scss'
import StoreToken from '../../helpers/methods/auth/StoreToken'

const ResetPassContainer = () => {

  const PassRef = useRef(null)

  const Router = useRouter()

  const [form , setForm] = useState({
    email : '',
    code : '',
    password : '',
  })
  
  const OnChange = (name , value)=>{
    setForm({
      ...form,
      [name] : value
    })
  }

  const handleGetCode = ()=>{
    GetCodeForResetPass(form.email)
    .then(res=>{
      toast.success(<p>کد به ایمیل {form.email} ارسال شد</p>)
    })
    .catch(err=>{
      toast.error(<p>متاسفانه نتونستیم به این آدرس ایمیل ارسال کنیم</p>)
    })
  }
  
  const handleRessetPass = (e)=>{
    e.preventDefault()
    if(PassRef?.current?.strength===false){
      toast.warn(<p>لطفا رمز بهتری برای خودت انتخاب کن</p>)
      return
    }
    ResetPassword(form)
    .then(res=>{
      toast.success(<p>تغییر رمز عبور با موفقیت انجام شد</p>)
      handleLogin(form)
    })
    .catch(err=>{
      toast.error(<p>فکر کنم کد اشتباه وارد شده ، دوباره امتحان کن</p>)
    })
  }

  const handleLogin = (form)=>{
    Login(form)
    .then(res=>{
      toast.success(<p>خوش آمدید</p>)
      Router.push('/dashboard')
      StoreToken(res.data.token)
      setForm({
        email : '',
        password : '',
      })
    })
    .catch(err=>{
      toast.error(<p>نام کاربری یا رمز عبور اشتباه است</p>)
    })
  }
  

  return (
    <>
      <h1 style={{fontSize:'1.5rem'}} className='color-primary weight-400 text-right mb-3'>بازیابی رمز عبور</h1>
      <form onSubmit={handleRessetPass} className={styles.container}>
          <CustomTextField 
            OnChange={OnChange} 
            value={form.email} 
            name="email" 
            label="ایمیل" 
            adornment={<CustomBtn bgClass="secondary" OnClick={handleGetCode} disabled={form.email===''} text="دریافت کد"/>}
          />
          <CustomTextField 
            label="کد"
            OnChange={OnChange} 
            value={form.code} 
            name="code" 
          />
          <PasswordInput
            label="رمز عبور جدید"
            ref={PassRef} 
            hasStrengthValidation
            OnChange={OnChange} 
            value={form.password} 
            name="password" 
          />
          <CustomBtn 
            disabled={CheckDisable(form)}
            OnClick={handleRessetPass} 
            bgClass="primary" 
            text="بازیابی رمز عبور"
          />
      </form>
    </>
  )
}

export default ResetPassContainer