import {
    Divider,
  Grid,
  HorizontalStack,
  LegacyCard,
  LegacyStack,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { Logo } from "../Onboarding1/icon";
import SlideAdded from "../Pricing/Slide";
import { useState } from "react";
import ToggleButton from "../Pricing/Toogle";
import Slider from "react-slick";

function Onboarding2() {
  const [step, setStep] = useState("1");
  const [toggle, setToggle] = useState("Monthly");
  const price = [
    {
      type: "Premium",
      price: "$49",
      children: [
        "Manage upto 500 orders per month.",
        "Upload Product",
        "Inventory Syncing",
        "Out-of-stock Control",
        " Manage Order Cancellation Refunds",
      ],
    },
    {
      type: "Advance",
      price: "$99",
      children: [
        "Manage upto 1000 orders per month.",
        "Upload Product",
        "Inventory Syncing",
        "Out-of-stock Control",
        " Manage Order Cancellation Refunds",
      ],
    },
    {
      type: "Plantinum",
      price: "$149",
      children: [
        "Manage upto 1500 orders per month.",
        "Upload Product",
        "Inventory Syncing",
        "Out-of-stock Control",
        " Manage Order Cancellation Refunds",
      ],
    },
    {
      type: "Professional",
      price: "$199",
      children: [
        "Manage upto 5000 orders per month.",
        "Upload Product",
        "Inventory Syncing",
        "Out-of-stock Control",
        " Manage Order Cancellation Refunds",
      ],
    },
  ];
  return (
   <Page fullWidth>
     <VerticalStack>
      <HorizontalStack align="center">
        <Grid columns={{ lg: 1,sm:1,xs:1 }}>
          <Grid.Cell columnSpan={{ lg: 1}}>
            <VerticalStack>
              <LegacyStack  alignment="center" distribution="center">
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
   
        <VerticalStack gap={"8"}>
          <HorizontalStack align="center">
            <ToggleButton
              toggle={toggle}
              onMonthly={() =>setToggle('Monthly')}
              onYearly={() => setToggle('Yearly')}
            />
          </HorizontalStack>

          <Slider
            slidesToShow={3}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true,
                },
              },
            ]}
          >
            {price.map((items: any, index: any) => {
              return (
         
                  <LegacyCard sectioned>
                    <VerticalStack gap={"3"} align="start">
                      <Text variant="heading2xl" as={"p"}>
                        {items.type}
                      </Text>
                      <HorizontalStack>
                        <Text variant="heading4xl" as={"p"}>
                          {items.price}
                        </Text>
                        <VerticalStack align="center">
                          <Text variant="headingMd" as={"p"}>
                            /{toggle === "Monthly" ? "Month" : "Year"}
                          </Text>
                        </VerticalStack>
                      </HorizontalStack>
                      <Text variant="headingMd" fontWeight="regular" as={"p"}>
                        Billed {toggle === "Monthly" ? "Monthly" : "Yearly"}
                      </Text>
                      <Divider />
                      <Text as="p" variant="headingMd" fontWeight="regular">
                        Plan Includes:
                      </Text>

                      <VerticalStack gap={"3"}>
                        {price[index].children.map((items, index) => {
                          return (
                            <LegacyStack spacing="baseTight">
                              {/* <Icon source={MobileAcceptMajor} color="base" /> */}
                              <Text alignment="start" as="p">
                                {items}
                              </Text>
                            </LegacyStack>
                          );
                        })}
                      </VerticalStack>
                    </VerticalStack>
                  </LegacyCard>
                
              );
            })}
          </Slider>
        </VerticalStack>
     
    </VerticalStack>
   </Page>
  );
}
export default Onboarding2;
