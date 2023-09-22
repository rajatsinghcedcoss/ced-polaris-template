import React from 'react'
import AccordianGroup from '../../Utility/Accordian/AccordianGroup'
import { LegacyCard, Text } from '@shopify/polaris'

const Support = () => {

  return (
    <LegacyCard title="Support">
        <LegacyCard.Section>
        <AccordianGroup
			data={[
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
				},
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
				},
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
				},
			]}
		/>
        </LegacyCard.Section>
    </LegacyCard>
  )
}

export default Support