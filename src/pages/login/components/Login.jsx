import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerPattern from '../../../assets/images/all_in_1_bg_new.png'; // Replace with your actual path
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { _ } from 'utils/lodash';
import { verifyLogin } from '../actions';
import Logo from '../../../assets/images/Logo.png';
import medLandLogo from '../../../assets/images/med-land-logo.jpg';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });

  const onSubmit = (data) => {
    if (!_.isEmpty(data)) {
      dispatch(verifyLogin(data));
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Banner */}
      <div className="hidden lg:block lg:w-1/2 h-auto">
        <img
          src={bannerPattern}
          alt="Login Banner"
          className="w-full h-[750px] object-cover"
        />
      </div>

      {/* Right Login Form */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center px-6 py-12 bg-white mt-15">
        <div className="w-full max-w-sm space-y-6 text-center">
          {/* App Logo / Title */}
          <div className="flex items-center gap-4 mb-6 flex-wrap justify-center">
            <img src={Logo} alt="JoinMeds Logo" className="w-30 h-15" />
            <h2 className="text-3xl font-bold text-gray-800">Organisation</h2>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 text-left mt-10"
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
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Enter your password"
                className="w-full border border-gray-400 rounded-md px-4 py-2"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                style={{ borderColor: '#00A4E1' }}
                className="border-3 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff]  px-6 py-2 rounded-md font-semibold cursor-pointer"
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

          {/* OR separator */}
          {/* <div className="flex items-center justify-center">
            <div className="border-t w-full border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="border-t w-full border-gray-300" />
          </div> */}

          {/* Sign Up Button */}
          {/* <button
            className="w-full border border-[#00A4E1] text-[#00A4E1] py-3 rounded font-semibold hover:bg-[#E6F7FF] transition"
            onClick={() => navigate('/ui/join-meds/register')}
          >
            Sign Up
          </button> */}

          {/* Org Link */}
          {/* <p className="text-md text-gray-600 font-semibold">
            If you are an organisation{' '}
            <span
              className="text-[#00A4E1] cursor-pointer underline "
              onClick={() => navigate('/ui/join-meds/register')}
            >
              click here
            </span>
          </p> */}

          {/* Back Button */}
          {/* <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ← Back to Home
          </button> */}
        </div>
        <div className="mt-12 mb-6 flex justify-center">
          <img src={medLandLogo} alt="Medland Logo" className="h-20" />
        </div>
      </div>
    </div>
  );
}

export default Login;
