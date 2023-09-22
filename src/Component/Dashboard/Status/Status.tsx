import { Card, HorizontalGrid, LegacyCard, LegacyStack } from '@shopify/polaris'
import React from 'react'
import StatusCard from './StatusCard/StatusCard'

const Status = () => {

  const cardArr1 = [
    {
      number: 10,
      title: "Live",
      desc: "Products",
      color: "green"
    },
    {
      number: 567,
      title: "Failed",
      desc: "Products",
      color: "red"
    },
    {
      number: 500,
      title: "Not Updated",
      desc: "Products",
      color: "yellow"
    },
    {
      number: 6000,
      title: "Inactive",
      desc: "Products",
      color: "black"
    },
  ]

  const cardArr2 = [
    {
      number: 600,
      title: "Awaiting Shipment",
      desc: "Orders",
      color: "yellow"
    },
    {
      number: 500,
      title: "Awaiting Collection",
      desc: "Orders",
      color: "black"
    },
    {
      number: 567,
      title: "Completed",
      desc: "Orders",
      color: "green"
    },
    {
      number: 0,
      title: "Cancelled",
      desc: "Orders",
      color: "red"
    },
  ]

  return (
    <LegacyCard>
      <LegacyCard.Section
        title="Product Status"
        actions={[{ content: "View All" }]}
      >
        <HorizontalGrid columns={4} gap={'5'}>
          {
            cardArr1.map(item => <StatusCard {...item} />)
          }
        </HorizontalGrid>
      </LegacyCard.Section>
      <LegacyCard.Section
        title="Order Status"
        actions={[{ content: "View All" }]}
      >
        <HorizontalGrid columns={4} gap={'5'}>
          {
            cardArr2.map(item => <StatusCard {...item} />)
          }
        </HorizontalGrid>
      </LegacyCard.Section>
    </LegacyCard>
  )
}

export default Status