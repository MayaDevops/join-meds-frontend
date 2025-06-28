import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // ✅ Optional: Replace with your icon source
import { useDispatch } from 'react-redux';
import { actions as commonActions } from 'pages/common/slice';
import { t } from 'pages/common/components';

function JobCard({ title, hospital, datePosted, rate, jobType }) {
  const dispatch = useDispatch();

   const removeApplication = () => {  

      // dispatch(saveSchoolBasicInfoDetails());
    
  };

  const onRemove = () => {
    dispatch(commonActions.setAlertAction({
      open: true,
      variant: 'default',
      message: t('Do you want to remove this job?'),
      title: title,
      backwardActionText: t('No'),
      forwardActionText: t('Yes'),
      forwardAction: () => removeApplication(),
      backwardAction: () => dispatch(commonActions.setAlertAction({}))
    }));
  };

  return (
    <div className="max-w-sm w-full border rounded-lg shadow-md overflow-hidden bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{hospital}</p>
        <p className="text-xs text-gray-500 mt-1">Posted: {datePosted}</p>

        <div className="flex gap-2 mt-3">
          <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {rate}
          </span>
          <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {jobType}
          </span>
        </div>
      </div>

      <div className="flex border-t">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#00A4E1] hover:bg-[#0092cc] text-white py-2 text-sm font-semibold cursor-pointer">
          <PencilIcon className="h-4 w-4" />
          Edit
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#ff8080] hover:bg-[#ff4d4d] text-white py-2 text-sm font-semibold cursor-pointer"
          onClick={onRemove}>
          <TrashIcon className="h-4 w-4" />
          Remove
        </button>
      </div>
    </div>
  );
}

export default JobCard;
