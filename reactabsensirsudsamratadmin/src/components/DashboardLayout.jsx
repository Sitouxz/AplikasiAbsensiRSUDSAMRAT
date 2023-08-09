import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/admin-logo.png';
import { HiOutlineHome } from 'react-icons/hi';

const DashboardLayout = ({ children }) => {
  // make active link
  const [activeLink, setActiveLink] = React.useState('');

  React.useEffect(() => {
    setActiveLink(window.location.pathname);
  }, [activeLink]);

  return (
    <div className='flex flex-col justify-start items-stretch h-full overflow-hidden'>
      <div className='flex flex-row justify-start items-start h-full overflow-hidden relative'>
        {/* Left Side */}
        <div className='flex flex-col justify-start items-stretch h-screen overflow-hidden p-6 w-[15%] shadow-xl fixed left-0'>
          {/* Sidebar content */}
          <img src={logo} alt='logo' className='mb-5' />
          <div className='flex flex-col flex-2 gap-3 text-slate-600'>
            <Link
              to='/'
              onClick={() => setActiveLink('/')}
              className={`flex items-center gap-3 text-lg ${
                activeLink === '/' ? 'text-primary-2' : ''
              }`}>
              <HiOutlineHome />
              Dasbor
            </Link>
            {/* Add other sidebar links */}
          </div>
        </div>
        {/* Right Side */}
        <div className='h-full overflow-auto w-[85%] fixed right-0'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
