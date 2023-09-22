import { ActionList, Button, Card, DataTable, Icon, Layout, Page, Pagination, Popover, TextField } from '@shopify/polaris'
import {
  SearchMajor
} from '@shopify/polaris-icons';
import React, { useState } from 'react'
import {
  MobileVerticalDotsMajor , 
  EditMajor,
  DeleteMajor
} from '@shopify/polaris-icons';

const CategoryTemplateListing = () => {

  const [activePopover, setActivePopover] = useState(-1)

  const rows = [
    [
      'Emerald Silk Gown',
      '$875.00',
      "View Rules",
      140,
      <Popover onClose={() => setActivePopover(-1)} active={activePopover === 1} activator={<Button onClick={() => setActivePopover(prev => prev === 1 ? -1 : 1)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
        <ActionList
          actionRole="menuitem"
          items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
        />
      </Popover>
    ],
    [
      'Mauve Cashmere Scarf',
      '$230.00',
      "View Rules",
      83,
      <Popover onClose={() => setActivePopover(-1)} active={activePopover === 2} activator={<Button onClick={() => setActivePopover(prev => prev === 2 ? -1 : 2)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
        <ActionList
          actionRole="menuitem"
          items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
        />
      </Popover>
    ],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      "View Rules",
      32,
      <Popover onClose={() => setActivePopover(-1)} active={activePopover === 3} activator={<Button onClick={() => setActivePopover(prev => prev === 3 ? -1 : 3)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
        <ActionList
          actionRole="menuitem"
          items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
        />
      </Popover>,
    ],
    ['Emerald Silk Gown', '$875.00', "View Rules", 140, <Popover onClose={() => setActivePopover(-1)} active={activePopover === 4} activator={<Button onClick={() => setActivePopover(prev => prev === 4 ? -1 : 4)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
      <ActionList
        actionRole="menuitem"
        items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
      />
    </Popover>],
    ['Emerald Silk Gown', '$875.00', "View Rules", 140, <Popover onClose={() => setActivePopover(-1)} active={activePopover === 5} activator={<Button onClick={() => setActivePopover(prev => prev === 5 ? -1 : 5)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
      <ActionList
        actionRole="menuitem"
        items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
      />
    </Popover>],
    ['Emerald Silk Gown', '$875.00', "View Rules", 140, <Popover onClose={() => setActivePopover(-1)} active={activePopover === 6} activator={<Button onClick={() => setActivePopover(prev => prev === 6 ? -1 : 6)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
      <ActionList
        actionRole="menuitem"
        items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
      />
    </Popover>],
    ['Emerald Silk Gown', '$875.00', "View Rules", 140, <Popover onClose={() => setActivePopover(-1)} active={activePopover === 7} activator={<Button onClick={() => setActivePopover(prev => prev === 7 ? -1 : 7)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
      <ActionList
        actionRole="menuitem"
        items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
      />
    </Popover>],
    ['Emerald Silk Gown', '$875.00', "View Rules", 140, <Popover onClose={() => setActivePopover(-1)} active={activePopover === 8} activator={<Button onClick={() => setActivePopover(prev => prev === 8 ? -1 : 8)} outline icon={<Icon source={MobileVerticalDotsMajor} />} />}>
      <ActionList
        actionRole="menuitem"
        items={[{ content: 'Edit' , icon : EditMajor  }, { content: 'Delete' , icon:DeleteMajor }]}
      /> 
    </Popover>],
  ];

  return (
    <Card background='bg-app'>
      <Layout sectioned>
        <Page
          title='Category Listing'
          fullWidth
          backAction={{ content: 'Template', url: '#' }}
          subtitle='Category Templates simplify the process of uploading and managing new products on Shop.'
        />
        <Layout.Section>
          <Card>
            <Layout>
              <Layout.Section>
                <TextField
                  clearButton
                  prefix={<Icon source={SearchMajor} />}
                  autoComplete='aa'
                  label=""
                  placeholder='Search Category Template'
                />
              </Layout.Section>
              <Layout.Section>
                <DataTable
                  columnContentTypes={[
                    'text',
                    'numeric',
                    'numeric',
                    'numeric',
                    'numeric',
                  ]}
                  headings={[
                    'Name',
                    'Category',
                    'Rule(s)',
                    'Total product(s) attached',
                    'Action(s)',
                  ]}
                  rows={rows}

                />
                <Pagination
                  onPrevious={() => {
                    console.log('Previous');
                  }}
                  onNext={() => {
                    console.log('Next');
                  }}

                  hasNext
                  label="1-50 of 8,450 orders"
                />
              </Layout.Section>
            </Layout>
          </Card>
        </Layout.Section>
      </Layout>
    </Card>
  )
}

export default CategoryTemplateListing