import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportTable from 'pages/common/components/ReportTable';
import { getOrgListReportsContent } from '../selectors';
import { fetchOrgList } from '../actions';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { formatDate } from 'utils/date';

const RegisterdOrganizationsList = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const pageSize = 10;

    const orgListDetails = useSelector(getOrgListReportsContent);

    const fetchOrgs = useCallback(async (keyword = '') => {
        setLoading(true);
        try {
            const params = {};
            if (keyword?.trim()) {
                params.keyword = keyword.trim();
            }
            await dispatch(fetchOrgList(params));
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    // Debounce search input by 500ms
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchText);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchText]);

    useEffect(() => {
        fetchOrgs(debouncedSearch);
    }, [debouncedSearch, fetchOrgs]);

    const columns = [
        { key: 'orgName', label: 'Organization Name' },
        { key: 'officialEmail', label: 'Official Email' },
        { key: 'officePhone', label: 'Office Phone' },
        { key: 'incorporationNo', label: 'Incorporation No' },
        {
            key: 'createdAt',
            label: 'Created At',
            render: (value) => value ? formatDate(value) : '-',
        }
    ];

    return (
        <div className="p-4">
            {loading && <JoinMedsLoader />}
            <ReportTable
                title="Organizations List"
                columns={columns}
                data={orgListDetails}
                rowsPerPage={pageSize}
                searchText={searchText}
                onSearchChange={(val) => setSearchText(val)}
            />
        </div>
    );
};

export default RegisterdOrganizationsList;
