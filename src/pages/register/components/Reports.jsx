import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportTable from 'pages/common/components/ReportTable';
import { getAllJobReportsContent, getAllJobReportsPagination } from '../selectors';
import { fetchReportAppliedJobDetails } from '../actions';
import { _ } from 'utils/lodash';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import { formatDate } from 'utils/date';
import Download from '../../../assets/gifs/download.gif';
import { actions as commonActions } from 'pages/common/slice';
import { saveAs } from 'file-saver';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';

const Reports = () => {
    const dispatch = useDispatch();
    const { id = '', orgId = '', userType = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const pageSize = 10;

    const appliedJobDetails = useSelector(getAllJobReportsContent);
    const pagination = useSelector(getAllJobReportsPagination);

    const fetchReports = useCallback(async (page = 0, keyword = '') => {
        setLoading(true);
        try {
            const params = { page, size: pageSize };
            if (userType !== 'SUPERADMIN') {
                params.orgId = orgId;
            }
            if (keyword?.trim()) {
                params.keyword = keyword.trim();
            }
            await dispatch(fetchReportAppliedJobDetails(params));
        } finally {
            setLoading(false);
        }
    }, [userType, orgId, dispatch]);

    // Debounce search input by 500ms
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchText);
            setCurrentPage(0);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchText]);

    useEffect(() => {
        if (!_.isEmpty(id)) {
            fetchReports(currentPage, debouncedSearch);
        }
    }, [id, currentPage, debouncedSearch]);

    const handleResumeDownload = async (resumeId, fullName = 'resume') => {
        if (!resumeId || resumeId === 'null') return;

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
            render: (resumeId, row) => {
                const fullName = row?.fullname || 'resume';
                const hasResume = resumeId && resumeId !== 'null';

                return (
                    <div className="flex items-center justify-center cursor-pointer">
                        <button
                            onClick={() => hasResume && handleResumeDownload(resumeId, fullName)}
                            className={`p-2 rounded-full ${hasResume ? 'text-blue-600 hover:text-blue-800 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}`}
                            title={hasResume ? 'Download Resume' : 'No Resume'}
                            disabled={!hasResume}
                        >
                            <img
                                src={Download}
                                alt="Download Icon"
                                className={`h-6 w-6 object-contain ${!hasResume ? 'opacity-30 grayscale' : ''}`}
                            />
                        </button>
                    </div>
                );
            }
        },
    ];

    const totalPages = pagination?.totalPages || 0;
    const totalElements = pagination?.totalElements || 0;

    return (
        <div className="p-4">
            {loading && <JoinMedsLoader />}
            <ReportTable
                title="Applied Jobs"
                columns={columns}
                data={appliedJobDetails}
                rowsPerPage={pageSize}
                searchText={searchText}
                onSearchChange={(val) => setSearchText(val)}
            />
            {totalPages > 1 && (
                <div className="flex items-center justify-between mt-4 px-2">
                    <p className="text-sm text-gray-500">
                        Showing {currentPage * pageSize + 1}–{Math.min((currentPage + 1) * pageSize, totalElements)} of {totalElements} applications
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(0)}
                            disabled={currentPage === 0}
                            className="px-3 py-1 rounded border text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            «
                        </button>
                        <button
                            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                            disabled={currentPage === 0}
                            className="px-3 py-1 rounded border text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            ‹ Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i)
                            .filter(i => Math.abs(i - currentPage) <= 2)
                            .map(i => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i)}
                                    className={`px-3 py-1 rounded border text-sm cursor-pointer ${currentPage === i ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                            disabled={currentPage >= totalPages - 1}
                            className="px-3 py-1 rounded border text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            Next ›
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages - 1)}
                            disabled={currentPage >= totalPages - 1}
                            className="px-3 py-1 rounded border text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            »
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reports;
