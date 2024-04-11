import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-800 text-white p-4 md:p-24 md:px-36">
      <h1 className="text-xl md:text-3xl font-bold mb-4">Privacy Policy for MetaVault</h1>
      <p className="mb-2">Effective Date: 10/04/2024</p>
      
      <p className="mb-4">
        MetaVault ("we", "us", or "our") operates the MetaVault mobile application ("Service").
        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
      </p>
      
      <h2 className="text-lg md:text-2xl font-semibold mb-3">Information Collection and Use</h2>
      <p className="mb-4">
        We collect several different types of information for various purposes to provide and improve our Service to you.
      </p>
      
      <h3 className="text-md md:text-xl font-semibold mb-2">Types of Data Collected</h3>
      <h4 className="font-semibold">Personal Data</h4>
      <p className="mb-4">
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Cookies and Usage Data</li>
      </ul>
      
      <h4 className="font-semibold">Usage Data</h4>
      <p className="mb-4">
        When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").
      </p>
      
      <h4 className="font-semibold">Tracking & Cookies Data</h4>
      <p className="mb-4">
        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
      </p>
      
      <p className="mb-4">
        Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
      </p>
      
      <p className="mb-4">
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
      </p>
      
      <h2 className="text-lg md:text-2xl font-semibold mb-3">Use of Data</h2>
      <p className="mb-4">
        MetaVault uses the collected data for various purposes:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>
      
      {/* The rest of your content follows the same pattern of structuring and applying Tailwind CSS classes */}
      
    </div>
  );
};

export default Privacy;
