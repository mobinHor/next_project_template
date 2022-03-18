import React from 'react'
import Accordion from '@/components/utils/Accordion'

const index = () => {

  const faqs = [
    { title : 'سبد گردانی چیست ؟' , text : 'سبد گردانی چیز خوبی است'},
    { title : 'سبد گردانی چیست ؟' , text : 'سبد گردانی چیز خوبی است'},
    { title : 'سبد گردانی چیست ؟' , text : 'سبد گردانی چیز خوبی است'},
    { title : 'سبد گردانی چیست ؟' , text : 'سبد گردانی چیز خوبی است'},
  ]

  const SummaryTemplate = (el) => (
    <h2 className="fs-md-1">{el.title}</h2>
  )
  const DetailsTemplate = (el) => (
    <h2 className="fs-1 weight-500 color-semi-dark mb-1 mt-0">{el.text}</h2>
  )


  return (
    <div className='bg-grey p-4'>
        <h1 className='text-center'>سوالات متداول</h1>
        <div style={{maxWidth:'1100px'}} className='mt-4 mx-auto'>
          <Accordion
            data={faqs}
            SummaryTemplate={SummaryTemplate}
            DetailsTemplate={DetailsTemplate}
          />
        </div>
    </div>
  )
}

export default index