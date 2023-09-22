import React, { useState } from 'react'
import Accordian, { AccordianI } from './Accordian'
import { Divider, VerticalStack } from '@shopify/polaris'

interface AccordianGroupI {
  data: AccordianI[]
}


const AccordianGroup = ({ data }: AccordianGroupI) => {

  const [activeAccordian, setActiveAccordian] = useState(-1)

  return (
    <div className='inte-polaris-accordian-group'>
      <VerticalStack gap={'2'}>
        {
          data.map((item, index) => <>
            <Accordian {...item} open={index === activeAccordian} onChange={() => setActiveAccordian(prev => prev === index ? -1 : index)} />
            {
              (index !== data.length - 1) && <Divider />
            }
          </>)
        }
      </VerticalStack>
    </div>
  )
}

export default AccordianGroup