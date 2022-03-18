import React,{useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import styles from './index.module.scss'

const MyAccordion = withStyles({
    root: {
      margin : '1rem 0',
      boxShadow: 'none',
      backgroundColor : '#fff',
      borderRadius : '9px',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
      margin : 0,
      marginBottom: -1,
    },
    content : {
        margin : 0,
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const Accordion = ({
    data=[],
    SummaryTemplate,
    DetailsTemplate,
}) => {

    const [expanded , setExpanded] = useState(false)

    const handleChange = (panel) => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
    <div>
        {data.map((d , i)=>(
            <MyAccordion key={i} square expanded={expanded === i} onChange={handleChange(i)}>
                <AccordionSummary style={{margin:'0'}}>
                    <div style={{width:'100%'}} className="d-flex justify-between align-center px-3">
                        {SummaryTemplate(d)}
                        <svg className={
                            styles.expandIcon 
                            + ' '
                            + (expanded===i ? styles.active : '')
                        } 
                            width="15" height="10" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9999 10.9999C10.6494 11.0006 10.3098 10.8785 10.0399 10.6549L1.03993 3.15492C0.7336 2.90032 0.540964 2.53445 0.504394 2.13781C0.467825 1.74117 0.590317 1.34625 0.844925 1.03992C1.09953 0.7336 1.4654 0.540964 1.86204 0.504394C2.25868 0.467825 2.6536 0.590317 2.95992 0.844924L10.9999 7.56492L19.0399 1.08493C19.1934 0.960327 19.3699 0.867279 19.5594 0.811131C19.7489 0.754984 19.9477 0.736843 20.1442 0.757752C20.3407 0.778661 20.5312 0.838206 20.7047 0.932967C20.8781 1.02773 21.0311 1.15583 21.1549 1.30992C21.2923 1.46416 21.3963 1.6451 21.4605 1.84141C21.5247 2.03772 21.5477 2.24517 21.528 2.45076C21.5082 2.65636 21.4463 2.85567 21.346 3.0362C21.2456 3.21674 21.1091 3.37461 20.9449 3.49992L11.9449 10.7449C11.6673 10.9332 11.3346 11.023 10.9999 10.9999V10.9999Z" fill="#7F8186"/>
                        </svg>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='px-3'>
                        {DetailsTemplate(d)}
                    </div>
                </AccordionDetails>
            </MyAccordion>
        ))}
    </div>
    )
}

export default Accordion