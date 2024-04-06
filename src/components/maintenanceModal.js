import React from 'react';

const MaintenanceModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-20 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl text-white font-bold mb-4">UNDER MAINTENANCE</h2>
        <p className='text-white'>Website is currently under maintenance. Please visit after some time.</p>
      </div>
    </div>
  );
};

export default MaintenanceModal;
