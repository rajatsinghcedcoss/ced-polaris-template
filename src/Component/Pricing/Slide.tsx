import {
  Card,
  Divider,
  HorizontalStack,
  Icon,
  LegacyCard,
  LegacyStack,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import Slider from "react-slick";
import ToggleButton from "./Toogle";
import { MobileAcceptMajor } from "@shopify/polaris-icons";
import { useState } from "react";
function SlideAdded() {
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
    <VerticalStack  gap={"8"}>
      <LegacyStack spacing="extraTight"  vertical alignment="center">
        <ToggleButton  toggle={toggle}
          onMonthly={() => setToggle("Monthly")}
          onYearly={() => setToggle("Yearly")}/>
      </LegacyStack>
      <Slider 

      slidesToShow={3}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        }
      ]}
      >
     
      {price.map((items: any, index: any) => {
          return (
            <HorizontalStack gap="5" align="center">
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
                      /{toggle ==="Monthly" ? "Month" : "Year"}
                    </Text>
                  </VerticalStack>
                </HorizontalStack>
                <Text variant="headingMd" fontWeight="regular" as={"p"}>
                  Billed {toggle ==="Monthly" ? "Monthly" : "Yearly"}
                </Text>
                <Divider />
                <Text as="p" variant="headingMd" fontWeight="regular">
                  Plan Includes:
                </Text>
          
                  <VerticalStack gap={"3"}>
                  {price[index].children.map((items, index) => {
                    return (
                      <LegacyStack spacing="baseTight">
                        <Icon source={MobileAcceptMajor} color="base" />
                        <Text alignment="start" as="p">{items}</Text>
                      </LegacyStack>
                    );
                  })}
                  </VerticalStack>
              
              </VerticalStack>
            </LegacyCard>
            </HorizontalStack>
          );
        })}
 
      </Slider>
    </VerticalStack>
  );
}
export default SlideAdded;
