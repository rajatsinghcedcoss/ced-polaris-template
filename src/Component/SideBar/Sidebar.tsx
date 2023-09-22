
import { Navigation } from "@shopify/polaris";
import { HomeMinor, CashDollarFilledMajor } from "@shopify/polaris-icons";
;

function SideBar() {
  return (

    <Navigation location={window.location.pathname}>
      <Navigation.Section
        title="Auth"
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
        ]}
      />
      <Navigation.Section
        title="Panel"
        items={[
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
        ]}
      />
    </Navigation>





  );
}
export default SideBar;
