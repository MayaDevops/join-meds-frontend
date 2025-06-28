import React from 'react';
import JobCard from './JobCard'; // Adjust the path if needed

const jobList = [
  {
    title: 'Doctors MBBS & MD',
    hospital: 'KIMSHEALTH Hospital Trivandrum',
    datePosted: '21 January 2025',
    rate: 'From ₹800 an hour',
    jobType: 'Full-time'
  },
  {
    title: 'Pharmacist',
    hospital: 'Aster Medcity Kochi',
    datePosted: '18 January 2025',
    rate: '₹500/hour',
    jobType: 'Part-time'
  },
  {
    title: 'Nurse BSc',
    hospital: 'Lakeshore Hospital',
    datePosted: '16 January 2025',
    rate: '₹700/hour',
    jobType: 'Full-time'
  }
];

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
