import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerPattern from '../../../assets/images/all_in_1_bg_new.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { _ } from 'utils/lodash';
import { verifyLogin } from '../actions';
import Logo from '../../../assets/images/Logo.png';
import medLandLogo from '../../../assets/images/med-land-logo.jpg';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (!_.isEmpty(data)) {
      dispatch(verifyLogin(data));
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex">
      {/* Left Banner */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={bannerPattern}
          alt="Login Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Login Form */}
      <div className="w-full lg:w-1/2 h-full bg-white flex flex-col justify-between">
        {/* Top: Logo and Title */}
        <div className="px-6 pt-10 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 mt-38">
            <img src={Logo} alt="JoinMeds Logo" className="w-24 h-auto" />
            <h2 className="text-3xl font-bold text-gray-800">Organisation</h2>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm space-y-6 text-left mt-6"
            autoComplete="off"
          >
            <div>
              <label className="block text-gray-700 mb-1">Email/Mobile</label>
              <input
                type="text"
                {...register('username', { required: 'User Name is required' })}
                placeholder="Enter your User Name"
                className="w-full border border-gray-400 rounded-md px-4 py-2"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            <div>
              {/* <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Enter your password"
                className="w-full border border-gray-400 rounded-md px-4 py-2"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )} */}

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

            <div className="flex justify-end gap-2">
              <button
                type="button"
                style={{ borderColor: '#00A4E1' }}
                className="border-2 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff] px-6 py-2 rounded-md font-semibold cursor-pointer"
                onClick={() => navigate('/ui/join-meds/register')}
              >
                Sign Up
              </button>
              <button
                type="submit"
                className="bg-[#00A4E1] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#008FCC] cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Bottom: Medland Logo */}
        <div className="flex justify-center p-4">
          <img src={medLandLogo} alt="Medland Logo" className="h-20 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Login;
