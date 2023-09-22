import React, { useState } from "react";
import {
  Card,
  Collapsible,
  Page,
  Text,
  Tabs,
  LegacyCard,
  LegacyTabs,
  VerticalStack,
} from "@shopify/polaris";

const FAQTemplate: React.FC = () => {
  const [open, setOpen] = useState<number | undefined>(-1);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };
  const faqData = [
    {
      question: "How do I create an account?",
      answer:
        'To create an account, visit our website and click on the "Sign Up" button. Follow the on-screen instructions to complete the registration process.',
    },
    {
      question: "Can I change my password?",
      answer:
        'Yes, you can change your password by logging into your account and navigating to the "Account Settings" section. From there, you can update your password.',
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, and PayPal for online payments. You can also pay using other methods in our physical stores.",
    },
  ];

  const tabs = [
    {
      id: "all",
      content: "All FAQs",
    },
    {
      id: "account",
      content: "Account",
    },
    {
      id: "payment",
      content: "Payment",
    },
  ];

  const filteredFAQs =
    selectedTab === 0
      ? faqData
      : faqData.filter((faq, index) => {
          if (selectedTab === 1) {
            return faq.question.toLowerCase().includes("account");
          } else if (selectedTab === 2) {
            return faq.question.toLowerCase().includes("payment");
          }
          return false;
        });

  return (
    <Page title="Frequently Asked Questions">
      <LegacyTabs
        tabs={tabs}
        selected={selectedTab}
        onSelect={setSelectedTab}
      />
     <VerticalStack gap="5">
     {filteredFAQs.map((faq, index) => {
        return (
          <div onClick={() => handleToggle(index)} key={index}>
            <LegacyCard key={index} sectioned>
              <Text as="p" variant="headingSm">
                {faq.question}
              </Text>

              <Collapsible
                open={open === index}
                id={`faq-collapsible-${index}`}
              >
                <p>{faq.answer}</p>
              </Collapsible>
            </LegacyCard>
          </div>
        );
      })}
     </VerticalStack>
    </Page>
  );
};

export default FAQTemplate;
