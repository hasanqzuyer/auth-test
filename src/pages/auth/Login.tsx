import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react";
import { toast, ToastContainer } from 'react-toastify';
import IMAGES from '@/utils/images';
import { useAuth } from '@/hooks/useAuth';
import { APP_ROUTES } from '@/utils/constant';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    const user = {
      email: formData.email,
      password: formData.password
    };
    
    try {
      await login(user);
      toast.success('Login successful!');
      navigate(APP_ROUTES.DASHBOARD);
    } catch (err: any) {
      toast.error(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <main className='flex flex-col mx-auto md:w-full h-full p-[1rem] pt-[3rem] md:pt-0 lg:p-[2rem] gap-y-16 overflow-y-auto'>
      <img src={IMAGES.logo} alt="sos-logo" className='w-[137px] hidden md:block mx-auto' />
      <div className='border border-[#C8DEFF] rounded-4xl p-6 text-center flex flex-col gap-y-6 shadow-lg shadow-[#73B6FF]/[7%] w-full xl:w-9/12 mx-auto max-w-[454px]'>
        <header>
          <h1 className='font-semibold text-[32px] sm:text-[39px] text-[#1B1818]'>Welcome back!</h1>
          <p className='font-normal text-base leading-6 text-[#535862]'>Welcome back! Please enter your details.</p>
        </header>
        <form className='text-start flex flex-col gap-4' onSubmit={e => e.preventDefault()}>
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='w-full h-14 rounded-4xl outline-none border border-[#D0D5DD] px-4 text-[#101928] focus:border-[#473BF0]'
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            <label htmlFor="password">Password</label>
            <div className='h-14 rounded-4xl flex border border-[#D0D5DD] px-4 items-center focus-within:border-[#473BF0]'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className='w-full h-full rounded-4xl outline-none text-[#101928]'
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => setShowPassword(!showPassword)} type='button' className='cursor-pointer'>
                <Icon icon={showPassword ? "mi:eye-off" : "mi:eye"} fontSize={24} />
              </button>
            </div>
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`h-14 rounded-4xl text-center bg-[#473BF0] text-white font-semibold mt-6 shadow-lg shadow-[#2F51FF]/[25%] cursor-pointer hover:scale-103 transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className='text-[14px] leading-5 flex items-center gap-x-1 justify-center'>
          <p className='text-[#645D5D]'>Forgot Password?</p>
          <NavLink to={""} className={"text-[#473BF0] font-semibold"}>Click here</NavLink>
        </div>
        <div className='flex gap-x-2 items-center'>
          <hr className='flex-1 text-[#F0F2F5]' />
          <p className='text-[#667185] text-sm'>Or</p>
          <hr className='flex-1 text-[#F0F2F5]' />
        </div>
        <div className='space-y-4'>
          <button type='button' className='flex items-center gap-x-2 justify-center w-full rounded-4xl h-14 bg-[#E0ECFF] cursor-pointer hover:scale-103 transition-all duration-300'>
            <Icon icon={"flat-color-icons:google"} fontSize={24} />
            <p className='text-[#344054] text-base font-semibold'>Continue with Google</p>
          </button>
          <button type='button' className='flex items-center gap-x-2 justify-center w-full rounded-4xl h-14 bg-[#E0ECFF] cursor-pointer hover:scale-103 transition-all duration-300'>
            <Icon icon={"logos:facebook"} fontSize={24} />
            <p className='text-[#344054] text-base font-semibold'>Continue with Facebook</p>
          </button>
        </div>
      </div>
      <div className='text-base leading-5 flex items-center gap-x-1 justify-center'>
        <p className='text-[#645D5D]'>Don't have an account?</p>
        <NavLink to={""} className={"text-[#473BF0] font-semibold"}>Sign Up</NavLink>
      </div>
      <ToastContainer position='top-left' />
    </main>
  );
};

export default Login;