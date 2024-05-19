const Privacy = () => {
  return (
    <div className="container md:w-4/5 shadow-2xl my-8 mx-auto px-4">
      <div>
        <h1 className="text-center text-3xl md:text-5xl  cursor-default font-semibold my-10">Privacy Policy</h1>
      </div>
      <p className="p-4">Welcome to Pay Boost Bills. We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure it remains confidential.</p>
      {[
        { title: "1. Information We Collect", content: "We may collect personal information such as your name, email address, and other data necessary to provide our services. We may also collect non-personal information, such as device information and usage data." },
        { title: "2. How We Use Your Information", content: "We use your information to provide and improve our services, communicate with you, and ensure compliance with legal requirements." },
        { title: "3. Data Security", content: "We implement security measures to protect your information from unauthorized access and disclosure." },
        { title: "4. Cookies and Analytics", content: "We may use cookies and analytics tools to enhance your experience and gather data about our website's usage." },
        { title: "5. Third-Party Links", content: "Our services may contain links to third-party websites. We are not responsible for their privacy practices." },
        { title: "6. Your Choices", content: "You can update or delete your personal information or opt out of communications at any time." },
        { title: "7. Children's Privacy", content: "Our services are not intended for children under 13. We do not knowingly collect their personal information." },
        { title: "8. Updates to this Policy", content: "We may update this Privacy Policy. The latest version will be posted on our website." },
        { title: "9. Contact Us", content: "For questions or concerns about your privacy, please contact us at contact@payboostbills.com." }
      ].map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl p-4">{section.title}</h2>
          <p className="text-lg p-4">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Privacy;
