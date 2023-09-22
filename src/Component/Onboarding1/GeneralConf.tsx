import {
    Button,
  Checkbox,
  ChoiceList,
  Divider,
  HorizontalStack,
  LegacyCard,
  RadioButton,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { useState } from "react";
import { useNavigate } from "react-router";

function Configuration() {
    const navigate=useNavigate()
  const [selected, setSelected]: any = useState([
    "syncproduct",
    "ordershipment",
  ]);
  const [value, setValue] = useState("");
  return (
    <LegacyCard
      sectioned
      title={
        <VerticalStack>
          <Text as="p" fontWeight="bold" variant="headingMd">
            General Configuration
          </Text>
          <Text as="p" color="subdued" fontWeight="regular" variant="headingMd">
            Enable or disable the following basic configuration setting as
            needed.
          </Text>
        </VerticalStack>
      }
    >
      <VerticalStack gap={"5"}>
        <ChoiceList
          allowMultiple
          title="Company name"
          titleHidden
          choices={[
            { label: "Sync Product", value: "syncproduct" },
            { label: "Sync Price", value: "syncprice" },
            { label: "Create order Automatically", value: "automatically" },
            { label: "Sync order shipment", value: "ordershipment" },
            { label: "Blank Box", value: "blankbox" },
          ]}
          selected={selected}
          onChange={(e) => setSelected(e)}
        />
        <Checkbox label="Sync order shipment" />
        <Checkbox label="Sync Price" />
        <VerticalStack>
          <RadioButton label="Create an order when the quantity is available for blank box." />
          <RadioButton
            checked
            label="Create an order even when the quantity is not available for blank box."
          />
        </VerticalStack>
        <Divider />
        <HorizontalStack align="space-between">
          <VerticalStack>
            <Text as="p" variant="headingSm" fontWeight="medium">
              Match with Tiktok
            </Text>
            <Text
              as="p"
              variant="headingSm"
              color="subdued"
              fontWeight="medium"
            >
              Atleast one should be selected
            </Text>
          </VerticalStack>
          <HorizontalStack gap={"5"}>
            <Checkbox checked label="SKU" />
            <Checkbox checked label="Item Name" />
          </HorizontalStack>
        </HorizontalStack>
        <Divider />
        <VerticalStack gap={"3"}>
          <>
          <Text as="p" variant="headingMd" fontWeight="medium">
            Set Aside Inventory
          </Text>
          <Text color="subdued" as="p" variant="headingMd" fontWeight="medium">
            Set aside specific quantities of inventory for Amazon MCF and
            transfer lower/remaining quantities to Mirakl.
          </Text>
          </>
          <TextField
            label="Store name"
            labelHidden
            value={value}
            helpText="For example : If you choose to reserve 5 inventory values out of 20, we will send 15 Amazon MCF inventory on Mirakl."
            onChange={(e) => setValue(e)}
            autoComplete="off"
          />
        </VerticalStack>
        <Divider />
        <HorizontalStack align="end">
            <Button primary onClick={()=>navigate("/pricing")}>
                Submit
            </Button>
        </HorizontalStack>
      </VerticalStack>
    </LegacyCard>
  );
}
export default Configuration;
