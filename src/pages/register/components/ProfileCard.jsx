import React from 'react';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import Breadcrumbs from 'pages/common/components/Breadcrumbs';
import corporate from '../../../assets/images/corporate.png';

const LabelValue = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
      <span className="font-medium text-gray-700 min-w-[160px] shrink-0">
        {label}
      </span>
      <span className="text-gray-800 break-all">
        {value || '-'}
      </span>
    </div>
  );
};

const ProfilePage = () => {

  const {
    orgName = '',
    inCorporationNo = '',
    officialEmail = '',
    emailMobile = ''
  } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <Breadcrumbs pageTitle="Profile" />

      <div className="w-full max-w-full mx-auto bg-white border border-teal-100 rounded-2xl shadow-md p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10">

          {/* Avatar */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={corporate}
              alt="Profile"
              className="w-36 h-36 shadow"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-semibold text-gray-800">
              {orgName}
            </h1>

            {/* Fields */}
            <div className="mt-8 space-y-5 text-md">

              <LabelValue
                label="Email:"
                value={officialEmail}
              />

              <LabelValue
                label="Phone:"
                value={emailMobile}
              />

              <LabelValue
                label="Incorporation No:"
                value={inCorporationNo}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;