import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className=" bg-[#080808] font-extralight text-lg text-[#d0d0d0] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extralight text-[#ffffff] mb-4 ">
          Refund Policy
        </h1>
        <p className="text-[#d0d0d0]">
          At Divine Infotech, we strive to ensure your satisfaction with our courses and services. If you are not
          satisfied with your purchase, you may be eligible for a refund as outlined in this Refund Policy.
        </p>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Refund Eligibility</h2>
        <ul className="list-disc ml-6 text-[#d0d0d0]">
          <li>
            Any fees or advance payments made by the client are refundable under the following conditions:
            <ul className="list-disc ml-6 text-[#d0d0d0]">
              <li>Cancellations made more than 7 days before the course start date: Full refund.</li>
              <li>Cancellations made within 7 days of the course start date: 50% refund.</li>
              <li>Cancellations made after the course start date: No refund.</li>
            </ul>
          </li>
          <li>If we cancel a course or service, you will be entitled to a full refund of any fees or advance payments made.</li>
        </ul>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Refund Process</h2>
        <ul className="list-disc ml-6 text-[#d0d0d0]">
          <li>To request a refund, please contact us at divineinfotech.edu@gmail.com with your order details and reason for cancellation.</li>
          <li>Refunds will be processed within 5-7 business days of receiving your request and will be issued using the original payment method.</li>
        </ul>

        <h2 className="text-2xl font-extralight text-[#ffffff] mt-6">Contact Information</h2>
        <p className="text-[#d0d0d0]">If you have any questions or concerns regarding this Refund Policy, please contact us at divineinfotech.edu@gmail.com </p>

        <p className="mt-4 text-[#d0d0d0]">
          By enrolling in our courses or using our services, you agree to this Refund Policy. If you do not agree with
          this policy, please do not use our website.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
