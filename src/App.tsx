import "./App.css";
import Pricing from "./Component/Pricing/Pricing";
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Component/SideBar/Sidebar";
import StepOne from "./Component/Onboarding1/stepone";
import FAQTemplate from "./Component/Faq/Faq";
import Help from "./Component/Help/Help";
import Onboarding2 from "./Component/Onboarding2/onboarding2";
import Onboarding3 from "./Component/Onboarding3/onboarding3";
import CategoryTemplateListing from "./Component/Category/CategoryTemplateListing";
import CreateCategoryTemplate from "./Component/Category/CreateCategoryTemplate";


function App() {
  return (
    <AppProvider i18n={{}}>
      <BrowserRouter>
        <Frame navigation={<SideBar />}>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/onboarding">
              <Route path="onboarding1" element={<StepOne />} />
              <Route path="onboarding2" element={<Onboarding2 />} />
              <Route path="onboarding3" element={<Onboarding3 />} />
              {/* <Route path="onboarding4" element={<Onboarding4 />} /> */}
            </Route>
            <Route path="/category">
              <Route path="create-category-template" element={<CreateCategoryTemplate />} />
              <Route path="category-template-listing" element={<CategoryTemplateListing />} />
            </Route>
            <Route path="/faq" element={<FAQTemplate />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
