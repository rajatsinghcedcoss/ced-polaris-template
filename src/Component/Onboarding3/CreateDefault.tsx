import { Banner, Button, Divider, HorizontalGrid, HorizontalStack, LegacyCard, Select, Text, VerticalStack } from "@shopify/polaris";
import { useCallback, useState } from "react";

function DefaultTemplate() {
    const [selected, setSelected] = useState('india');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );
  return (
    <LegacyCard
      sectioned
      actions={[{ content: "View Guide" }]}
      title={
        <VerticalStack>
          <VerticalStack>
            <Text as="h5" fontWeight="bold" variant="headingMd">
              Create Default Template
            </Text>

            <Text
              as="h5"
              fontWeight="regular"
              color="subdued"
              variant="headingMd"
            >
              Default template to upload product(s) on ( Shop Name)
            </Text>
          </VerticalStack>
        </VerticalStack>
      }
    >
      <VerticalStack gap={"5"}>
      <Banner status="info" >
        <Text as="p" variant="headingMd" fontWeight="regular">
          Based on the selected Category you will further map BigCommerce
          attribue with tiktok attribute.
        </Text>
      </Banner>
      <VerticalStack>
        <Text as="h5" variant="headingMd" fontWeight="bold">
        Select Product Category
        </Text>
        <Text as="h5" fontWeight="medium" color="subdued">
        Default template to upload product(s) on TikTok Shop
        </Text>
      </VerticalStack>
      <Select
      label=""
      labelHidden
      options={[
        {label: 'India', value: 'india'},
        {label: 'America', value: 'america'},
      ]}
      onChange={handleSelectChange}
      value={selected}
    />
    <Divider/>
    <HorizontalStack align="end">
        <Button primary>
            Next
        </Button>
    </HorizontalStack>
      </VerticalStack>
    </LegacyCard>
  );
}
export default DefaultTemplate;
