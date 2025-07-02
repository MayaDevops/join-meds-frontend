import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createOrganizationDetails } from '../actions';
import { OrganizationRegisterDetailsSchema } from '../validate';
import { useNavigate } from 'react-router-dom';
import { NUM_ONLY } from 'common/regex';

function OrganisationRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }, setValue
  } = useForm({
    mode: 'all',
    resolver: yupResolver(OrganizationRegisterDetailsSchema)
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    const finalParams = {
      ...data,
      userType: 'ORGANIZATION'
    };
    dispatch(createOrganizationDetails(finalParams));
  };

  const mobileNoChange = (e) => {
    const NUMBER_ONLY = e.target.value.replace(NUM_ONLY, '');
    setValue('emailMobile', NUMBER_ONLY);
  };

  return (
    <div className="flex flex-col items-center justify-start  pt-24 pb-10 px-4 bg-white">
      {/* Banner */}
      <div className="w-full max-w-full rounded-t-xl overflow-hidden">
        <div className="bg-gradient-to-b from-[#D1EEFC] to-white px-6 pt-8 pb-4">
          <h2 className="text-xl font-semibold text-center">
            Welcome to <span className="font-bold text-[#2E97F0]">Join</span>
            <span className="font-bold text-[#00B5D8]">Meds</span>
          </h2>
          <p className="text-sm text-center text-gray-700">
            Create an Organisation Account
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        autoComplete="off" 
        className="w-full max-w-[80%] bg-white px-6 py-6 space-y-6 shadow-md rounded-b-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Name of business/organisation
            </label>
            <input
              type="text"
              {...register('orgName')}
              placeholder="Enter your Name of business/organisation"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
              autoComplete="off"
              maxLength={200}
            />
            {errors.orgName && <p className="text-red-500 text-sm">{errors.orgName.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Official Email id</label>
            <input
              type="email"
              {...register('officialEmail')}
              placeholder="Enter your Official Email id"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
              autoComplete="off"
            />
            {errors.officialEmail && <p className="text-red-500 text-sm">{errors.officialEmail.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Incorporation No.</label>
            <input
              type="text"
              {...register('incorporationNo')}
              placeholder="Enter your incorporation no."
              className="w-full border border-gray-400 rounded-md px-4 py-2"
              autoComplete="off"
              maxLength={100}
            />
            {errors.incorporationNo && <p className="text-red-500 text-sm">{errors.incorporationNo.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-1">Mobile Number</label>
            <input
              type="tel"
              {...register('emailMobile')}
              placeholder="Enter your mobile number"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
              autoComplete="off"
              maxLength={10}
              onChange={mobileNoChange}
            />
            {errors.emailMobile && <p className="text-red-500 text-sm">{errors.emailMobile.message}</p>}
          </div>

          {/* Password Field with toggle */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Enter your password"
                className="w-full border border-gray-400 rounded-md px-4 py-2 pr-12"
                autoComplete="off"
                maxLength={15}

              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-blue-600 cursor-pointer"
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field with toggle */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirm your password"
                className="w-full border border-gray-400 rounded-md px-4 py-2 pr-12"
                autoComplete="off"
                maxLength={15}

              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-sm text-blue-600 cursor-pointer"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="border-2 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff] font-semibold px-6 py-2 rounded-md  cursor-pointer"
            onClick={() => navigate('/')}
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

export default OrganisationRegister;
