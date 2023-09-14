import { Page } from '@shopify/polaris'
import React from 'react'

const CreateCategoryTemplate = () => {
  return (
    <div>
        <Page 
            title='Create Category Template'
            fullWidth
            backAction={{content: 'Template', url: '#'}}
        />
    </div>
  )
}

export default CreateCategoryTemplate