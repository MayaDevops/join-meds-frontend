// components/ui/Breadcrumbs.jsx
import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ pageTitle = '' }) => {
  const location = useLocation();

  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-600">
        <li>
          <Link to="/ui/join-meds/user/dashboard" className="flex items-center hover:text-[#00A4E1]">
            <HomeIcon className="h-4 w-4 mr-1" />
            Home
          </Link>
        </li>
        {pageTitle && (
          <>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-medium">{pageTitle}</li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
