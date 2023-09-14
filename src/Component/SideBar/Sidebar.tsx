import { AppProvider,Frame, Navigation } from "@shopify/polaris";
import { HomeMinor,   CashDollarFilledMajor } from "@shopify/polaris-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Pricing from "../Pricing/Pricing";

function SideBar() {
  return (
    
        <Navigation location="/">
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
                excludePaths: ["#"],
                label: "Pricing",
                icon: CashDollarFilledMajor,
              },
              {
                url: "#",
                excludePaths: ["#"],
                label: "Home",
                icon: HomeMinor,
              },
              {
                url: "/faq",
                excludePaths: ["#"],
                label: "FAQ",
                icon: HomeMinor,
              },
              {
                url: "/help",
                excludePaths: ["#"],
                label: "Help",
                icon: HomeMinor,
              },
              {
                url:"/category/create-category-template",
                excludePaths:['#'],
                label : "Category Template",
              },
              {
                url:"/category/category-template-listing",
                excludePaths:['#'],
                label : "Category Listing",
              }
            ]}
          />
        </Navigation>
    
    
        
      
  
  );
}
export default SideBar;
