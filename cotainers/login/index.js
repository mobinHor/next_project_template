import React, { useState } from 'react'
import CustomTextField from '../../components/utils/inputs/CustomTextField'
import CustomBtn from '../../components/utils/CustomBtn'
import styles from './index.module.scss'
import PasswordInput from '../../components/utils/inputs/PasswordInput'
import { CheckDisable } from '../../helpers/methods/FormValidations/CheckDisable'
import { Login } from '../../_api/calls/Auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Link from 'next/link'
import StoreToken from '../../helpers/methods/auth/StoreToken'

const LoginContainer = () => {

  const Router = useRouter()

  const [load , setLoad] = useState(false)
  const [form , setForm] = useState({
    email : '',
    password : '',
  })

  const OnChange = (name , value)=>{
    setForm({
      ...form,
      [name] : value
    })
  }

  const handleLogin = (e)=>{
    setLoad(true)
    e.preventDefault()
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
      console.log(err)
      toast.error(<p>نام کاربری یا رمز عبور اشتباه است</p>)
    })
    .finally(()=>{
      setLoad(false)
    })
  }

  return (
    <form onSubmit={handleLogin} className={styles.container}>
        <CustomTextField 
          value={form.email}
          name="email"
          OnChange={OnChange}
          label="ایمیل"
        />
        <PasswordInput 
          value={form.password}
          name="password"
          OnChange={OnChange}
        />
        <Link href={'/reset_pass'}>
          <a>
            <p style={{marginTop:'-1rem'}} className='text-right fs-0 color-secondary'>بازیابی رمز عبور</p>
          </a>
        </Link>
        <CustomBtn 
          OnClick={handleLogin} 
          disabled={CheckDisable(form)}
          load={load}
          bgClass="primary" 
          text="ورود"
        />
    </form>
  )
}

export default LoginContainer