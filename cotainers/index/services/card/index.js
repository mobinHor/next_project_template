import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CustomBtn from '@/components/utils/CustomBtn'

const ServiceCard = ({card , index}) => {

  const useStyles = makeStyles({
      root: {
        maxWidth: 380,
        boxShadow : '0px 0px 0px 0px rgba(209, 179, 244, 0.12)',
        borderRadius:'9px',
        background : '#FDFDFF',
        color : '#616161',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      pos: {
        marginBottom: 12,
      },
      MuiCardActions : {
        root : {
          background: 'red'
        }
      }
  });
    
  const classes = useStyles({index});

  return (
    <div style={{marginTop : index!==1 ? '30px' : 0}}>
      <Card className={classes.root}>
        <CardContent className='d-flex flex-column gap-1'>
          <p className='my-auto text-center fs-m-1 bg-grey mx-auto p-1 radius-6'>طرح 3</p>
          <p className='my-auto mt-2 text-center'>حداقل میزان سرمایه‌گذاری</p>
          <div className='color-third fs-m-1 weight-800' style={PriceStyle}>
            <h3 className='text-center my-auto'>
              {'+' + 2}
            </h3>
            <span>میلیارد تومان</span>
          </div>
          <p className='my-auto text-center'>کارمزد ثابت</p>
          <p className='my-auto text-center fs-m-1 weight-800'>1.5 درصد</p>
          <p className='my-auto text-center'>حداقل سود پیشبینی شده</p>
          <p className='my-auto text-center fs-m-1 weight-800'>25 درصد</p>
          <p className='my-auto text-center'>سهم سود مشارکتی</p>
          <p className='my-auto text-center fs-m-1 weight-800'>80% سرمایه‌گذار ، 20% سبدگردان</p>
        </CardContent>
        <CardActions style={{display:'flex' , justifyContent:'center' , padding:"1rem"}}>
          <CustomBtn style={{borderRadius:'6px'}} bgClass="primary" text="شروع سرمایه‌گذاری"/>                
        </CardActions>
      </Card>
    </div>
  )
}

const PriceStyle = {
  display : 'flex',
  gap:'0.5rem',
  alignItems:'center',
  justifyContent:'center'
}

export default ServiceCard