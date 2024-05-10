import React from "react";
import Accordion from "./FAQ";

export default function FAQ() {
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[6%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex  items-center flex-col">
          <h2 className="text-[90px] font-clash font-semibold text-center">
            FAQs
          </h2>
          <p className="text-center font-clash w-[800px] ">
            The catalyst for your Web 3.0 venture to grow and thrive. The
            catalyst for your Web 3.0 venture to The catalyst for your Web 3.0
            The catalyst for your Web 3.0 venture to grow and thrive. The
          </p>
        </div>
        <div className="px-[20%] mt-[6%] flex gap-6 flex-col">
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
        </div>
      </div>
    </div>
  );
}
