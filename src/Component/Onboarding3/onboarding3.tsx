import {
  Button,
  Checkbox,
  Divider,
  Grid,
  HorizontalStack,
  LegacyCard,
  LegacyStack,
  Link,
  Page,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { Logo } from "../Onboarding1/icon";
import { useState } from "react";
import DefaultTemplate from "./CreateDefault";

function Onboarding3() {
    const [step,setSetp]=useState("1")
  return (
    <Page>
      <VerticalStack>
        <HorizontalStack align="center">
          <Grid columns={{ lg: 1, sm: 1, xs: 1 }}>
            <Grid.Cell columnSpan={{ lg: 1 }}>
              <VerticalStack>
                <LegacyStack alignment="center" distribution="center">
                  {Logo}
                  <VerticalStack gap={"2"}>
                    <Text as="h1" variant="headingXl">
                      Welcome to TikTok Shop Integration
                    </Text>
                    <Text
                      as="p"
                      variant="headingXl"
                      fontWeight="regular"
                      color="subdued"
                    >
                      By CedCommerce
                    </Text>
                  </VerticalStack>
                </LegacyStack>
              </VerticalStack>
            </Grid.Cell>
          </Grid>
        </HorizontalStack>
       {step==="1"&&
      
      <LegacyCard
          sectioned
          actions={[{ content: "View Guide" }]}
          title={
            <VerticalStack>
              <VerticalStack>
                <Text as="h5" fontWeight="bold" variant="headingMd">
                  Connect Walmart Account
                </Text>

                <Text
                  as="h5"
                  fontWeight="regular"
                  color="subdued"
                  variant="headingMd"
                >
                  Connect your Walmart Seller account to effortlessly manage
                  products and orders through the app.
                </Text>
              </VerticalStack>
            </VerticalStack>
          }
        >
          <VerticalStack gap={"5"}>
            <TextField
              value=""
              placeholder="Enter Text Here"
              autoComplete="off"
              onChange={() => {}}
              label="Client ID"
              requiredIndicator
            />
            <TextField
              value=""
              placeholder="Enter Text Here"
              autoComplete="off"
              onChange={() => {}}
              label="Secret Key"
              requiredIndicator
            />
            <Checkbox label="I agree to the Terms and Condition" />
            <Divider />
            <HorizontalStack align="space-between">
              <Text as="p" fontWeight="regular" variant="headingMd">
                Don’t have an account?<Link>Create new</Link>
              </Text>
              <Button primary onClick={()=>setSetp("2")}>Connect</Button>
            </HorizontalStack>
          </VerticalStack>
        </LegacyCard> }

        {step=="2"&&<DefaultTemplate/>}
      </VerticalStack>
    </Page>
  );
}
export default Onboarding3;
