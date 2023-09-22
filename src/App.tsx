import "./App.css";
import Pricing from "./Component/Pricing/Pricing";
import { AppProvider, Frame, TopBar } from "@shopify/polaris";
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
import ConfigurationTab from "./Component/Configuration/Configuration";
import Dashboard from "./Component/Dashboard/Dashboard";
import { useCallback, useState } from "react";
import ViewProduct from "./Component/Products/ViewProduct";
import EditProduct from "./Component/Products/EditProduct";
import ViewOrder from "./Component/Orders/ViewOrder";
import ProductList from "./Component/Products/ProductList";
import OrderList from "./Component/Orders/Order";

const logo = (
  <svg
    width="248"
    height="38"
    viewBox="0 0 248 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.6406 18.3345L38.0192 10.1766L27.5673 0L14.9222 12.2786L8 18.9852L27.4131 37.8869L38.5847 27.0097L29.6406 18.3345ZM12.2322 19.0185L27.5673 4.13737L33.7871 10.1933L27.5331 16.2825L25.0829 13.8969L22.9582 15.9656L25.4084 18.3512L20.0283 23.5897L22.1529 25.6583L27.5331 20.4199L34.3354 27.043L27.396 33.7996L12.2322 19.0185Z"
      fill="url(#paint0_linear_5678_45528)"
    />
    <path
      d="M96.7834 18.418V0H48.5847V18.1343V37.9203L158.45 37.937V18.4013H96.7834V18.418ZM49.7498 1.15112H95.6011V18.418H49.7498V1.15112ZM157.285 36.8025H49.7498V19.5691H95.6183V24.2403V31.7309H96.989V26.8262L99.5078 30.8634H100.142L102.678 26.7594L102.695 31.7309H104.048L104.031 24.2403H102.849L99.8504 29.2118L96.8005 24.2403V19.5691H157.302V36.8025H157.285Z"
      fill="#0A0A0A"
    />
    <path
      d="M56.6558 7.07348C57.0671 6.85661 57.5468 6.73983 58.078 6.73983C58.8833 6.73983 59.5687 7.04012 60.1341 7.62402L61.0593 6.77319C60.6995 6.3728 60.254 6.05583 59.74 5.83895C59.226 5.62207 58.6434 5.52197 58.0094 5.52197C57.2384 5.52197 56.5359 5.6888 55.9019 6.02246C55.268 6.35612 54.7882 6.80656 54.4284 7.39046C54.0686 7.97436 53.8972 8.64168 53.8972 9.37573C53.8972 10.1098 54.0686 10.7771 54.4284 11.361C54.7882 11.9449 55.268 12.412 55.9019 12.729C56.5359 13.0627 57.2384 13.2295 58.0094 13.2295C58.6434 13.2295 59.2088 13.1294 59.74 12.9125C60.2712 12.6956 60.6995 12.3953 61.0593 11.9783L60.1341 11.1274C59.5687 11.7113 58.9004 12.0116 58.078 12.0116C57.5468 12.0116 57.0842 11.8949 56.6558 11.678C56.2446 11.4611 55.9191 11.1441 55.6792 10.7437C55.4393 10.3433 55.3194 9.8929 55.3194 9.39241C55.3194 8.89192 55.4393 8.44148 55.6792 8.04109C55.9019 7.60734 56.2275 7.29036 56.6558 7.07348Z"
      fill="#0A0A0A"
    />
    <path
      d="M69.7969 9.87622H73.515V8.72509H69.7969V6.78988H73.9777V5.62207H68.3748V13.1127H74.1319V11.9449H69.7969V9.87622Z"
      fill="#0A0A0A"
    />
    <path
      d="M87.0168 6.08919C86.3829 5.77222 85.6461 5.62207 84.8236 5.62207H81.4653V13.1127H84.8236C85.6461 13.1127 86.3657 12.9626 87.0168 12.6456C87.6508 12.3286 88.1477 11.8948 88.5075 11.3276C88.8673 10.7604 89.0387 10.1098 89.0387 9.35905C89.0387 8.625 88.8673 7.95768 88.5075 7.39046C88.1477 6.82324 87.6508 6.38949 87.0168 6.08919ZM87.2396 10.7104C87.0168 11.0941 86.6741 11.3944 86.2458 11.6112C85.8174 11.8281 85.3205 11.9282 84.7551 11.9282H82.8875V6.78988H84.7551C85.3205 6.78988 85.8174 6.88997 86.2458 7.10685C86.6741 7.32373 86.9997 7.62402 87.2396 8.00773C87.4623 8.39144 87.5823 8.84188 87.5823 9.35905C87.5823 9.87622 87.4795 10.3267 87.2396 10.7104Z"
      fill="#0A0A0A"
    />
    <path
      d="M56.6558 25.6916C57.0671 25.4748 57.5468 25.358 58.078 25.358C58.8833 25.358 59.5687 25.6583 60.1341 26.2422L61.0593 25.3914C60.6995 24.991 60.254 24.674 59.74 24.4571C59.226 24.2402 58.6434 24.1401 58.0094 24.1401C57.2384 24.1401 56.5359 24.307 55.9019 24.6406C55.268 24.9743 54.7882 25.4247 54.4284 26.0086C54.0686 26.5925 53.8972 27.2598 53.8972 27.9939C53.8972 28.7279 54.0686 29.3953 54.4284 29.9792C54.7882 30.5631 55.268 31.0302 55.9019 31.3472C56.5359 31.6808 57.2384 31.8476 58.0094 31.8476C58.6434 31.8476 59.2088 31.7476 59.74 31.5307C60.2712 31.3138 60.6995 31.0135 61.0593 30.5964L60.1341 29.7456C59.5687 30.3295 58.9004 30.6298 58.078 30.6298C57.5468 30.6298 57.0842 30.513 56.6558 30.2961C56.2446 30.0793 55.9191 29.7623 55.6792 29.3619C55.4393 28.9615 55.3194 28.5111 55.3194 28.0106C55.3194 27.5101 55.4393 27.0596 55.6792 26.6593C55.9019 26.2255 56.2275 25.9085 56.6558 25.6916Z"
      fill="#0A0A0A"
    />
    <path
      d="M73.2584 24.6238C72.6245 24.2901 71.922 24.1233 71.1338 24.1233C70.3456 24.1233 69.6431 24.2901 69.0091 24.6238C68.3752 24.9574 67.8783 25.4079 67.5185 26.0085C67.1586 26.5924 66.9873 27.2597 66.9873 27.977C66.9873 28.7111 67.1586 29.3617 67.5185 29.9456C67.8783 30.5295 68.3752 30.9967 69.0091 31.3303C69.6431 31.664 70.3456 31.8308 71.1338 31.8308C71.922 31.8308 72.6245 31.664 73.2584 31.3303C73.8924 30.9967 74.3893 30.5462 74.7491 29.9623C75.1089 29.3784 75.2803 28.7111 75.2803 27.977C75.2803 27.243 75.1089 26.5757 74.7491 25.9918C74.3893 25.4246 73.8924 24.9574 73.2584 24.6238ZM73.4983 29.3284C73.2584 29.7288 72.9329 30.0457 72.5388 30.2626C72.1276 30.4795 71.665 30.5963 71.1509 30.5963C70.6369 30.5963 70.1743 30.4795 69.7631 30.2626C69.3518 30.0457 69.0263 29.7288 68.8035 29.3284C68.5637 28.928 68.4437 28.4775 68.4437 27.977C68.4437 27.4766 68.5637 27.0261 68.8035 26.6257C69.0434 26.2253 69.3518 25.9084 69.7631 25.6915C70.1743 25.4746 70.6369 25.3578 71.1509 25.3578C71.665 25.3578 72.1276 25.4746 72.5388 25.6915C72.95 25.9084 73.2756 26.2253 73.4983 26.6257C73.7382 27.0261 73.8581 27.4766 73.8581 27.977C73.841 28.4775 73.7211 28.928 73.4983 29.3284Z"
      fill="#0A0A0A"
    />
    <path
      d="M88.4736 24.2402L85.4579 29.1951L82.408 24.2402H81.2429V31.7309H82.5965V26.8261L85.1324 30.88H85.7664L88.2851 26.7594L88.3022 31.7309H89.6558L89.6387 24.2402H88.4736Z"
      fill="#0A0A0A"
    />
    <path
      d="M115.751 30.5631H111.398V28.4944H115.117V27.3599H111.398V25.408H115.596V24.2402H109.976V31.7309H115.751V30.5631Z"
      fill="#0A0A0A"
    />
    <path
      d="M123.118 29.5454H124.849C124.986 29.5454 125.072 29.5454 125.14 29.5287L126.716 31.7142H128.258L126.494 29.2618C127.025 29.0616 127.419 28.7613 127.71 28.3442C127.984 27.9438 128.139 27.46 128.139 26.8928C128.139 26.3423 128.001 25.8752 127.744 25.4748C127.487 25.0744 127.093 24.7741 126.614 24.5572C126.117 24.3403 125.534 24.2402 124.866 24.2402H121.696V31.7309H123.118V29.5454ZM123.118 25.408H124.78C125.397 25.408 125.877 25.5415 126.202 25.7917C126.528 26.042 126.682 26.409 126.682 26.8928C126.682 27.3766 126.528 27.7436 126.202 27.9939C125.877 28.2608 125.414 28.3776 124.78 28.3776H123.118V25.408Z"
      fill="#0A0A0A"
    />
    <path
      d="M136.227 31.3304C136.861 31.6641 137.564 31.8309 138.335 31.8309C138.969 31.8309 139.534 31.7308 140.065 31.5139C140.596 31.297 141.025 30.9967 141.385 30.5797L140.459 29.7288C139.894 30.3127 139.226 30.613 138.403 30.613C137.872 30.613 137.409 30.4962 136.981 30.2794C136.57 30.0625 136.244 29.7455 136.004 29.3451C135.764 28.9447 135.645 28.4943 135.645 27.9938C135.645 27.4933 135.764 27.0429 136.004 26.6425C136.244 26.2421 136.57 25.9251 136.981 25.7082C137.392 25.4914 137.872 25.3746 138.403 25.3746C139.208 25.3746 139.894 25.6749 140.459 26.2588L141.385 25.408C141.025 25.0076 140.579 24.6906 140.065 24.4737C139.551 24.2568 138.969 24.1567 138.335 24.1567C137.564 24.1567 136.861 24.3236 136.227 24.6572C135.593 24.9909 135.113 25.4413 134.754 26.0252C134.394 26.6091 134.222 27.2764 134.222 28.0105C134.222 28.7445 134.394 29.4119 134.754 29.9958C135.113 30.5463 135.593 31.0134 136.227 31.3304Z"
      fill="#0A0A0A"
    />
    <path
      d="M153.103 30.5631H148.768V28.4944H152.487V27.3599H148.768V25.408H152.949V24.2402H147.329V31.7309H153.103V30.5631Z"
      fill="#0A0A0A"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5678_45528"
        x1="7.98535"
        y1="18.9601"
        x2="38.5611"
        y2="18.9601"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#413BBC" />
        <stop offset="0.47" stopColor="#383365" />
        <stop offset="1" stopColor="#0A0A0A" />
      </linearGradient>
    </defs>
  </svg>
);

const logoObj = {
  width: 124,
  topBarSource: logo,
  contextualSaveBarSource: logo,
  url: "#",
};

function App() {
  const [mobileNavigationActive, setMobileNavigationActive] =
    useState<boolean>(false);
  const [userMenuActive, setUserMenuActive] = useState<boolean>(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
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

  return (
    <AppProvider i18n={{}}>
      <BrowserRouter>
        <Frame
          //  logo={logoObj}
          navigation={<SideBar />}
          topBar={topBarMarkup}
        >
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/onboarding">
              <Route path="onboarding1" element={<StepOne />} />
              <Route path="onboarding2" element={<Onboarding2 />} />
              <Route path="onboarding3" element={<Onboarding3 />} />
              {/* <Route path="onboarding4" element={<Onboarding4 />} /> */}
            </Route>
            <Route path="/category">
              <Route
                path="create-category-template"
                element={<CreateCategoryTemplate />}
              />
              <Route
                path="category-template-listing"
                element={<CategoryTemplateListing />}
              />
            </Route>
            <Route path="/product" element={<ProductList />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />

            <Route path="/order" element={<OrderList />} />

            <Route path="/vieworder" element={<ViewOrder />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="configuration" element={<ConfigurationTab />} />
            <Route path="/faq" element={<FAQTemplate />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
