import { Card, LegacyStack, LegacyTabs, Page, Tabs } from "@shopify/polaris"
import { useState } from "react";
import ToggleButton from "./Toogle";
import "./Pricing.css"
import SlideAdded from "./Slide";
function Pricing(){
    const [selectedTab, setSelectedTab] = useState<string>("faq");
    const [selectTab, setSelectTab] = useState<number>(0);
    const [activeAccordian, setActiveAccordian] = useState<string>();
  
    return(
<>
<Page title="Prcing"
 subtitle="Avail the free trial for the application and choose the best suited pricing plan for requirement">
 <LegacyTabs 
 onSelect={(e)=>setSelectTab(e)}
 tabs={[
          {
            id: "regular",
            content: "Regular Plan",
          },
          {
            id: "business",
            content: "Business Plan",
          },
        ]} selected={selectTab} >
    
    
 
  
   <SlideAdded/>
 
 
 </LegacyTabs>
 </Page>
</>
    )
}
export default Pricing