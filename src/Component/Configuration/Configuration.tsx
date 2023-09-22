import { Card, HorizontalGrid, HorizontalStack, Layout, LegacyStack, Listbox, Navigation, Page } from '@shopify/polaris'
import {
  ProductsMajor
} from '@shopify/polaris-icons';
import React, { useState } from 'react'
import Configuration from '../Onboarding1/GeneralConf';
import Account from './Account';
import Mapping from './Mapping';

interface tabsContentI {
  [key: string]: React.ReactNode
}

const ConfigurationTab = () => {

  const [selectedTab, setSelectedTab] = useState<string>("tickTok")

  const tabsContent: tabsContentI = {
    'tickTok': <Configuration />,
    product: <Configuration />,
    attributes: <div>Attributes</div>,
    account: <Account />,
    mapping: <Mapping />
  }

  return (
    <Card background='bg-app'>
      <Layout sectioned>
        <Page
          title='Configuration'
          fullWidth
          backAction={{ content: 'Template', url: '#' }}
        />
        <Layout.Section>
          <LegacyStack spacing='loose' >
            <Listbox onActiveOptionChange={(value: string) => setSelectedTab(value)} accessibilityLabel="Basic Listbox example">
              <Listbox.Option value="tickTok">TickTok Setting</Listbox.Option>
              <Listbox.Option value="product">Product Setting</Listbox.Option>
              <Listbox.Option value="mapping">Shipping Carring Mapping</Listbox.Option>
              <Listbox.Option value="attributes">Global Attributes</Listbox.Option>
              <Listbox.Option value="account">Account</Listbox.Option>
            </Listbox>
            <LegacyStack.Item fill>
              {
                tabsContent[selectedTab as keyof tabsContentI]
              }
            </LegacyStack.Item>
          </LegacyStack>

        </Layout.Section>
      </Layout>
    </Card>
  )
}

export default ConfigurationTab