import React, { useRef, useState } from 'react'
import CustomTextField from '../../components/utils/inputs/CustomTextField'
import CustomBtn from '../../components/utils/CustomBtn'
import styles from './index.module.scss'
import PasswordInput from '../../components/utils/inputs/PasswordInput'
import { toast } from 'react-toastify'
import { GetCode } from '@/calls/Auth'
import { SignUp , Login } from '@/calls/Auth'
import { CheckDisable } from '../../helpers/methods/FormValidations/CheckDisable'
import { useRouter } from 'next/router'
import StoreToken from '../../helpers/methods/auth/StoreToken'

const SignupContainer = () => {

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
    GetCode(form.email)
    .then(res=>{
      toast.success(<p>کد به ایمیل {form.email} ارسال شد</p>)
    })
    .catch(err=>{
      toast.error(<p>متاسفانه نتونستیم به این آدرس ایمیل ارسال کنیم</p>)
    })
  }
  
  const handleSignUp = (e)=>{
    e.preventDefault()
    if(PassRef?.current?.strength===false){
      toast.warn(<p>لطفا رمز بهتری برای خودت انتخاب کن</p>)
      return
    }
    SignUp(form)
    .then(res=>{
      toast.success(<p>ثبت نام با موفقیت انجام شد ، خوش اومدی</p>)
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
      StoreToken(res.data.token)
      Router.push('/dashboard')
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
    <form onSubmit={handleSignUp} className={styles.container}>
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
          ref={PassRef} 
          hasStrengthValidation
          OnChange={OnChange} 
          value={form.password} 
          name="password" 
        />
        <CustomBtn 
          disabled={CheckDisable(form)}
          OnClick={handleSignUp} 
          bgClass="primary" 
          text="عضویت"
        />
    </form>
  )
}

export default SignupContainer