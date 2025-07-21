import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { useSelector, useDispatch } from 'react-redux';
import { getDashBoardInfo } from '../selectors';
import { fetchAdminDashboardInfo, fetchDashboardInfo } from '../actions';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import Breadcrumbs from 'pages/common/components/Breadcrumbs';
import { _ } from 'utils/lodash';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';

function Dashboard() {
  const dispatch = useDispatch();
  const dashBoardDetails = useSelector(getDashBoardInfo);
  const { id = '', userType = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    if (!_.isEmpty(id)) {
      setLoading(true); // Start loading
      if (userType === 'SUPERADMIN') {
        dispatch(fetchAdminDashboardInfo());
      } else {
        dispatch(fetchDashboardInfo({ userId: id }));
      }
    }
  }, [id]);

  useEffect(() => {
    if (!_.isEmpty(dashBoardDetails)) {
      setJobList(dashBoardDetails);
      setLoading(false); // Stop loading once data is ready
    }
  }, [dashBoardDetails]);

  return (
    <div className="p-6">
      <Breadcrumbs pageTitle="Dashboard" />
      <h1 className="text-xl font-bold mb-6">Welcome to your Dashboard</h1>

      {loading ? (
        <JoinMedsLoader />
      ) : jobList?.length === 0 ? (
        <div className="w-full col-span-full bg-white text-center shadow-md border border-gray-200 rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">No Applications Found</h2>
          <p className="text-gray-500">There are currently no job postings available. Please check back later!</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {jobList.map((job, index) => (
            <JobCard key={index} {...job} dashBoardDetails={dashBoardDetails} jobId={job?.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
