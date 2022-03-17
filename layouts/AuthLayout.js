import React from 'react'
import { Grid , Container, Fade } from '@material-ui/core'
import Image from 'next/image'
import Switch from '../components/utils/Switch'
import {useRouter} from 'next/router'
import Navbar from '../components/layout/Navbar'

const AuthLayout = ({children}) => {

    const Router = useRouter()

    const ChangeIsSignup = ()=>{
        if(Router.pathname==='/login'){
            Router.push('/signup')
        }else{
            Router.push('/login')
        }
    }

    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" style={{minHeight:'85vh' , maxWidth:'1000px'}}>
                <Grid className='mt-5' container justifyContent='space-between' alignItems='center'>
                    <Grid md={7} component={'div'} style={{ position: 'relative', width: '100%' , maxWidth: '400px', minHeight: '25vw' , maxHeight:'35vw' }} item>
                        <Image alt="" src={`${Router.pathname}.png`} layout='fill'/>
                    </Grid>
                    <Grid item md={5}>
                        <div style={ChildrenContainer}>
                            {/* <Image alt="" src="/logo.svg" width={60} height={60}/> */}
                            {Router.pathname!=='/reset_pass' && <Switch className="mt-3" OnChange={ChangeIsSignup} checked={Router.pathname==='/signup'} textLeft="ورود" textRight="عضویت"/>}
                            <Fade style={{width:'100%'}} in={true}>
                                <>
                                {children}
                                </>
                            </Fade>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const ChildrenContainer = {
    display : 'flex',
    width:'100%',
    alignItems : 'flex-end',
    flexDirection : 'column',
    gap : '1rem',
    maxWidth:'500px'
}

export default AuthLayout