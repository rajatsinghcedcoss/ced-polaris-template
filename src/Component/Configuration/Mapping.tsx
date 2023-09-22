import { LegacyCard, LegacyStack, Select, Text } from '@shopify/polaris'
import React from 'react'

const Mapping = () => {
    return (
        <LegacyCard 
            primaryFooterAction={{
                content : "ADD"
            }}
            secondaryFooterActions={[
                {
                    content : "Sync Shopping Career Sync"
                }
            ]}
        >
            <LegacyCard.Header title='Shipping Carrier Mapping' />
            <LegacyCard.Section >
                <Text as='dd' color='subdued'>This setting will help streamline order fulfillment from the Shopify store to TikTok Shop.</Text>
            </LegacyCard.Section>
            <LegacyCard.Section>
                <LegacyStack distribution='fill'>
                    <Select label="label" placeholder='Select'></Select>
                    <Select label="label" placeholder='Select'></Select>
                </LegacyStack>
            </LegacyCard.Section>
        </LegacyCard>
    )
}

export default Mapping