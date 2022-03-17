import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Commafy from '../../../../helpers/methods/utils/Commafy';
import CustomBtn from '@/components/utils/CustomBtn'
import SimplerBar from 'simplebar-react'

const ServiceCard = ({card , index}) => {

  const useStyles = makeStyles({
      root: {
        maxWidth: 300,
        boxShadow : '2px 2px 2px 2px rgba(209, 179, 244, 0.12)',
        border:'1px solid #EEEE',
        borderRadius:'5px',
        background : '#FDFDFF',
        color : '#616161',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 16,
        textAlign:'center'
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
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {card.title}
          </Typography>
          <div className='text-center mt-1'>
            <Image className='mx-auto' src={card.icon} alt="اشتراک" width={137} height={137}/>
          </div>
          <div className='color-primary' style={PriceStyle}>
            <span>تومان</span>
            <h3 className='text-purple fs-2 weight-100 text-center my-auto'>
              {Commafy(card.price)}
            </h3>
          </div>
          <p className='my-auto text-center'>{card.period}</p>
          <SimplerBar style={{height:'150px'}}>
            <p className='color-icon-grey text-right'>
              {card.text}
            </p>
          </SimplerBar>
        </CardContent>
        <CardActions style={{display:'flex' , justifyContent:'center' , padding:"1rem"}}>
          <CustomBtn style={{borderRadius:'6px'}} bgClass="secondary" text="افزودن به سبد خرید"/>                
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