import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PageDashboard from './pages/PageDashboard/PageDashboard';
import PageAbsensi from './pages/PageAbsensi/PageAbsensi';
import logo from './assets/admin-logo.png';
import headerBg from './assets/header-bg.png';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineUser,
  HiOutlineInformationCircle,
  HiOutlineDocumentAdd,
  HiUser,
} from 'react-icons/hi';
import PageAkun from './pages/PageAkun/PageAkun';
import PagePengumuman from './pages/PagePengumuman/PagePengumuman';
import LoginPage from './pages/PageLogin/PageLogin';
import PageShift from './pages/PageShift/PageShift';
import PageEmployeeSchedule from './pages/PageShift/PageEmployeeSchedule';
import PageExampleClient from './pages/PageExample/PageExample-Client';
import PageExample from './pages/PageExample/PageExample';

export default function App() {
  // make active link
  const [activeLink, setActiveLink] = React.useState('');

  React.useEffect(() => {
    setActiveLink(window.location.pathname);
  }, [activeLink]);

  return (
    <Router>
      <div className="flex flex-col items-stretch justify-start h-full overflow-hidden">
        <div className="relative flex flex-row items-start justify-start h-full overflow-hidden">
          {/* Left Side */}
          {activeLink === '/login' ? null : (
            <div className="flex flex-col justify-start items-stretch h-screen overflow-hidden p-6 w-[15%] shadow-xl fixed left-0">
              <img src={logo} alt="logo" className="mb-5" />
              <div className="flex flex-col gap-3 flex-2 text-slate-600">
                <Link
                  to="/"
                  onClick={() => setActiveLink('/')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiOutlineHome />
                  Dasbor
                </Link>
                <Link
                  to="/absensi"
                  onClick={() => setActiveLink('/absensi')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/absensi' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiOutlineUserCircle />
                  Absensi
                </Link>
                <Link
                  to="/akun"
                  onClick={() => setActiveLink('/akun')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/akun' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiOutlineUser />
                  Akun
                </Link>
                <Link
                  to="/pengumuman"
                  onClick={() => setActiveLink('/pengumuman')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/pengumuman' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiOutlineInformationCircle />
                  Pengumuman
                </Link>
                <Link
                  to="/shift"
                  onClick={() => setActiveLink('/shift')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === 'shift' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiOutlineDocumentAdd />
                  Buat sif THL
                </Link>
                <Link
                  to="/login"
                  onClick={() => setActiveLink('/login')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/login' ? 'text-primary-2' : ''
                  }`}
                >
                  <HiUser />
                  Login
                </Link>
              </div>
            </div>
          )}
          {/* Right Side */}
          <div
            className={`h-full overflow-auto ${
              activeLink === '/login' ? 'w-full' : 'w-[85%]'
            } fixed right-0`}
          >
            {activeLink === '/login' ? null : (
              <div className="flex bg-black relative h-[158px] p-4 items-center">
                <img
                  src={headerBg}
                  alt="header-bg"
                  className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden bg-cover"
                />
                <div className="z-10 text-2xl text-white">
                  <p>Hello, John</p>
                  <p>Selasa, 1 Agustus 2023</p>
                </div>
              </div>
            )}
            <div className={`${activeLink === '/login' ? '' : 'p-3'}`}>
              <Routes>
                <Route exact path="/" element={<PageDashboard />} />
                <Route exact path="/absensi" element={<PageAbsensi />} />
                <Route exact path="/akun" element={<PageAkun />} />
                <Route exact path="/pengumuman" element={<PagePengumuman />} />
                <Route exact path="/shift" element={<PageShift />} />
                {/* <Route
                  exact
                  path="/shift/allschedule"
                  element={<ViewAllSchedule />}
                /> */}
                <Route
                  exact
                  path="/shift/:scheduleId"
                  element={<PageEmployeeSchedule />}
                />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/example" element={<PageExample />} />
                <Route
                  exact
                  path="/example-client"
                  element={<PageExampleClient />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
