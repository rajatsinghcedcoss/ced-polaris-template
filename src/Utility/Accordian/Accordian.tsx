import { Button, Collapsible } from '@shopify/polaris'
import React, { useId, useState } from 'react'
import './Accordian.css'

export type AccordianI = {
  children: string | React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
  icon?: JSX.Element;
  title: string
} & (
    {
      open: boolean;
      onChange: () => void;
    } |
    {
      open?: undefined;
      onChange?: never;
    }
  );


const Accordian = ({ children, defaultOpen, id, open, onChange, icon, title }: AccordianI) => {
  const customId = useId()
  const [customOpen, setCustomOpen] = useState(defaultOpen ?? false)
  return (
    <div className={`inte-polaris-accordian ${open ? "inte-polaris-accordian--active" : ""}`}>
      <div className='inte-polaris-accordian__toggle'>
        <Button
          icon={icon ? icon : undefined}
          fullWidth
          onClick={onChange ? onChange : () => setCustomOpen(prev => !prev)}
          disclosure={open ?? customOpen ? 'up' : 'down'}
          textAlign="left"
        >
          {title}
        </Button>
      </div>
      <Collapsible
        open={open ?? customOpen}
        children={<div className='inte-polaris-accordian__body'>{children}</div>}
        id={id ?? customId}
      />
    </div>
  )
}

export default Accordian