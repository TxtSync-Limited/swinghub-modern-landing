import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How secure is my financial data?",
    answer: "We use bank-level security measures including 256-bit SSL encryption, two-factor authentication, and regular security audits to ensure your data is completely protected."
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes, you can connect unlimited bank accounts, credit cards, and financial institutions to get a complete view of your finances in one place."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide email support for all users and priority support for Pro and Enterprise customers. Our support team typically responds within 24 hours."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your data in various formats including CSV, Excel, and PDF. This feature is available on all plans."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-t border-border first:border-t-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left transition-colors hover:bg-background-subtle/50"
              >
                <span className="text-lg font-medium text-text-primary pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-text-tertiary" />
                  ) : (
                    <Plus className="w-5 h-5 text-text-tertiary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;