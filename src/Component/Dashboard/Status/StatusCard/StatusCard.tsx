import { Card, VerticalStack, Icon, LegacyStack, Text, LegacyCard } from '@shopify/polaris';
import React from 'react'
import {
  ArrowRightMinor
} from '@shopify/polaris-icons';

import './StatusCard.css'

interface StatusCardProps {
  number: number;
  color: string;
  title: string;
  desc: string;
}

const StatusCard: React.FC<StatusCardProps> = (props) => {
  return (
    <div className={`inte-statusCard inte-statusCard--${props.color}`}>
      <Card>
        <VerticalStack gap={'10'}>
          <LegacyStack spacing='extraLoose'>
            <LegacyStack.Item fill>
              <div className='inte-customText--color'>
                <Text as="h6" fontWeight='bold'>
                  {
                    props.number
                  }
                </Text>
              </div>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <Icon source={ArrowRightMinor} />
            </LegacyStack.Item>
          </LegacyStack>
          <VerticalStack gap={'05'}>
            <LegacyStack.Item fill>
              <Text as="h6" fontWeight='bold'>
                {
                  props.title
                }
              </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <Text as="dd" color='subdued'>
                {
                  props.desc
                }
              </Text>
            </LegacyStack.Item>
          </VerticalStack>
        </VerticalStack>
      </Card>
    </div>
  )
}

export default StatusCard