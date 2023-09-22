import { LegacyCard, LegacyStack, Text, Thumbnail, VerticalStack } from '@shopify/polaris'
import product from '../../assets/product.png'
import React from 'react'

const TopSellingProducts = () => {
  return (
    <LegacyCard
      title={"Top Selling Products"}
    >
      <LegacyCard.Section>
        <VerticalStack gap={"3"}>
          {
            Array(6).fill(0).map(i => {
              return <LegacyStack spacing='loose'>
                <Thumbnail alt="product" source={product} />
                <VerticalStack gap={'1'}>
                  <Text as="h6" variant='bodyMd' fontWeight='medium'>1ZPRESSO | J-MAX Manual Coffee Grinder</Text>
                  <Text as="dd" variant='bodySm'>Listing ID : 12345678</Text>
                  <Text as="dd" variant='bodySm' color='subdued'>Ordered 200 times in the last month</Text>
                </VerticalStack>
              </LegacyStack>
            })
          }
        </VerticalStack>
      </LegacyCard.Section>
    </LegacyCard>
  )
}

export default TopSellingProducts