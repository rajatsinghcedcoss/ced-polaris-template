import React, { useEffect, useRef } from 'react';
import { BubbleDataPoint, Chart, ChartTypeRegistry } from 'chart.js/auto';
import { Point } from 'chart.js/dist/core/core.controller';
import { LegacyStack, Text, VerticalStack } from '@shopify/polaris';

interface DonutChartProps {
  data: number[];
  labels: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy the previous chart instance, if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const newChartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels,
            datasets: [
              {
                data,
                backgroundColor: ["#FEC84B", "#413BBC", '#1B875A', '#C4281C', "#2E2E2E"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            cutout: '80%',
            // Other chart options
          },
        });

        chartInstanceRef.current = newChartInstance as Chart<keyof ChartTypeRegistry, (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>;

      }
    }
  }, [data, labels]);


  return (
    <VerticalStack gap={"6"} >
      <div style={{width:"200px" , height:"200px" , margin:"auto"}}><canvas ref={chartRef} /></div>
      <LegacyStack alignment='center' spacing='baseTight'>
        <LegacyStack.Item>
          <div style={{
            borderRadius:"50px",
            width:"12px",
            height:"12px",
            background : "#2E2E2E"
          }} />
        </LegacyStack.Item>
        <LegacyStack.Item fill>
          <Text as='h6' fontWeight='bold'>Not Published</Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Text as='h6' fontWeight='bold'>2213</Text>
        </LegacyStack.Item>
      </LegacyStack>
      <LegacyStack alignment='center' spacing='baseTight'>
        <LegacyStack.Item>
          <div style={{
            borderRadius:"50px",
            width:"12px",
            height:"12px",
            background : "#FEC84B"
          }} />
        </LegacyStack.Item>
        <LegacyStack.Item fill>
          <Text as='h6' fontWeight='bold'>Published</Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Text as='h6' fontWeight='bold'>2213</Text>
        </LegacyStack.Item>
      </LegacyStack>
      <LegacyStack alignment='center' spacing='baseTight'>
        <LegacyStack.Item>
          <div style={{
            borderRadius:"50px",
            width:"12px",
            height:"12px",
            background : "#413BBC"
          }} />
        </LegacyStack.Item>
        <LegacyStack.Item fill>
          <Text as='h6' fontWeight='bold'>Active</Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Text as='h6' fontWeight='bold'>2213</Text>
        </LegacyStack.Item>
      </LegacyStack>
      <LegacyStack alignment='center' spacing='baseTight'>
        <LegacyStack.Item>
          <div style={{
            borderRadius:"50px",
            width:"12px",
            height:"12px",
            background : "#1B875A"
          }} />
        </LegacyStack.Item>
        <LegacyStack.Item fill>
          <Text as='h6' fontWeight='bold'>Error</Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Text as='h6' fontWeight='bold'>2213</Text>
        </LegacyStack.Item>
      </LegacyStack>
      <LegacyStack alignment='center' spacing='baseTight'>
        <LegacyStack.Item>
          <div style={{
            borderRadius:"50px",
            width:"12px",
            height:"12px",
            background : "#C4281C"
          }} />
        </LegacyStack.Item>
        <LegacyStack.Item fill>
          <Text as='h6' fontWeight='bold'>Expired</Text>
        </LegacyStack.Item>
        <LegacyStack.Item>
          <Text as='h6' fontWeight='bold'>2213</Text>
        </LegacyStack.Item>
      </LegacyStack>
    </VerticalStack>
  );
};

export default DonutChart;
