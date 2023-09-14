import React, { useCallback, useEffect, useState } from "react";
import {
  ActionList,
  Badge,
  Button,
  ButtonGroup,
  ChoiceList,
  HorizontalStack,
  Icon,
  IndexTable,
  LegacyCard,
  LegacyTabs,
  Page,
  Popover,
  Scrollable,
  Sheet,
  Text,
  TextField,
  Thumbnail,
  VerticalStack,
  useIndexResourceState,
} from "@shopify/polaris";
import {
  MobileCancelMajor,
  ViewMinor,
  ComposeMajor,
  SearchMajor,
  MobileVerticalDotsMajor,
} from "@shopify/polaris-icons";

import "./Products.css";

const ProductList = () => {
  const [selected, setSelected] = useState(0);
  const [tableDataRow, setTableRowData] = useState([]);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all",
      content: "All",
      badge: "100",
      accessibilityLabel: "All",
      panelID: "all",
    },
    {
      id: "active",
      badge: "0",
      content: "Active",
      panelID: "active",
    },
    {
      id: "inactive",
      content: "Inactive",
      panelID: "inactive",
      badge: "0",
    },
    {
      id: "errors",
      content: "Errors",
      panelID: "Errors",
      badge: "0",
    },
    {
      id: "inprogress",
      content: "In progress",
      panelID: "in progress",
      badge: "0",
    },
  ];

  //   sheet code
  const [sheetActive, setSheetActive] = useState(false);
  const [salesChannels] = useState([
    { value: "onlineStore", label: "Online Store" },
    { value: "facebook", label: "Facebook" },
    { value: "googleShopping", label: "Google shopping" },
    { value: "facebookMarketing", label: "Facebook Marketing" },
  ]);
  const [selectedSheet, setSelectedSheet] = useState<string[]>([]);

  const toggleSheetActive = useCallback(
    () => setSheetActive((sheetActive) => !sheetActive),
    []
  );
  const handleSelectedChange = useCallback(
    (value: string[]) => setSelectedSheet(value),
    []
  );

  let selectedSalesChannels: { value: string; label: string }[] = [];
  selectedSheet.forEach((selection) => {
    salesChannels.forEach((channel) => {
      if (channel.value === selection) {
        selectedSalesChannels.push(channel);
      }
    });
  });
  //   sheet code end

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
    fetch("https://dummyjson.com/products?&limit=100")
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

  //Render tabs data
  const renderData = () => {
    switch (tabs[selected].id) {
      case "all":
        return (
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
        );
      case "active":
        return <LegacyCard sectioned>{tabs[selected].content}</LegacyCard>;
      case "inactive":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
      case "errors":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
      case "inprogress":
        return <LegacyCard sectioned> {tabs[selected].content}</LegacyCard>;
    }
  };

  return (
    <Page
      title="Products"
      subtitle="Here’s what’s happening in your store today."
      primaryAction={
        <HorizontalStack gap="4">
          <Button>Upload</Button>
          <Button>Sync Products</Button>
        </HorizontalStack>
      }
    >
      <div className="inte-product__tabs">
        <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <VerticalStack gap="8">
            <HorizontalStack gap="5">
              <div className="inte-search__product">
                <TextField
                  prefix={<Icon source={SearchMajor} color="base" />}
                  label=""
                  placeholder="Search by mobile and laptop"
                  autoComplete="off"
                />
              </div>

              <ButtonGroup segmented>
                <Button>Sync Status</Button>
                <Button>Amazon Lookup</Button>
              </ButtonGroup>
              <Sheet
                activator={<Button onClick={toggleSheetActive}>Filter</Button>}
                open={sheetActive}
                onClose={toggleSheetActive}
                accessibilityLabel="Manage sales channels"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid #DFE3E8",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                      width: "100%",
                    }}
                  >
                    <Text variant="headingMd" as="h2">
                      Filters
                    </Text>
                    <Button
                      accessibilityLabel="Cancel"
                      icon={MobileCancelMajor}
                      onClick={toggleSheetActive}
                      plain
                    />
                  </div>
                  <Scrollable style={{ padding: "1rem", height: "100%" }}>
                    <ChoiceList
                      title="Select a sales channel"
                      name="salesChannelsList"
                      choices={salesChannels}
                      selected={selectedSheet}
                      titleHidden
                      allowMultiple
                      onChange={handleSelectedChange}
                    />
                  </Scrollable>
                  <div
                    style={{
                      alignItems: "center",
                      borderTop: "1px solid #DFE3E8",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                      width: "100%",
                    }}
                  >
                    <>
                      <Button onClick={toggleSheetActive} fullWidth>
                        Clear All
                      </Button>
                      <Button primary onClick={toggleSheetActive} fullWidth>
                        Apply
                      </Button>
                    </>
                  </div>
                </div>
              </Sheet>
            </HorizontalStack>

            {renderData()}
          </VerticalStack>
        </LegacyTabs>
      </div>
    </Page>
  );
};

export default ProductList;
