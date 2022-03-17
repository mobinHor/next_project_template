import React , {useEffect} from 'react'
import { GetUserInfo } from '../_api/calls/Auth'
import { StoreUserInfoRedux } from '../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';
import styles from './DashLayout.module.scss'
import SimpleBar from 'simplebar-react';
import DashSideBar from '../components/layout/DashSidebar';
import DashTopBar from '../components/layout/DashTopBar';

const DashLayout = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        GetUserInfo()
        .then(res=>{
            dispatch(StoreUserInfoRedux(res.data.user_info))
        })
        .catch(res=>{
            // TODO : redirect to login page
        })
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SimpleBar style={{maxHeight:'100vh'}}>
                    <DashSideBar />
                </SimpleBar>
            </div>
            <div className={styles.main}>
                <SimpleBar style={{maxHeight:'100vh'}}>
                    <DashTopBar />
                    <div style={{height:'150vh'}}>
                        p
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}

export default DashLayout