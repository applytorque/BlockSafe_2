import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const ApkDownloader = () => {
  const [latestVersion, setLatestVersion] = useState(null);
  const [apkUrl, setApkUrl] = useState('/android/metavault.apk');

  useEffect(() => {
    const fetchVersionInfo = async () => {
      try {
        const response = await fetch('/version.json');
        const data = await response.json();
        setLatestVersion(data.latestVersion);
      } catch (error) {
        console.error('Error fetching version info:', error);
      }
    };

    fetchVersionInfo();
  }, []);

  return (
    <>
    <Helmet>
      <title>Download Metavault App</title>
      <meta name="description" content="Download the latest version of the Personal Vault app." />
      <link rel="canonical" href="https://metavault.proandroid/metavault.apk" />
    </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-2xl font-extrabold text-white mb-8">DOWNLOAD METAVAULT APP</h1>
      {latestVersion && (
        <div className="bg-gradient-to-r from-sky-500 via-30% to-sky-500 to-90% shadow-lg rounded-3xl p-8 text-center max-w-md w-full">
          <p className="text-xl text-gray-900 mb-4">
            Latest Version: <span className="font-semibold">{latestVersion}</span>
          </p>
          <a 
            href={apkUrl} 
            download 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-full hover:from-green-500 hover:to-blue-500 transition duration-300"
          >
            Download APK
          </a>
        </div>
      )}
    </div>
  </>
  );
};

export default ApkDownloader;
