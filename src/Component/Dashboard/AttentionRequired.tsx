import { Card, Divider, Icon, LegacyCard, LegacyTabs, TabProps, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import AccordianGroup from '../../Utility/Accordian/AccordianGroup'
import {
	CircleAlertMajor, DiamondAlertMajor
} from '@shopify/polaris-icons';

interface tabsContentI {
	[key: string]: React.ReactNode
}


const AttentionRequired = () => {
	const [selected, setSelected] = useState(0);

	const handleTabChange = useCallback(
		(selectedTabIndex: number) => setSelected(selectedTabIndex),
		[],
	);
	const tabs: TabProps[] = [
		{
			id: 'all-customers-1',
			content: "Error",
			accessibilityLabel: 'All customers',
			panelID: 'all-customers-content-1',
			badge: "2"
		},
		{
			id: 'accepts-marketing-1',
			content: 'Alert',
			panelID: 'accepts-marketing-content-1',
			badge: "6"
		},
		{
			id: 'Announcement',
			content: 'Announcement',
			panelID: 'repeat-customers-content-1',
			badge: "4"
		},
	];

	const tabsData: tabsContentI = {
		0: <AccordianGroup
			data={[
				{
					title: "Error found in 20 products post product upload.",
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					icon: <Icon color='critical' source={DiamondAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='critical' source={DiamondAlertMajor} />
				}
			]}
		/>,
		1: <AccordianGroup
			data={[
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
					icon: <Icon color='warning' source={CircleAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='warning' source={DiamondAlertMajor} />
				},
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
					icon: <Icon color='warning' source={CircleAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='warning' source={DiamondAlertMajor} />
				},
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
					icon: <Icon color='warning' source={CircleAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='warning' source={DiamondAlertMajor} />
				},
			]}
		/>,
		2: <AccordianGroup
			data={[
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
					icon: <Icon color='highlight' source={CircleAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='highlight' source={DiamondAlertMajor} />
				},
				{
					title: "Failed to create 200 orders on Shopify.",
					children: <Text as={'dd'}>Failed to create 200 orders on Shopify.</Text>,
					icon: <Icon color='highlight' source={CircleAlertMajor} />
				},
				{
					children: <Text as={'dd'}>Error found in 20 products post product upload.</Text>,
					title: "Error found in 20 products post product upload.",
					icon: <Icon color='highlight' source={DiamondAlertMajor} />
				},
			]}
		/>,
	}

	return (
		<LegacyCard title="Your Attention Required">
			<LegacyCard.Section>
				<LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
					<div style={{ marginTop: "10px" }}>
						{
							tabsData[selected]
						}
					</div>
				</LegacyTabs>
			</LegacyCard.Section>
		</LegacyCard>
	)
}

export default AttentionRequired