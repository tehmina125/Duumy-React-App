import React, { useState } from 'react';

const Navbar = () => {
  const [showTeamRecords, setShowTeamRecords] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const teamRecords = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Project Manager' },
  ];

  const companyInfo = (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">About Daraz</h2>
      <p className="text-gray-800">
        Daraz is the leading e-commerce platform in South Asia, offering a wide range of products from electronics to fashion. Founded in 2012, it provides a convenient shopping experience through its user-friendly mobile app and website.
      </p>
      <p className="text-gray-800">
        With a commitment to customer satisfaction, Daraz offers various payment methods, including cash on delivery, and ensures timely delivery of products. The platform frequently runs promotional campaigns and discounts, making it a popular choice among online shoppers.
      </p>
      <p className="text-gray-800">
        Daraz also supports local sellers by providing them with a platform to reach a larger audience, thereby contributing to the growth of small businesses in the region.
      </p>
    </div>
  );

  const handleTeamClick = () => {
    setShowTeamRecords((prev) => !prev);
    setShowCompanyInfo(false); // Hide company info when showing team records
  };

  const handleCompanyClick = () => {
    setShowCompanyInfo((prev) => !prev);
    setShowTeamRecords(false); // Hide team records when showing company info
  };

  return (
    <nav className="bg-pink-500 dark:bg-pink-700">
      <div className="max-w-screen-xl px-6 py-5 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-bold mt-0 space-x-8 rtl:space-x-reverse text-2xl">
            <li>
              <a href="/home" className="text-gray-900 dark:text-white hover:underline">Home</a>
            </li>
            <li>
              <button
                onClick={handleCompanyClick}
                className="text-gray-900 dark:text-white hover:underline cursor-pointer"
              >
                Company
              </button>
            </li>
            <li>
              <button
                onClick={handleTeamClick}
                className="text-gray-900 dark:text-white hover:underline cursor-pointer"
              >
                Team
              </button>
            </li>
            <li>
              <a href="/features" className="text-gray-900 dark:text-white hover:underline">Features</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 p-4">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl font-bold">Hello, Tailwind CSS!</h1>
        </header>
        <main className="mt-4">
          <p className="text-gray-700">This is a simple example using Tailwind CSS.</p>
        </main>
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
        </blockquote>
        {showTeamRecords && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Team Records</h2>
            <ul className="mt-2">
              {teamRecords.map(record => (
                <li key={record.id} className="text-gray-800">
                  {record.name} - {record.role}
                </li>
              ))}
            </ul>
          </div>
        )}
        {showCompanyInfo && companyInfo} {/* Render company info conditionally */}
      </div>
    </nav>
  );
};

export default Navbar;
