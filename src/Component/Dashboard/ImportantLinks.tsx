import { LegacyCard, Link, List, Text } from '@shopify/polaris'
import React from 'react'

const ImportantLinks = () => {
  return (
    <LegacyCard>
      <LegacyCard.Section>
        <Text as={"h2"} variant='headingMd' fontWeight='bold'>Important Links</Text>
      </LegacyCard.Section>
      <LegacyCard.Section>
        <List type="bullet">
          <List.Item><Link removeUnderline>View Marketplace</Link></List.Item>
          <List.Item><Link removeUnderline>Visit your shop (My Shop)</Link></List.Item>
        </List>
      </LegacyCard.Section>
    </LegacyCard>
  )
}

export default ImportantLinks