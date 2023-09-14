import {
    Collapsible,
    Divider,
  Grid,
  HorizontalGrid,
  HorizontalStack,
  LegacyCard,
  LegacyTabs,
  MediaCard,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { Email, NoSearchResultFound, Token } from "./illustration";
import { useState } from "react";

function Help() {
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
    <Page
      title="Help"
      subtitle="Get instant help from CedCommerce’s team of experts. Solve any problem you encounter."
    >
      <VerticalStack gap={"8"}>
        <Text as="h1" variant="headingSm">
          Reach out to us
        </Text>
        <HorizontalStack>
          <Grid columns={{ lg: 3,sm:3,xs:1 }}>
            <Grid.Cell>
              <LegacyCard sectioned>
                <HorizontalGrid gap="4" columns={2}>
                  <NoSearchResultFound size="100" />
                  <VerticalStack>
                    <Text as="p" variant="headingSm" fontWeight="bold">
                      Schedule Meeting
                    </Text>
                    <Text
                      as="p"
                      variant="headingSm"
                      fontWeight="regular"
                      color="subdued"
                    >
                      View most frequently questions asked queries by merchants.
                    </Text>
                  </VerticalStack>
                </HorizontalGrid>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell>
              <LegacyCard sectioned>
                <HorizontalGrid gap="4" columns={2}>
                  <Email size="100" />
                  <VerticalStack>
                    <Text as="p" variant="headingSm" fontWeight="bold">
                      Schedule Meeting
                    </Text>
                    <Text
                      as="p"
                      variant="headingSm"
                      fontWeight="regular"
                      color="subdued"
                    >
                      View most frequently questions asked queries by merchants.
                    </Text>
                  </VerticalStack>
                </HorizontalGrid>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell>
              <LegacyCard sectioned>
                <HorizontalGrid gap="4" columns={2}>
                  <Token size="100" />
                  <VerticalStack>
                    <Text as="p" variant="headingSm" fontWeight="bold">
                      Schedule Meeting
                    </Text>
                    <Text
                      as="p"
                      variant="headingSm"
                      fontWeight="regular"
                      color="subdued"
                    >
                      View most frequently questions asked queries by merchants.
                    </Text>
                  </VerticalStack>
                </HorizontalGrid>
              </LegacyCard>
            </Grid.Cell>
          </Grid>
        </HorizontalStack>
        <Divider/>

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
      </VerticalStack>
    </Page>
  );
}
export default Help;
