import { Badge, Banner, Button, Card, Checkbox, DataTable, Divider, Grid, HorizontalGrid, HorizontalStack, Icon, Layout, LegacyCard, LegacyStack, Link, List, Page, RadioButton, Select, Text, TextField, Tooltip, VerticalStack } from '@shopify/polaris'
import {
  SearchMajor
} from '@shopify/polaris-icons';
import React from 'react'
import AccordianGroup from '../../Utility/Accordian/AccordianGroup';
import {
  CircleTickMajor
} from '@shopify/polaris-icons';

const CreateCategoryTemplate = () => {

  const attributeMappingMarkup = (
    <div style={{ paddingTop: "8px" }}>
      <VerticalStack gap={"3"}>
        <LegacyStack distribution='fillEvenly'>
          <LegacyStack.Item><Text as="h3" variant='headingSm'>TickTok Shop Attribute</Text></LegacyStack.Item>
          <LegacyStack.Item><Text as="h3" variant='headingSm'>BigCommerce Attribute</Text></LegacyStack.Item>
        </LegacyStack>
        <Text as="dd" variant='bodyMd' color='subdued'>Subheading Content</Text>
        <LegacyStack distribution='fillEvenly'>
          <LegacyStack.Item>
            <LegacyStack spacing='baseTight' alignment='center'>
              <Icon color='success' source={CircleTickMajor} />
              <LegacyStack.Item fill>
                <Text as="h3" variant='bodyMd' fontWeight='medium'>
                  Package Length <Text color='critical' as='span'>*</Text>
                </Text>
              </LegacyStack.Item>
            </LegacyStack>
          </LegacyStack.Item>
          <LegacyStack.Item>
            <VerticalStack gap={"2"}>
              <Select placeholder='Select Attributes' label />
              <Select placeholder='Length' label />
            </VerticalStack>
          </LegacyStack.Item>
        </LegacyStack>
        <Divider />
        <LegacyStack distribution='fillEvenly'>
          <LegacyStack.Item>
            <LegacyStack spacing='baseTight' alignment='center'>
              <Icon source={CircleTickMajor} />
              <LegacyStack.Item fill>
                <Text as="h3" variant='bodyMd' fontWeight='medium'>
                  Package Length <Text color='critical' as='span'>*</Text>
                </Text>
              </LegacyStack.Item>
            </LegacyStack>
          </LegacyStack.Item>
          <LegacyStack.Item>
            <VerticalStack gap={"2"}>
              <Select placeholder='Select Attributes' label />
              <Select placeholder='Length' label />
            </VerticalStack>
          </LegacyStack.Item>
        </LegacyStack>
      </VerticalStack>
    </div>
  )

  return (
    <Card background='bg-app'>
      <Page
        title='Create Category Template'
        fullWidth
        backAction={{ content: 'Template', url: '#' }}
        subtitle='Category Templates simplify the process of uploading and managing new products on Shop.'
      >
        <LegacyCard sectioned>
          <HorizontalGrid alignItems='start' gap={'3'} columns={2}>
            <VerticalStack>
              <Text variant="headingMd" as="h3">
                Online store dashboard
              </Text>
              <Text variant='bodyMd' color='subdued' as='dd'>Category Template name must be unique. (Maximum limit : 80 characters)</Text>
            </VerticalStack>
            <TextField
              label="Label"
              autoComplete='false'

            />
          </HorizontalGrid>
        </LegacyCard>
        <LegacyCard sectioned>
          <HorizontalGrid alignItems='start' gap={'3'} columns={2}>
            <Tooltip
              content="Select Any Condition to fetch the product(s) fulfilling any of the conditions created. Select All Condition to fetch the product(s) fulfilling all the conditions created. Click on Run Query to fetch the number of the product(s) on the basis of the Rule Group(s) created."
            >
              <VerticalStack gap={"2"}>
                <Text variant="headingMd" as="h3">
                  Assign Product to the Template
                  <Divider />
                </Text>
                <Text variant='bodyMd' as="dd" color='subdued'>
                  Create Rule Group(s) (query) to fetch a particular set of the product(s) in the current profile.
                </Text>
              </VerticalStack>
            </Tooltip>
            <VerticalStack gap={'3'}>
              <Checkbox label={"Override Listings"} helpText="Select this option if you wish to override products with templates already assigned." />
              <VerticalStack gap={'025'}>
                <Text variant="headingSm" as="h3">
                  Rule Group
                </Text>
                <HorizontalGrid alignItems='center' gap={'10'} columns={4}>
                  <Text color='subdued' variant="bodyMd" as="dd">
                    Product Must Match
                  </Text>
                  <RadioButton label="Any Condition" />
                  <RadioButton label="All Condition" />
                </HorizontalGrid>
              </VerticalStack>
              <HorizontalGrid alignItems='center' gap={'10'} columns={3}>
                <Select label placeholder='Category' />
                <Select label placeholder='Equals' />
                <Select label placeholder='Shirt' />
              </HorizontalGrid>
              <LegacyStack alignment='center'>
                <LegacyStack.Item fill></LegacyStack.Item>
                <LegacyStack.Item><Link>Add New Rule</Link></LegacyStack.Item>
                <LegacyStack.Item><Button outline>Run Query</Button></LegacyStack.Item>
              </LegacyStack>
              <LegacyStack alignment='center'>
                <Text color='subdued' variant="bodyMd" as="dd">
                  Applied Rule:
                </Text>
                <Badge>( Category Equals Shirt )</Badge>
              </LegacyStack>
              <Banner status='success' onDismiss={() => { }}>
                <Text as='dd'>6 product(s) found under this query. <Link>View Sample Products(s)</Link></Text>
              </Banner>
            </VerticalStack>
          </HorizontalGrid>
        </LegacyCard>
        <LegacyCard sectioned>
          <HorizontalGrid alignItems='start' gap={'3'} columns={2}>
            <VerticalStack>
              <Text variant="headingMd" as="h3">
                Choose Category *
              </Text>
              <Text variant='bodyMd' color='subdued' as='dd'>Template name must be unique and should not exceed 80 characters.</Text>
            </VerticalStack>
            <Select
              label
              placeholder='Select Category'
              helpText="Note: Based on the selected category you will further map Magento attribute with setup attributes."
            />
          </HorizontalGrid>
        </LegacyCard>
        <LegacyCard
          sectioned
        >
          <VerticalStack gap={"3"}>
            <VerticalStack>
              <Text variant="headingMd" as="h3">
                Select Attribute Mapping *
              </Text>
              <Text variant='bodyMd' color='subdued' as='dd'>Through attribute mapping you can enhance your listing catalog with additional listing information</Text>
            </VerticalStack>
            <AccordianGroup
              data={[
                {
                  title: "Product Attribute",
                  children: attributeMappingMarkup
                },
                {
                  title: "Variation Attribute",
                  children: attributeMappingMarkup
                }
              ]}
            />
          </VerticalStack>
        </LegacyCard>
      </Page>
    </Card>
  )
}

export default CreateCategoryTemplate