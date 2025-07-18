import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | NISAA SEZ TOWN</title>
      <meta name="description" content="Read NISAA SEZ TOWN's privacy policy to understand how we collect, use and protect your personal information when you visit our website." />
      <meta name="keywords" content="NISAA SEZ TOWN privacy policy, real estate privacy, data protection, NISAA Realtors" />
      <link rel="canonical" href="https://nissasezz.com/privacy-policy" />
    </Helmet>
    <div className="container mx-auto px-4 py-16 max-w-3xl text-primary-foreground">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">At NISAA SEZ TOWN, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or interact with our services.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal Information: Name, email address, phone number, and other contact details provided via forms.</li>
        <li>Usage Data: Information about how you use our website, including IP address, browser type, and pages visited.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To respond to your inquiries and provide requested information.</li>
        <li>To improve our website and services.</li>
        <li>To send you updates, offers, or marketing communications (you may opt out at any time).</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information Sharing</h2>
      <p className="mb-4">We do not sell or rent your personal information. We may share your data with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us at info@nisaarealtors.com.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at info@nisaarealtors.com.</p>
      <p className="mt-8 text-sm text-primary-foreground/60">Effective Date: {new Date().toLocaleDateString()}</p>
    </div>
  </>
);

export default PrivacyPolicy; 