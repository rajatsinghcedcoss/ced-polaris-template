import { Navigation } from "@shopify/polaris";
import { HomeMinor, CashDollarFilledMajor } from "@shopify/polaris-icons";
function SideBar() {
  return (
    <Navigation location={window.location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/onboarding/onboarding1",
            excludePaths: ["/"],
            label: "Onboarding1",
          },
          {
            url: "/onboarding/onboarding2",
            excludePaths: ["/"],
            label: "Onboarding2",
          },
          {
            url: "/onboarding/onboarding3",
            excludePaths: ["/"],
            label: "Onboarding3",
          },

          {
            url: "/dashboard",
            label: "Dashboard",
          },
          {
            url: "/category/create-category-template",
            label: "Category Template",
          },
          {
            url: "/category/category-template-listing",
            label: "Category Listing",
          },
          {
            url: "/configuration",
            label: "Configuration",
          },
          {
            url: "/product",
            label: "Product List",
          },

          {
            url: "/order",
            label: "Order List",
          },

          {
            url: "/pricing",
            label: "Pricing",
            icon: CashDollarFilledMajor,
          },
          {
            url: "/home",
            label: "Home",
            icon: HomeMinor,
          },
          {
            url: "/faq",
            label: "FAQ",
            icon: HomeMinor,
          },
          {
            url: "/help",
            label: "Help",
            icon: HomeMinor,
          },
        ]}
      />
    </Navigation>
  );
}
export default SideBar;
