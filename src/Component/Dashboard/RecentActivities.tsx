import { Button, Divider, LegacyCard, LegacyStack, ProgressBar, Text, VerticalStack } from '@shopify/polaris'
import React from 'react'

const purpelDot = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6007_287482)"><circle cx="8" cy="8.00092" r="8" fill="#E7E1F6"></circle><circle cx="8" cy="8" r="4" fill="#413BBC"></circle></g><defs><clipPath id="clip0_6007_287482"><rect width="16" height="16" fill="white" transform="translate(0 0.000915527)"></rect></clipPath></defs></svg>
const redDot = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6007_287481)"><circle cx="8" cy="8" r="8" fill="#FCEFEE"></circle><circle cx="8" cy="8" r="4" fill="#D62C20"></circle></g><defs><clipPath id="clip0_6007_287481"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
const greenDot = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6007_287483)"><circle cx="8" cy="8" r="8" fill="#E6F2ED"></circle><circle cx="8" cy="8" r="4" fill="#1B875A"></circle></g><defs><clipPath id="clip0_6007_287483"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>

const RecentActivities = () => {
  return (
    <LegacyCard>
      <LegacyCard.Section>
        <LegacyStack>
          <LegacyStack.Item fill><Text as={"h2"} variant='headingMd' fontWeight='bold'>Recent Activities</Text></LegacyStack.Item>
          <LegacyStack.Item><Button plain>View All</Button></LegacyStack.Item>
        </LegacyStack>
      </LegacyCard.Section>
      <LegacyCard.Section>
        <Text as={'h3'} fontWeight='medium'>Product Syncing in progress</Text>
        <Text color='subdued' as={'h3'} fontWeight='medium'>October 10, 2022, 10:03 GMT</Text>
        <div style={{ margin: "20px 0" }}>
          <ProgressBar progress={47} size='small' />
        </div>
        <VerticalStack gap={"5"}>
          <Divider />
          <LegacyStack spacing='extraLoose'>
            {
              purpelDot
            }
            <LegacyStack.Item fill>
              <Text as="dd">The product upload has been finished</Text>
            </LegacyStack.Item>
          </LegacyStack>
          <Divider />
          <LegacyStack spacing='extraLoose'>
            {
              redDot
            }
            <LegacyStack.Item fill>
              <Text as="dd">The product upload has been finished</Text>
            </LegacyStack.Item>
          </LegacyStack>
          <Divider />
          <LegacyStack spacing='extraLoose'>
            {
              greenDot
            }
            <LegacyStack.Item fill>
              <Text as="dd">The product upload has been finished</Text>
            </LegacyStack.Item>
          </LegacyStack>
          <Divider />
          <LegacyStack spacing='extraLoose'>
            {
              redDot
            }
            <LegacyStack.Item fill>
              <Text as="dd">The product upload has been finished</Text>
            </LegacyStack.Item>
          </LegacyStack>
          <Divider />
          <LegacyStack spacing='extraLoose'>
            {
              greenDot
            }
            <LegacyStack.Item fill>
              <Text as="dd">The product upload has been finished</Text>
            </LegacyStack.Item>
          </LegacyStack>
        </VerticalStack>
      </LegacyCard.Section>
    </LegacyCard>
  )
}

export default RecentActivities