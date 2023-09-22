import {
  Badge,
  Card,
  HorizontalGrid,
  HorizontalStack,
  Page,
  Text,
  Thumbnail,
  VerticalStack,
} from "@shopify/polaris";
import React from "react";
import CustomTags from "./CustomTag";
import "./ViewProduct.css";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const navigatin = useNavigate();
  return (
    <Page
      title="View Product"
      backAction={{
        content: "Products",
        onAction: () => navigatin("/product"),
      }}
    >
      <Card>
        <HorizontalGrid columns={["oneThird", "twoThirds"]}>
          <HorizontalStack gap="8">
            <VerticalStack gap="5">
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                size="large"
                alt="Black choker necklace"
              />
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                size="large"
                alt="Black choker necklace"
              />
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                size="large"
                alt="Black choker necklace"
              />
            </VerticalStack>

            <div className="inte-view__thumbnil">
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                size="large"
                alt="Black choker necklace"
              />
            </div>
          </HorizontalStack>

          <VerticalStack gap="5">
            <HorizontalStack gap="025">
              <Text as="h3" fontWeight="bold">
                Nike Legacy Women's Shoes Size
              </Text>
              <Badge status="attention">Live</Badge>
            </HorizontalStack>

            <Text as="p">
              Centrino casual shoe material: synthetic material. These shoes are
              made up of high quality synthetic material stays strong and
              durable - meaning the shoes will last much longer. Lifestyle:
              formal/ business. Pair these stylish Centrino shoes with your
              shirt & trousers for that perfect look. Office wear, office shoes,
              formal shoes, Slip-on, business shoes. Closure: slip-on.
            </Text>
            <HorizontalStack gap="5">
              <CustomTags text="SKU:" value="215454642" />
              <CustomTags text="Value:" value="$200.00" />
              <CustomTags text="Value:" value="$200.00" />

              <CustomTags text="Brand:" value="Company 123" />
              <CustomTags text="Tags:" value="Beads, Footwear, Shoes" />
              <CustomTags
                text="Category:"
                value="Mobilier d'intérieur > Linge de maison > Footwear"
              />
            </HorizontalStack>
          </VerticalStack>
        </HorizontalGrid>
      </Card>
    </Page>
  );
};

export default ViewProduct;
