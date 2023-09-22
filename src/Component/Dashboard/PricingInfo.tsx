import { Badge, Button, HorizontalGrid, LegacyCard, LegacyStack, ProgressBar, Text, VerticalStack } from '@shopify/polaris'
import React from 'react'

const PricingInfo = () => {
	return (
		<LegacyCard>
			<LegacyCard.Section>
				<LegacyStack alignment='center'>
					<LegacyStack.Item fill><Text as={"h2"} variant='headingMd' fontWeight='bold'>Pricing Info</Text></LegacyStack.Item>
					<LegacyStack.Item><Button plain>Upgrade Plan</Button></LegacyStack.Item>
				</LegacyStack>
			</LegacyCard.Section>
			<LegacyCard.Section>
				<VerticalStack gap={'4'}>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Active Plan</Text>
						<LegacyStack.Item fill><Text alignment='end' as={'dd'} fontWeight='semibold'>Starter - Billed Monthly</Text></LegacyStack.Item>
					</LegacyStack>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Plan Amount</Text>
						<LegacyStack.Item fill><Text alignment='end' as={'dd'} fontWeight='semibold'>$25.20</Text></LegacyStack.Item>
					</LegacyStack>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Plan Status</Text>
						<LegacyStack.Item fill><Text as={'dd'} alignment='end'><Badge status='success'>Paid</Badge></Text></LegacyStack.Item>
					</LegacyStack>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Billing date</Text>
						<LegacyStack.Item fill><Text fontWeight='semibold' as={'dd'} alignment='end'>June 20, 2023</Text></LegacyStack.Item>
					</LegacyStack>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Product Limit</Text>
						<LegacyStack.Item fill>
							<div style={{ width: "75px", marginLeft: "auto" }}>
								<ProgressBar size='small' progress={12} />
								<Text as="dd">12 of 100</Text>
							</div></LegacyStack.Item>
					</LegacyStack>
					<LegacyStack>
						<Text as={'dt'} color='subdued'>Montholy Order Limit</Text>
						<LegacyStack.Item fill>
							<div style={{ width: "75px", marginLeft: "auto" }}>
								<ProgressBar size='small' progress={57} />
								<Text as="dd">57 of 100</Text>
							</div></LegacyStack.Item>
					</LegacyStack>
				</VerticalStack>
			</LegacyCard.Section>
		</LegacyCard>
	)
}

export default PricingInfo