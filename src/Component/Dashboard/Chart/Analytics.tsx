import { LegacyCard } from '@shopify/polaris'
import React from 'react'
import BarChart from './BarChart'

const Analytics = () => {

  const chartData = [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3];
  const chartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <LegacyCard title={"Analytics"} actions={[{content : "Yearly"}]}>
      <LegacyCard.Section>
      <BarChart
        data={chartData}
        labels={chartLabels}
      />
      </LegacyCard.Section>
    </LegacyCard>
  )
}

export default Analytics