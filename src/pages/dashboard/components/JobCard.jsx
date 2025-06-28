import React from 'react';

function JobCard({ title, hospital, datePosted, rate, jobType }) {
  return (
    <div className="max-w-sm w-full border rounded-lg shadow-md overflow-hidden bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{hospital}</p>
        <p className="text-xs text-gray-500 mt-1">Posted: {datePosted}</p>

        <div className="flex gap-2 mt-4">
          <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {rate}
          </span>
          <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {jobType}
          </span>
        </div>
      </div>

      <div className="flex">
        <button className="flex-1 bg-[#00A4E1] hover:bg-[#0092cc] text-white py-2 text-sm font-semibold">
          Edit
        </button>
        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 text-sm font-semibold">
          Remove
        </button>
      </div>
    </div>
  );
}

export default JobCard;
