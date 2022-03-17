import React from 'react'
import SignupContainer from '../../cotainers/signup'
import AuthLayout from '../../layouts/AuthLayout'

const Signup = () => {
  return (
    <>
        <SignupContainer />
    </>
  )
}

Signup.PageLayout = AuthLayout

export default Signup