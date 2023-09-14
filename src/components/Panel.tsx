import React, { useState, useCallback, useRef } from "react";
import { AppProvider, Frame, Navigation, TopBar } from "@shopify/polaris";
import { HomeMajor, OrdersMajor } from "@shopify/polaris-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Products/ProductList";
import EditProduct from "./Products/EditProduct";
import ViewProduct from "./Products/ViewProduct";

const Panel = () => {
  const skipToContentRef = useRef<HTMLAnchorElement>(null);
  const [userMenuActive, setUserMenuActive] = useState<boolean>(false);
  const [mobileNavigationActive, setMobileNavigationActive] =
    useState<boolean>(false);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail="Nan"
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/product">
      <Navigation.Section
        items={[
          {
            label: "Dashboard",
            icon: HomeMajor,
            onClick: () => {},
          },
          {
            label: "Product",
            url: "/product",
            icon: HomeMajor,
            onClick: () => {},
          },

          {
            label: "Order",
            icon: OrdersMajor,
            onClick: () => {},
          },
        ]}
      />
    </Navigation>
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    url: "#",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <AppProvider i18n={{}}>
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/editproduct" element={<EditProduct />} />
            <Route path="/product/viewproduct" element={<ViewProduct />} />
          </Routes>
        </BrowserRouter>
      </Frame>
    </AppProvider>
  );
};

export default Panel;
