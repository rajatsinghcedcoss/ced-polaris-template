import React, { useCallback, useEffect, useState } from "react";
import {
  ActionList,
  Badge,
  Button,
  ChoiceList,
  Divider,
  DropZone,
  HorizontalStack,
  Icon,
  IndexTable,
  LegacyCard,
  LegacyTabs,
  Link,
  Page,
  Popover,
  Tag,
  Text,
  TextField,
  Thumbnail,
  VerticalStack,
  useIndexResourceState,
} from "@shopify/polaris";
import {
  ViewMinor,
  ComposeMajor,
  MobileVerticalDotsMajor,
  PlusMinor,
} from "@shopify/polaris-icons";
import "./EditProduct.css";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigatin = useNavigate();
  const [selected, setSelected] = useState(0);
  const [tableDataRow, setTableRowData] = useState([]);
  const [choiceList, setChoiceList] = useState<string[]>(["ShopifyTitle"]);

  const handleChange = useCallback(
    (value: string[]) => setChoiceList(value),
    []
  );

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "title",
      content: "Title",
      accessibilityLabel: "title",
      panelID: "title",
    },
    {
      id: "description",
      content: "Description",
      panelID: "description",
    },
    {
      id: "imageMedia",
      content: "Image & Media",
      panelID: "imageMedia",
    },
    {
      id: "productCategory",
      content: "Product Category",
      panelID: "productCategory",
    },
    {
      id: "attributeMapping",
      content: "Attribute Mapping",
      panelID: "attributeMapping",
    },
    {
      id: "variation",
      content: "Variation",
      panelID: "variation",
    },
  ];

  //table data
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(tableDataRow);

  const [active, setActive] = useState(-1);
  const actions = (id: number) => {
    return (
      <Popover
        active={active === id}
        onClose={() => setActive(-1)}
        activator={
          <Button
            onClick={() => setActive(id)}
            icon={<Icon source={MobileVerticalDotsMajor} color="base" />}
          />
        }
      >
        <ActionList
          items={[
            {
              content: "Edit Product",
              icon: ComposeMajor,
              onAction() {
                alert("clicked");
                console.log(id, "edit");
              },
            },
            {
              content: "View Product",
              icon: ViewMinor,
              onAction() {
                alert("clicked");
                console.log(id, "view");
              },
            },
          ]}
        />
      </Popover>
    );
  };

  const rowMarkup = tableDataRow.map(
    (
      {
        id,
        image,
        title,
        details,
        status,
        price,
        quantity,
        activity,
        template,
      },
      index
    ) => (
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
        <IndexTable.Cell>{details}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge status="info">{status}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <VerticalStack>
            <Text as="p">${price}</Text>
            <Text as="p">USD</Text>
          </VerticalStack>
        </IndexTable.Cell>
        <IndexTable.Cell>{quantity}</IndexTable.Cell>
        <IndexTable.Cell>{activity}</IndexTable.Cell>
        <IndexTable.Cell>{template}</IndexTable.Cell>
        <IndexTable.Cell>{actions(id)}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  /// table data end

  // fetch api data
  useEffect(() => {
    let holdAutoData: any = [];
    let holdData: any = [];
    // setDataLoading(true);
    fetch("https://dummyjson.com/products?&limit=1")
      .then((res) => res.json())
      .then((json) => {
        // setDataLoading(false);
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
                    details: <div>hghh</div>,
                    status: "Active",
                    price: items.price,
                    quantity: <Text as="p">1000</Text>,
                    activity: <Text as="p">No recent activities</Text>,
                    template: <Text as="p">Template</Text>,
                    action: <Text as="p">Template</Text>,
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
        // setSelectedRowKey(selectedRowKeys);
        setTableRowData(holdData);
      });
  }, []);

  const renderChildren = useCallback(
    (isSelected: boolean) =>
      isSelected && (
        <Tag> Beauty & Personal CareMakeup &gt; Body &gt; Makeup</Tag>
      ),
    []
  );
  //Render tabs data
  const renderData = () => {
    switch (tabs[selected].id) {
      case "title":
        return (
          <VerticalStack gap="1">
            <LegacyCard sectioned>
              <VerticalStack gap="3">
                <div>
                  <Text as="p" variant="headingSm">
                    Product Title
                  </Text>
                  <Text color="subdued" as="p">
                    Set a suitable custom title for the product or use the same
                    one from the Shopify store.
                  </Text>
                </div>
                <ChoiceList
                  choices={[
                    {
                      label: "Set Shopify title as TikTok Shop Title",
                      value: "ShopifyTitle",
                    },
                    {
                      label: "Set Custom TikTok Shop Title",
                      value: "CustomTikTok",
                    },
                  ]}
                  selected={choiceList}
                  onChange={handleChange}
                  title={undefined}
                />
              </VerticalStack>
            </LegacyCard>

            <LegacyCard sectioned>
              <VerticalStack gap="3">
                <div>
                  <Text as="p" variant="headingSm">
                    Description
                  </Text>
                  <Text color="subdued" as="p">
                    Mention a detailed yet precise Product Description embedded
                    with ‘Keywords’ that define the Product appropriately here.
                    To know more, check out this guide on
                    <Link>Tiktok’s Product description Guidelines</Link>
                  </Text>
                </div>
                <ChoiceList
                  choices={[
                    {
                      label:
                        "Set Shopify Description as TikTok Shop Description",
                      value: "ShopifyDescription",
                    },
                    {
                      label: "Set Custom TikTok Shop Description",
                      value: "CustomTikTok",
                    },
                  ]}
                  selected={choiceList}
                  onChange={handleChange}
                  title={undefined}
                />
              </VerticalStack>
            </LegacyCard>

            <LegacyCard sectioned>
              <VerticalStack gap="6">
                <VerticalStack gap="3">
                  <div>
                    <Text as="p" variant="headingSm">
                      Image & Media
                    </Text>
                    <Text color="subdued" as="p">
                      Add images by upload files or by image URLs
                    </Text>
                  </div>
                  <LegacyCard sectioned>
                    <VerticalStack gap="4">
                      <Text color="subdued" as="p">
                        Current Images
                      </Text>
                      <HorizontalStack gap="3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                          return (
                            <Thumbnail
                              source="https://i.dummyjson.com/data/products/1/2.jpg"
                              alt=""
                            />
                          );
                        })}
                      </HorizontalStack>
                      <HorizontalStack align="center">
                        <Button icon={<Icon source={PlusMinor} color="base" />}>
                          Show more
                        </Button>
                      </HorizontalStack>
                    </VerticalStack>
                  </LegacyCard>
                </VerticalStack>
                <DropZone variableHeight>
                  <HorizontalStack align="center">
                    <Text as="p" variant="headingXs">
                      Drag
                    </Text>
                  </HorizontalStack>
                </DropZone>

                <Divider />

                <HorizontalStack>
                  <TextField
                    label=""
                    autoComplete="off"
                    placeholder="Enter image url"
                  />
                  <Button primary>Add image</Button>
                </HorizontalStack>
              </VerticalStack>
            </LegacyCard>

            <LegacyCard sectioned>
              <VerticalStack gap="3">
                <div>
                  <Text as="p" variant="headingSm">
                    Product Category
                  </Text>
                  <Text color="subdued" as="p">
                    Choose the category of TikTok Shop that best defines your
                    products.
                  </Text>
                </div>
                <ChoiceList
                  choices={[
                    {
                      label: "Set Shopify title as TikTok Shop Title",
                      value: "Product1",
                      renderChildren,
                    },
                    {
                      label: "Set Custom TikTok Shop Title",
                      value: "Product2",
                    },
                  ]}
                  selected={choiceList}
                  onChange={handleChange}
                  title={undefined}
                />
              </VerticalStack>
            </LegacyCard>

            <LegacyCard sectioned>
              <IndexTable
                resourceName={resourceName}
                itemCount={tableDataRow.length}
                selectedItemsCount={
                  allResourcesSelected ? "All" : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  { title: "Image" },
                  { title: "Title" },
                  { title: "Details" },

                  { title: "Status" },
                  { title: "Price" },
                  { title: "Quantity" },

                  { title: "Activity" },
                  { title: "Template" },
                  { title: "Action" },
                ]}
                lastColumnSticky
              >
                {rowMarkup}
              </IndexTable>
            </LegacyCard>
          </VerticalStack>
        );
      case "description":
        return <LegacyCard sectioned>{tabs[selected].content}</LegacyCard>;
      case "imageMedia":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
      case "productCategory":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
      case "attributeMapping":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
      case "variation":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
    }
  };

  return (
    <Page
      title="Product Title"
      backAction={{
        content: "Products",
        onAction: () => navigatin("/product"),
      }}
      subtitle="Link here"
      primaryAction={{ content: "Save", disabled: true }}
    >
      <div className="inte-editProduct__tabs">
        <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          {renderData()}
        </LegacyTabs>
      </div>
    </Page>
  );
};

export default EditProduct;
