import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportTable from 'pages/common/components/ReportTable';
import { getUserListReportsContent, getUserListReportsPagination } from '../selectors';
import { fetchUserList } from '../actions';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { formatDate } from 'utils/date';

const UserListReport = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 10;

    const userListDetails = useSelector(getUserListReportsContent);
    const pagination = useSelector(getUserListReportsPagination);

    const fetchUsers = async (page = 0) => {
        setLoading(true);
        try {
            await dispatch(fetchUserList({ page, size: pageSize }));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const columns = [
        { key: 'fullname', label: 'Name' },
        {
            key: 'dob',
            label: 'DOB',
            render: (value) => value ? formatDate(value) : '-'
        },
        { key: 'address', label: 'Address' },
        { key: 'profession', label: 'Profession' },
        {
            key: 'username',
            label: 'Mobile & Email',
            render: (value, row) => {
                const parts = [];
                if (row?.username) parts.push(row.username);
                if (row?.email && row.email !== row.username) parts.push(row.email);
                return parts.length > 0 ? parts.join(' / ') : '-';
            }
        },
        { key: 'passportNumber', label: 'Passport Number' },
        { key: 'countryPreffered', label: 'Preferred Country' },
        {
            key: 'university',
            label: 'University & Qualification',
            render: (value, row) => {
                const parts = [];
                if (row?.university) parts.push(row.university);
                if (row?.academicQualification) parts.push(row.academicQualification);
                return parts.length > 0 ? parts.join(', ') : '-';
            }
        },
        {
            key: 'pgStatus',
            label: 'PG & PhD Status',
            render: (value, row) => {
                const parts = [];
                if (row?.pgStatus) parts.push(row.pgStatus);
                if (row?.phdStatus) parts.push(row.phdStatus);
                return parts.length > 0 ? parts.join(', ') : '-';
            }
        },
        { key: 'speciality', label: 'Speciality' },
        { key: 'workExperience', label: 'Work Experience' },
        { key: 'clinicalNonclinical', label: 'Clinical/Nonclinical' },
        {
            key: 'foreignTest',
            label: 'Foreign Test Details',
            render: (value, row) => {
                const parts = [];
                if (row?.foreignTest) parts.push(row.foreignTest);
                if (row?.foreignTestDetails) parts.push(row.foreignTestDetails);
                return parts.length > 0 ? parts.join(', ') : '-';
            }
        },
        { key: 'foreignCountryExp', label: 'Foreign Country Exp' },
        {
            key: 'languageTest',
            label: 'Language Test Details',
            render: (value, row) => {
                const parts = [];
                if (row?.languageTest) parts.push(row.languageTest);
                if (row?.languageTestCleared) parts.push(row.languageTestCleared);
                if (row?.languageTestScore) parts.push(row.languageTestScore);
                return parts.length > 0 ? parts.join(', ') : '-';
            }
        },
        { key: 'certification', label: 'Certification' },
        { key: 'currentYear', label: 'Current Year' },
        {
            key: 'foreignCountryWorked',
            label: 'Foreign Country Worked',
            render: (value, row) => {
                const parts = [];
                if (row?.foreignCountryWorked) parts.push(row.foreignCountryWorked);
                if (row?.foreignCountryWorkExp) parts.push(row.foreignCountryWorkExp);
                return parts.length > 0 ? parts.join(', ') : '-';
            }
        }
    ];

    const totalPages = pagination?.totalPages || 0;
    const totalElements = pagination?.totalElements || 0;

    return (
        <div className="p-4">
            {loading && <JoinMedsLoader />}
            <ReportTable
                title="User List Report"
                columns={columns}
                data={userListDetails}
                rowsPerPage={pageSize}
            />
            {totalPages > 1 && (
                <div className="flex items-center justify-between mt-4 px-2">
                    <p className="text-sm text-gray-500">
                        Showing {currentPage * pageSize + 1}–{Math.min((currentPage + 1) * pageSize, totalElements)} of {totalElements} users
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

export default UserListReport;
