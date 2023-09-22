import { Card, HorizontalGrid, Layout, LegacyCard, Page, VerticalStack } from '@shopify/polaris'
import AttentionRequired from './AttentionRequired';
import ConnectedChannels from './ConnectedChannels';
import Analytics from './Chart/Analytics';
import PricingInfo from './PricingInfo';
import ImportantLinks from './ImportantLinks';
import RecentActivities from './RecentActivities';
import Status from './Status/Status';
import TopSellingProducts from './TopSellingProducts';
import Support from './Support';
import DetailAnanlysis from './Chart/DetailAnanlysis';

const Dashboard = () => {

    return (
        <Card background={"bg-app"}>
            <Page
                title='Dashboard'
                fullWidth
                subtitle='Here’s what’s happening in your store today.'
                primaryAction={{ content: 'Guide', disabled: true }}
            >
                <Layout>
                    <Layout.Section>
                        <AttentionRequired />
                        <Analytics />
                        <Status />
                        <LegacyCard subdued>
                            <HorizontalGrid columns={2} gap={"4"}>
                                <div><DetailAnanlysis /></div>
                                <TopSellingProducts />
                            </HorizontalGrid>
                        </LegacyCard>
                        <Support />
                    </Layout.Section>
                    <Layout.Section secondary>
                        <ConnectedChannels />
                        <PricingInfo />
                        <RecentActivities />
                        <ImportantLinks />
                    </Layout.Section>
                </Layout>
            </Page>
        </Card>
    )
}

export default Dashboard