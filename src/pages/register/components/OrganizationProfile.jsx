import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createJobDetails, updateJobDetails } from '../actions';
import { OrganizationUpdateDetailsSchema } from '../validate';
import { useNavigate } from 'react-router-dom';
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';
import { useLocation } from 'react-router-dom';
import { _ } from 'utils/lodash';
import { actions as commonActions } from 'pages/common/slice';
import { t } from 'pages/common/components';
import { useEffect } from 'react';
import Breadcrumbs from 'pages/common/components/Breadcrumbs';
import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { useState } from 'react';

function OrganizationProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const selectedJob = location.state?.selectedJob;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        mode: 'all',
        resolver: yupResolver(OrganizationUpdateDetailsSchema),
        defaultValues: {
            hiringFor: selectedJob?.hiringFor || '',
            yearExp: selectedJob?.yearExp || '',
            skills: selectedJob?.skills || '',
            natureJob: selectedJob?.natureJob || '',
            payFrom: selectedJob?.payFrom || '',
            payTo: selectedJob?.payTo || '',
            payRange: selectedJob?.payRange || '',
            jobDesc: selectedJob?.jobDesc || '',
            jobId: selectedJob?.id || ''

        }
    });
    const { userId = '' } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true) || {};
    const { id = '', orgName = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!selectedJob) {
            reset({
                hiringFor: '',
                yearExp: '',
                skills: '',
                natureJob: '',
                payFrom: '',
                payTo: '',
                payRange: '',
                jobDesc: '',
                jobId: ''
            });
        }
    }, [selectedJob, reset]);

    const updateApplication = async (finalParams) => {
        setLoading(true);
        try {
            await dispatch(updateJobDetails(finalParams));
            navigate('/ui/join-meds/user/dashboard');
        } finally {
            setLoading(false);
        }
    };

    const createApplication = async (finalParams) => {
        setLoading(true);
        try {
            await dispatch(createJobDetails(finalParams));
            navigate('/ui/join-meds/user/dashboard');
        } finally {
            setLoading(false);
        }
    };


    const onSubmit = async (data) => {
        if (!_.isEmpty(selectedJob?.id) && selectedJob?.id !== 'undefined') {
            const finalParams = {
                ...data,
                jobId: selectedJob?.id
            };
            dispatch(commonActions.setAlertAction({
                open: true,
                variant: 'information',
                message: t('Would you like to update this job posting?'),
                title: selectedJob?.hiringFor || '',
                backwardActionText: t('No'),
                forwardActionText: t('Yes'),
                forwardAction: () => updateApplication(finalParams),
                backwardAction: () => dispatch(commonActions.setAlertAction({}))
            }));
        } else {
            const finalParams = {
                ...data,
                userId: id || userId
            };
            dispatch(commonActions.setAlertAction({
                open: true,
                variant: 'information',
                message: t('Would you like to create this job posting?'),
                title: selectedJob?.hiringFor || '',
                backwardActionText: t('No'),
                forwardActionText: t('Yes'),
                forwardAction: () => createApplication(finalParams),
                backwardAction: () => dispatch(commonActions.setAlertAction({}))
            }));
        }
    };

    return (
        <div className={!id ? `flex flex-col items-center justify-start min-h-screen pt-24 pb-10 px-4 bg-white` :
            'flex flex-col items-left justify-start min-h-screen pt-4 pb-10 px-4 bg-white'}>
             {loading && <JoinMedsLoader />}
            <Breadcrumbs pageTitle="Add Job" />
            {/* Banner */}
            <div className="w-full max-w-full rounded-t-xl overflow-hidden">
                <div className="bg-gradient-to-b from-[#D1EEFC] to-white px-6 pt-8 pb-4">
                    {/* <h2 className="text-xl font-semibold text-center">
                        <span className="font-bold text-[#2E97F0]">Join</span>
                        <span className="font-bold text-[#00B5D8]">Meds</span>
                    </h2> */}
                    <p className="text-md font-semibold text-center text-gray-800">
                        {orgName}
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                autoComplete="off"
                className={!id ? `w-full max-w-[80%] bg-white px-6 py-6 space-y-6 shadow-md rounded-b-xl` :
                    `w-full bg-white px-6 py-6 space-y-6 shadow-md rounded-b-xl`}
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* <div>
                    <label className="block font-medium text-gray-800 mb-1">
                        About Your Company/organisation
                    </label>
                    <textarea
                        type="text"
                        {...register('aboutCompany')}
                        placeholder="Enter your Company/organisation"
                        className="w-full border border-gray-400 rounded-md px-4 py-2"
                        autoComplete='off'
                        maxLength={2500}
                    />
                    {errors.aboutCompany && <p className="text-red-500 text-sm">{errors.aboutCompany.message}</p>}
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <div>
                        <label className="block font-medium text-gray-800 mb-1">Job Hiring Of</label>
                        <input
                            type="text"
                            {...register('hiringFor')}
                            placeholder="eg: Nurse, Doctor, Pharmacist"
                            className="w-full border border-gray-400 rounded-md px-4 py-2"
                            autoComplete='off'
                            maxLength={150}
                        />
                        {errors.hiringFor && <p className="text-red-500 text-sm">{errors.hiringFor.message}</p>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-800 mb-1">Years of Experience</label>
                        <input
                            type="text"
                            {...register('yearExp')}
                            placeholder="eg: Fresher, 1 Year etc"
                            className="w-full border border-gray-400 rounded-md px-4 py-2"
                            autoComplete='off'
                            maxLength={100}
                        />
                        {errors.yearExp && <p className="text-red-500 text-sm">{errors.yearExp.message}</p>}
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-gray-800 mb-1">Skills Required</label>
                    <textarea
                        type="text"
                        {...register('skills')}
                        placeholder="eg: OT,NICU,Surgeon etc"
                        className="w-full border border-gray-400 rounded-md px-4 py-2"
                        autoComplete='off'
                        maxLength={2500}
                    />
                    {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
                </div>
                <div>
                    <label className="block font-medium text-gray-800 mb-1">Nature of Job</label>
                    <textarea
                        type="text"
                        {...register('natureJob')}
                        placeholder="eg: Part-time, Full-time"
                        className="w-full border border-gray-400 rounded-md px-4 py-2"
                        autoComplete='off'
                        maxLength={2500}
                    />
                    {errors.natureJob && <p className="text-red-500 text-sm">{errors.natureJob.message}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

                    <div>
                        <label className="block font-medium text-gray-800 mb-1">Pay - From</label>
                        <input
                            type="text"
                            {...register('payFrom')}
                            placeholder="eg: 15000"
                            className="w-full border border-gray-400 rounded-md px-4 py-2"
                            autoComplete='off'
                            maxLength={15}
                        />
                        {errors.payFrom && <p className="text-red-500 text-sm">{errors.payFrom.message}</p>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-800 mb-1">Pay - To</label>
                        <input
                            type="text"
                            {...register('payTo')}
                            placeholder="eg: 25000"
                            className="w-full border border-gray-400 rounded-md px-4 py-2"
                            autoComplete='off'
                            maxLength={15}
                        />
                        {errors.payTo && <p className="text-red-500 text-sm">{errors.payTo.message}</p>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-800 mb-1">Range</label>
                        <select
                            name="payRange"
                            id="payRange"
                            {...register('payRange')}
                            className="w-full border border-gray-400 rounded-md px-4 py-2"
                            defaultValue="" // Ensure empty default for react-hook-form
                        >
                            <option value="" disabled hidden>
                                Select Pay Range
                            </option>
                            <option value="Hour">Hour</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                        {errors.payRange && <p className="text-red-500 text-sm">{errors.payRange.message}</p>}
                    </div>

                </div>
                <div>
                    <label className="block font-medium text-gray-800 mb-1">Job Description</label>
                    <textarea
                        type="text"
                        {...register('jobDesc')}
                        placeholder="Specify less than 450 words"
                        className="w-full border border-gray-400 rounded-md px-4 py-2"
                        autoComplete='off'
                        maxLength={2500}
                    />
                    {errors.jobDesc && <p className="text-red-500 text-sm">{errors.jobDesc.message}</p>}
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        type="button"
                        className="border-2 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff] font-semibold px-6 py-2 rounded-md  cursor-pointer"
                        onClick={() => navigate('/ui/join-meds/user/dashboard')}

                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="bg-[#00A4E1] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#008FCC] cursor-pointer"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OrganizationProfile;
