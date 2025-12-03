import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerPattern from '../../../assets/images/all_in_1_bg.png';
import { useForm } from 'react-hook-form';
import Logo from '../../../assets/images/Logo.png';
// import medLandLogo from '../../../assets/images/med-land-logo.jpg';
import { _ } from 'utils/lodash';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../actions';

function ForgotPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        if (!_.isEmpty(data)) {
            dispatch(forgotPassword(data));
        }
    };

    return (
        <div className="w-full h-screen overflow-hidden flex">
            {/* Left Banner */}
            <div className="hidden lg:block w-1/2 h-full">
                <img
                    src={bannerPattern}
                    alt="Forgot Password Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 h-full bg-white flex flex-col justify-between">

                {/* Top Logo + Title */}
                <div className="px-6 pt-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-6 mt-38">
                        <img src={Logo} alt="JoinMeds Logo" className="w-24 h-auto" />
                        <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-sm space-y-6 text-left mt-6"
                        autoComplete="off"
                    >

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-gray-700 mb-1">Mobile Number</label>
                            <input
                                type="text"
                                {...register('mobile', { required: 'Mobile Number is required' })}
                                placeholder="Enter your mobile number"
                                className="w-full border border-gray-400 rounded-md px-4 py-2"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                            )}
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-gray-700 mb-1">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('newPassword', {
                                        required: 'New Password is required'
                                    })}
                                    placeholder="Enter new password"
                                    className="w-full border border-gray-400 rounded-md px-4 py-2 pr-12"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-sm text-blue-600 cursor-pointer"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </span>
                            </div>
                            {errors.newPassword && (
                                <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-gray-700 mb-1">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required'
                                    })}
                                    placeholder="Re-enter password"
                                    className="w-full border border-gray-400 rounded-md px-4 py-2 pr-12"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2.5 text-sm text-blue-600 cursor-pointer"
                                >
                                    {showConfirmPassword ? 'Hide' : 'Show'}
                                </span>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                className="border-2 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff] px-6 py-2 rounded-md font-semibold cursor-pointer"
                                onClick={() => navigate('/')}
                            >
                                Back
                            </button>

                            <button
                                type="submit"
                                className="bg-[#00A4E1] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#008FCC] cursor-pointer"
                            >
                                Reset Password
                            </button>
                        </div>

                    </form>
                </div>

                {/* Footer Logo */}
                {/* <div className="flex justify-center p-4">
                    <img src={medLandLogo} alt="Medland Logo" className="h-20 object-contain" />
                </div> */}
            </div>
        </div>
    );
}

export default ForgotPassword;
