import React, { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Card,
  HorizontalGrid,
  HorizontalStack,
  Icon,
  IndexTable,
  LegacyCard,
  Page,
  Text,
  Thumbnail,
  VerticalStack,
  useIndexResourceState,
} from "@shopify/polaris";
import { InviteMinor, PhoneMajor } from "@shopify/polaris-icons";

import "./Order.css";
import { useNavigate } from "react-router-dom";

const ViewOrder = () => {
  const navigatin = useNavigate();
  const [tableDataRow, setTableRowData] = useState([]);
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(tableDataRow);

  const rowMarkup = tableDataRow.map(
    ({ id, image, title, price, quantity }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Thumbnail source={image} alt="" />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {title}
          </Text>
        </IndexTable.Cell>

        <IndexTable.Cell>
          <VerticalStack>
            <Text as="p">${price}</Text>
            <Text as="p">USD</Text>
          </VerticalStack>
        </IndexTable.Cell>
        <IndexTable.Cell>{quantity}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  useEffect(() => {
    let holdAutoData: any = [];
    let holdData: any = [];
    fetch("https://dummyjson.com/products?&limit=1")
      .then((res) => res.json())
      .then((json) => {
        json.products.map((items: any) => {
          return (
            <React.Fragment key={items.id}>
              {
                (holdData = [
                  ...holdData,
                  {
                    id: items.id,
                    image: items.thumbnail,
                    title: items.title,
                    quantity: <Text as="p">1000</Text>,
                    price: items.price,
                  },
                ])
              }

              {
                (holdAutoData = [
                  ...holdAutoData,
                  {
                    label: items.title,
                    value: items.description,
                  },
                ])
              }
            </React.Fragment>
          );
        });
        const selectedRowKeys: any = {};
        json.products.map((item: any) => {
          return (selectedRowKeys[item.id] = false);
        });
        setTableRowData(holdData);
      });
  }, []);

  return (
    <Page
      title="577714493044460294"
      backAction={{ content: "Products", onAction: () => navigatin("/order") }}
      titleMetadata={<Badge status="attention">Awaiting Shipment</Badge>}
    >
      <Card>
        <HorizontalGrid gap="8" columns={["twoThirds", "oneThird"]}>
          <VerticalStack gap="8">
            <HorizontalStack align="space-between">
              <Text variant="headingMd" as="h6">
                Order Details
              </Text>
              <HorizontalStack gap="3">
                <Text as="p">Fulfilled By:</Text>
                <Badge>Fulfilled By Merchant</Badge>
              </HorizontalStack>
            </HorizontalStack>
            <Card>
              <IndexTable
                selectable={false}
                resourceName={resourceName}
                itemCount={tableDataRow.length}
                selectedItemsCount={
                  allResourcesSelected ? "All" : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  { title: "Image" },
                  { title: "Name" },
                  { title: "Price" },
                  { title: "Quantity" },
                ]}
                lastColumnSticky
              >
                {rowMarkup}
              </IndexTable>
            </Card>
            <LegacyCard>
              <LegacyCard.Section>
                <HorizontalStack gap="8" align="end">
                  <Text variant="headingXs" as="h6">
                    Order Sub total
                  </Text>
                  <Text variant="headingXs" as="h6">
                    $600
                  </Text>
                </HorizontalStack>
                <HorizontalStack gap="8" align="end">
                  <Text variant="headingXs" as="h6">
                    Shipping Charges
                  </Text>
                  <Text variant="headingXs" as="h6">
                    $10
                  </Text>
                </HorizontalStack>
                <HorizontalStack gap="8" align="end">
                  <Text variant="headingXs" as="h6">
                    Discount
                  </Text>
                  <Text variant="headingXs" as="h6">
                    $0
                  </Text>
                </HorizontalStack>
                <HorizontalStack gap="8" align="end">
                  <Text variant="headingXs" as="h6">
                    Estimated Tax
                  </Text>
                  <Text variant="headingXs" as="h6">
                    $10
                  </Text>
                </HorizontalStack>
              </LegacyCard.Section>
              <LegacyCard.Section subdued>
                <HorizontalStack gap="8" align="end">
                  <Text variant="headingXs" as="h6">
                    Total
                  </Text>
                  <Text variant="headingXs" as="h6">
                    $600
                  </Text>
                </HorizontalStack>
              </LegacyCard.Section>
            </LegacyCard>
          </VerticalStack>

          <VerticalStack gap="4">
            <LegacyCard title="Order Details" sectioned>
              <LegacyCard.Section>
                <HorizontalStack gap="6">
                  <Avatar customer name="Farrah" />
                  <div>
                    <Text as="p">Order Details</Text>
                    <Text as="p" color="subdued">
                      Tanya McCarthy
                    </Text>
                  </div>
                </HorizontalStack>
              </LegacyCard.Section>
              <LegacyCard.Section>
                <VerticalStack gap="2">
                  <HorizontalStack gap="6">
                    <Icon source={InviteMinor} color="base" />
                    <Text as="p" color="subdued">
                      satya@gmai.com
                    </Text>
                  </HorizontalStack>
                  <HorizontalStack gap="6">
                    <Icon source={PhoneMajor} color="base" />

                    <Text as="p" color="subdued">
                      (+442)7587451258
                    </Text>
                  </HorizontalStack>
                </VerticalStack>
              </LegacyCard.Section>
            </LegacyCard>
            <LegacyCard title="Shipping Method" sectioned>
              <HorizontalStack gap="6">
                <Thumbnail
                  source="https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg"
                  size="small"
                  alt="Black choker necklace"
                />
                <div>
                  <Text as="p">Amazon Order ID</Text>
                  <Text as="p" color="subdued">
                    1987650
                  </Text>
                </div>
              </HorizontalStack>
            </LegacyCard>
            <LegacyCard title="Order ID" sectioned>
              <VerticalStack gap="5">
                <HorizontalStack gap="6">
                  <Thumbnail
                    source="https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg"
                    size="small"
                    alt="Black choker necklace"
                  />
                  <div>
                    <Text as="p">Amazon Order ID</Text>
                    <Text as="p" color="subdued">
                      1987650
                    </Text>
                  </div>
                </HorizontalStack>

                <HorizontalStack gap="6">
                  <Thumbnail
                    source="https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg"
                    size="small"
                    alt="Black choker necklace"
                  />
                  <div>
                    <Text as="p">Shopline Order ID</Text>
                    <Text as="p" color="subdued">
                      1987650
                    </Text>
                  </div>
                </HorizontalStack>
              </VerticalStack>
            </LegacyCard>

            <LegacyCard title="Shipping Address" sectioned>
              <HorizontalStack gap="05">
                <Text as="p">Katiyar Ankush, 7587451258</Text>
                <Text as="p" color="subdued">
                  CedCommerce A 1/259 Gomti Nagar, Lucknow Uttar Pradesh 226010
                </Text>
              </HorizontalStack>
            </LegacyCard>
          </VerticalStack>
        </HorizontalGrid>
      </Card>
    </Page>
  );
};

export default ViewOrder;
