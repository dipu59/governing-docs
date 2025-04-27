import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { GradientTitle } from "../Common/gradient-title";

const faqData = [
  {
    question: "Is My Data Secure?",
    answer:
      "Yes, your data is encrypted and secured with the highest industry standards.",
  },
  {
    question: "What Types Of Documents Can Ai GoverningDocs Generate?",
    answer:
      "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more.",
  },
  {
    question: "Can I Customize The Documents?",
    answer:
      "Absolutely! You can customize every generated document according to your needs.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className=" relative">
      <div className=" relative z-10 max-w-[982px] mx-auto mt-10 mb-[90px] md:mb-[150px]">
          <GradientTitle gradient='Asked Questions' className='text-center mb-[30px] md:mb-[40px]'>Frequently </GradientTitle>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`mb-4 border ${
            openIndex === index ? "border-primary" : "border-transparent"
          } rounded-2xl bg-white faq_shadow transition-all duration-300`}
        >
         <button
  className="w-full flex justify-between items-center p-5 text-left"
  onClick={() => toggleFAQ(index)}
>
  <span className="font-semibold text-lg">{item.question}</span>
  <span className="text-primary">
    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
  </span>
</button>

          {openIndex === index && (
            <div className="px-5 pb-5 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
      </div>
      <img src="/faq.png" alt="" className=" absolute top-0 w-[1713px] max-h-[590px] md:-top-32 -left-20 z-0 " />
    </main>
  );
};
