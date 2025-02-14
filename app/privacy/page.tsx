import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#080808] font-extralight text-lg text-[#d0d0d0] py-24 px-8 sm:px-6 lg:px-14">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extralight text-[#c1c1c1] mb-6">Privacy Policy</h1>
        <p>
          At Divine Infotech, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services.
        </p>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2 underline-offset-2">Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>
            We collect personal data that you voluntarily provide to us when you register for a course, use our services, or contact us. This may include your name, email address, phone number, payment information, and any other information you choose to provide.
          </li>
          <li>
            We may also collect non-personal data automatically when you visit our website, such as your IP address, browser type, operating system, and browsing behavior.
          </li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Use of Information</h2>
        <ul className="list-disc ml-6">
          <li>We use your personal data to provide and improve our services, process payments, communicate with you, and comply with legal obligations.</li>
          <li>We may use non-personal data for analytical purposes to better understand how our website is used and to enhance user experience.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Disclosure of Information</h2>
        <ul className="list-disc ml-6">
          <li>We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except as required by law or to provide our services.</li>
          <li>We may share your personal data with trusted third-party service providers who assist us in operating our website, processing payments, and delivering our services.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Data Security</h2>
        <ul className="list-disc ml-6">
          <li>We implement appropriate technical and organizational measures to ensure the security of your personal data against unauthorized access, alteration, disclosure, or destruction.</li>
          <li>While we strive to protect your personal data, we cannot guarantee its absolute security. Any transmission of data is at your own risk.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Your Rights</h2>
        <ul className="list-disc ml-6">
          <li>You have the right to access, update, or delete your personal data that we hold. You may also object to or restrict our processing of your personal data.</li>
          <li>If you wish to exercise any of these rights, please contact us at divineinfotech.edu@gmail.com. We will respond to your request in accordance with applicable laws.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Cookies</h2>
        <ul className="list-disc ml-6">
          <li>Our website uses cookies to enhance user experience and analyze website traffic. Cookies are small text files stored on your device that allow us to recognize your browser and capture certain information.</li>
          <li>You can choose to disable cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Changes to this Privacy Policy</h2>
        <ul className="list-disc ml-6">
          <li>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website.</li>
        </ul>

        <h2 className="text-3xl font-extralight text-[#ffffff] mt-6 mb-2">Contact Information</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at divineinfotech.edu@gmail.com.</p>

        <p className="mt-4">
          By using our website and services, you consent to the terms of this Privacy Policy. If you do not agree with this policy, please do not use our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
