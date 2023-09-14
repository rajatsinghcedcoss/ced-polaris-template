import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import Panel from "./components/Panel";
import "./App.css";

const App = () => {
  return (
    <>
      <Panel />
      {/* <AppProvider i18n={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/editproduct" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>  */}
    </>
  );
};

export default App;
