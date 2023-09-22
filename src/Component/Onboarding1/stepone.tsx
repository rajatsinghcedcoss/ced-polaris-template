import {
    Banner,
  Button,
  Divider,
  Grid,
  HorizontalStack,
  Icon,
  LegacyCard,
  LegacyStack,
  Select,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { Logo } from "./icon";
import { ArrowRightMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import Configuration from "./GeneralConf";

function StepOne() {
    const[step,setStep]=useState("1")
    const [value,setValue]=useState("india")
  return (
   <HorizontalStack align="center">
     <Grid columns={{ lg: 2}}>
      <Grid.Cell columnSpan={{lg:2}}>
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

           {step=="1"&& <VerticalStack>
              <LegacyCard
                sectioned
                title={
                  <VerticalStack gap={"2"}>
                    <Text as="p" variant="bodyLg" fontWeight="bold">
                      Authorize Connect Account
                    </Text>
                    <Text
                      as="p"
                      color="subdued"
                      fontWeight="regular"
                      variant="bodyLg"
                    >
                      Click to authorize your (App Name) Connect Account to
                      connect with the app.
                    </Text>
                  </VerticalStack>
                }
              >
                <LegacyStack spacing="baseTight" vertical>
                  <Divider />
                  <HorizontalStack align="end">
                    <Button
                    onClick={()=>setStep("2")}
                      primary
                      icon={<Icon source={ArrowRightMinor} color="base" />}
                    >
                      Authorize
                    </Button>
                  </HorizontalStack>
                </LegacyStack>
              </LegacyCard>
            </VerticalStack>}
            {step=="2"&&
             <VerticalStack>
             <LegacyCard
               sectioned
               title={
                 <VerticalStack gap={"2"}>
                   <Text as="p" variant="bodyLg" fontWeight="bold">
                     Authorize Connect Account
                   </Text>
                   <Text
                     as="p"
                     color="subdued"
                     fontWeight="regular"
                     variant="bodyLg"
                   >
                     Click to authorize your (App Name) Connect Account to
                     connect with the app.
                   </Text>
                 </VerticalStack>
               }
             >
               <LegacyStack spacing="baseTight" vertical>
                <Banner title="Connection Error"  status="critical">
                    <Text as="p" variant="headingMd" color="subdued" fontWeight="regular">
                    It appears that you’re attempting to authorize with a Mirakl Connect Account that is different from the one you use to login. Unfortunatly, we can not proceed with this request. To resolve this issue, You can authorize with the same Mirakl Connect Account that you used during login or go back and login from account for which you want to do authorization.
                    </Text>
                </Banner>
                 <Divider />
                 <HorizontalStack align="end">
                   <Button
                   onClick={()=>setStep("3")}
                     primary
                     icon={<Icon source={ArrowRightMinor} color="base" />}
                   >
                     Authorize
                   </Button>
                 </HorizontalStack>
               </LegacyStack>
             </LegacyCard>
           </VerticalStack>
            }
             {step=="3"&&
             <VerticalStack>
             <LegacyCard
               sectioned
               title={
                 <VerticalStack gap={"2"}>
                   <Text as="p" variant="bodyLg" fontWeight="bold">
                     Authorize Connect Account
                   </Text>
                   <Text
                     as="p"
                     color="subdued"
                     fontWeight="regular"
                     variant="bodyLg"
                   >
                     Click to authorize your (App Name) Connect Account to
                     connect with the app.
                   </Text>
                 </VerticalStack>
               }
             >
               <LegacyStack spacing="baseTight" vertical>
               <Select label labelHidden value={value} onChange={(e)=>setValue(e)} options={[
                {label: 'India', value: 'india'},
                {label: 'America', value: 'america'},
               ]}/>
                 <Divider />
                 <HorizontalStack align="end">
                   <Button
                   onClick={()=>setStep("4")}
                     primary
                     icon={<Icon source={ArrowRightMinor} color="base" />}
                   >
                  Sign In
                   </Button>
                 </HorizontalStack>
               </LegacyStack>
             </LegacyCard>
           </VerticalStack>
            }
            {step=="4"&&<Configuration/>}
       
        </VerticalStack>
      </Grid.Cell>
    </Grid>
   </HorizontalStack>
  );
}
export default StepOne;
