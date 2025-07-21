import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportTable from 'pages/common/components/ReportTable';
import { getAllJobReports } from '../selectors';
import { fetchReportAppliedJobDetails } from '../actions';
import { _ } from 'utils/lodash';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import { formatDate } from 'utils/date';
import Download from '../../../assets/gifs/download.gif';
import { actions as commonActions } from 'pages/common/slice';
import { saveAs } from 'file-saver';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { useState } from 'react';

const Reports = () => {
    const dispatch = useDispatch();
    const { id = '', userType = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReports = async () => {
            setLoading(true);
            try {
                if (userType === 'SUPERADMIN') {
                    await dispatch(fetchReportAppliedJobDetails());
                } else {
                    await dispatch(fetchReportAppliedJobDetails({ orgId: id }));
                }
            } finally {
                setLoading(false);
            }
        };

        if (!_.isEmpty(id)) {
            fetchReports();
        }
    }, [id, dispatch]);


    const appliedJobDetails = useSelector(getAllJobReports);

    const handleResumeDownload = async (resumeId, fullName = 'resume') => {
        if (!resumeId) return;

        setLoading(true);
        try {
            const response = await fetch(`https://api.joinmeds.in/api/resume/${resumeId}`);
            if (!response.ok) throw new Error('Failed to fetch resume');

            const blob = await response.blob();

            const safeName = fullName
                .toString()
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^\w\-]/g, '');

            saveAs(blob, `resume_${safeName}.pdf`);

            dispatch(commonActions.setAlertToast({
                open: true,
                variant: 'success',
                message: 'Resume downloaded successfully',
            }));
        } catch (error) {
            alert('Failed to download resume. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    const columns = [
        { key: 'fullname', label: 'Name' },
        { key: 'emailMobile', label: 'Mobile' },
        { key: 'email', label: 'Email' },
        { key: 'hiringFor', label: 'Hiring For' },
        {
            key: 'submittedAt',
            label: 'Submitted At',
            render: (value) => formatDate(value),
        },
        {
            key: 'resumeId',
            label: 'Resume',
            width: '180px',
            render: (resumeId) => {
                const applicant = appliedJobDetails.find(item => item.resumeId === resumeId);
                const fullName = applicant?.fullname || 'resume';

                return (
                    <div className="flex items-center justify-center cursor-pointer">
                        <button
                            onClick={() => handleResumeDownload(resumeId, fullName)}
                            className="text-blue-600 hover:text-blue-800 p-2 rounded-full cursor-pointer"
                            title="Download Resume"
                        >
                            <img
                                src={Download}
                                alt="Download Icon"
                                className="h-6 w-6 object-contain"
                            />
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <div className="p-4">
            {loading && <JoinMedsLoader />}
            <ReportTable
                title="Applied Jobs"
                columns={columns}
                data={appliedJobDetails}
                rowsPerPage={10}
            />
        </div>
    );
};

export default Reports;
