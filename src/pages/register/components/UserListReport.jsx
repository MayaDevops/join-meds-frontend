import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportTable from 'pages/common/components/ReportTable';
import { getUserListReports } from '../selectors';
import { fetchUserList } from '../actions';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { formatDate } from 'utils/date';

const UserListReport = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                // we can await dispatch if using redux-thunk, or rely on saga
                dispatch(fetchUserList());
                // since sagas might not be awaitable from dispatch directly without
                // additional custom promise wrappers, we'll just dispatch it and let
                // the loader show until the next render, but actually loading state
                // can also just be set here for a fixed delay or handled via a dedicated loading selector.
                // Assuming saga completes quickly, or if loading isn't strictly necessary since ReportTable
                // might handle its own or is fast. Let's just unset loading after essentially triggering
                setLoading(false);
            } catch {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [dispatch]);

    const userListDetails = useSelector(getUserListReports) || [];

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
            key: 'emailMobile',
            label: 'Mobile&Email',
            render: (value, row) => {
                const parts = [];
                if (row?.emailMobile) parts.push(row.emailMobile);
                if (row?.email) parts.push(row.email);
                return parts.length > 0 ? parts.join(', ') : '-';
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

    return (
        <div className="p-4">
            {loading && <JoinMedsLoader />}
            <ReportTable
                title="User List Report"
                columns={columns}
                data={Array.isArray(userListDetails) ? userListDetails : []}
                rowsPerPage={10}
            />
        </div>
    );
};

export default UserListReport;
