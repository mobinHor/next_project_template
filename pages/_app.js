import {useState , useEffect} from 'react'
import Head from 'next/head';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer , Slide } from 'react-toastify';
import { theme , jss } from '../helpers/constants/Theme';
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { wrapper } from '../Redux/Store.ts';
import {useRouter} from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress';
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import 'simplebar/dist/simplebar.min.css';

const MyApp = ({ Component, pageProps }) => {

    const Router = useRouter()

    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        Router.events.on('routeChangeStart', ()=>setLoading(true));
        Router.events.on('routeChangeComplete', ()=>setLoading(false));
        Router.events.on('routeChangeError', ()=>setLoading(false));
    },[Router])

  return(
      <div>
          <Head>
              <title>ProgramLife</title>
          </Head>
          <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <ToastContainer
                    position='top-center'
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    transition={Slide}
                />
                {loading && <LinearProgress />}
                {Component.PageLayout ?
                    <div style={{ minHeight: '550px' }}>
                        <Component.PageLayout>
                            <Component {...pageProps} />
                        </Component.PageLayout>
                    </div>
                    :
                    <div style={{ minHeight: '550px' }}>
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </div>
                }
            </ThemeProvider>
          </StylesProvider>
      </div>
  )
}

export default wrapper.withRedux(MyApp)
