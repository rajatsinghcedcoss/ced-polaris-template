import { LegacyCard } from '@shopify/polaris';
import React from 'react'
import DonutChart from './DonughtChart';

const DetailAnanlysis = () => {

    const chartData = [10, 20, 15, 15, 20];
    const chartLabels = [
        "Not Published",
        "Published",
        "Active",
        "Error",
        "Expired",
    ];

    return (
        <LegacyCard
            title="Detailed Analysis"
        >
            <LegacyCard.Section>
                <DonutChart data={chartData} labels={chartLabels} />
            </LegacyCard.Section>
        </LegacyCard>
    )
}

export default DetailAnanlysis