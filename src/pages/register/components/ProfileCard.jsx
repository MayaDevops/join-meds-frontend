import React from 'react';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import { _ } from 'utils/lodash';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getProfileDetails } from '../selectors';
// import { fetchProfileDetails } from '../actions';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import Breadcrumbs from 'pages/common/components/Breadcrumbs';

const ProfilePage = () => {

  // const dispatch = useDispatch();

  const { orgName = '', inCorporationNo = '',
    officialEmail = '', emailMobile = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};

  // useEffect(() => {
  //   if (!_.isEmpty(id)) {
  //     dispatch(fetchProfileDetails({ userId: id }));
  //   }
  // }, [id]);

  // const profileDetails = useSelector(getProfileDetails);
  // console.log(orgName, inCorporationNo, '111111111111111111111');

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <Breadcrumbs pageTitle="Profile" />

      <div className="w-full max-w-full mx-auto bg-white border border-teal-100 rounded-2xl shadow-md p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
            {/* <img
              src={avatar}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-teal-500 shadow"
            /> */}
            <BuildingLibraryIcon className="w-40 h-40 text-[#00B5D8]" />
            {/* <button className="mt-4 text-teal-600 hover:text-teal-800 flex items-center space-x-1">
              <PencilIcon className="w-5 h-5" />
              <span>Edit Photo</span>
            </button> */}
          </div>

          {/* Info Section */}
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">{orgName}</h1>
                {/* <p className="text-teal-600 text-lg">{role}</p>
                <p className="text-gray-500 text-sm">{location}</p> */}
              </div>
              {/* <button className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 transition-all">
                Edit Profile
              </button> */}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black-700 text-md">
              <div className="flex justify-right gap-2">
                <span className="font-medium ">Email:</span>
                <span>{officialEmail}</span>
              </div>
              <div className="flex justify-right gap-2">
                <span className="font-medium">Phone:</span>
                <span>{emailMobile}</span>
              </div>
              {/* Add more fields as needed */}
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 gap-4 text-black-700 text-md">
              <div className="flex justify-right gap-2">
                <span className="font-medium">Incorporation No:</span>
                <span>{inCorporationNo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
