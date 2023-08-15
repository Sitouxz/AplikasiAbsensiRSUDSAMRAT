import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PageDashboard from "./pages/PageDashboard/PageDashboard";
import PageAbsensi from "./pages/PageAbsensi/PageAbsensi";
import logo from "./assets/admin-logo.png";
import headerBg from "./assets/header-bg.png";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineUser,
  HiOutlineInformationCircle,
  HiOutlineDocumentAdd,
  HiUser,
<<<<<<< HEAD
} from "react-icons/hi";
import PageAkun from "./pages/PageAkun/PageAkun";
import PagePengumuman from "./pages/PagePengumuman/PagePengumuman";
import LoginPage from "./pages/PageLogin/PageLogin";
import PageShift from "./pages/PageShift/PageShift";
=======
} from 'react-icons/hi';
import PageAkun from './pages/PageAkun/PageAkun';
import PagePengumuman from './pages/PagePengumuman/PagePengumuman';
import LoginPage from './pages/PageLogin/PageLogin';
import PageShift from './pages/PageShift/PageShift';
import PageEmployeeSchedule from './pages/PageShift/PageEmployeeSchedule';
import PageExample from './pages/PageExample/PageExample';
import PageExampleClient from './pages/PageExample/PageExample-Client';
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708

export default function App() {
  // make active link
  const [activeLink, setActiveLink] = React.useState("");

  React.useEffect(() => {
    setActiveLink(window.location.pathname);
  }, [activeLink]);

  return (
    <Router>
      <div className="flex flex-col justify-start items-stretch h-full overflow-hidden">
        <div className="flex flex-row justify-start items-start h-full overflow-hidden relative">
          {/* Left Side */}
<<<<<<< HEAD
          {activeLink === "/login" ? null : (
=======
          {activeLink === '/login' ? null : (
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
            <div className="flex flex-col justify-start items-stretch h-screen overflow-hidden p-6 w-[15%] shadow-xl fixed left-0">
              <img src={logo} alt="logo" className="mb-5" />
              <div className="flex flex-col flex-2 gap-3 text-slate-600">
                <Link
                  to="/"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "/" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
                  }`}
                >
                  <HiOutlineHome />
                  Dasbor
                </Link>
                <Link
                  to="/absensi"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/absensi")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "/absensi" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/absensi')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/absensi' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
                  }`}
                >
                  <HiOutlineUserCircle />
                  Absensi
                </Link>
                <Link
                  to="/akun"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/akun")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "/akun" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/akun')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/akun' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
                  }`}
                >
                  <HiOutlineUser />
                  Akun
                </Link>
                <Link
                  to="/pengumuman"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/pengumuman")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "/pengumuman" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/pengumuman')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/pengumuman' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
                  }`}
                >
                  <HiOutlineInformationCircle />
                  Pengumuman
                </Link>
                <Link
                  to="/shift"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/shift")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "shift" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/shift')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === 'shift' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
                  }`}
                >
                  <HiOutlineDocumentAdd />
                  Buat sif THL
                </Link>
                <Link
                  to="/login"
<<<<<<< HEAD
                  onClick={() => setActiveLink("/login")}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === "/login" ? "text-primary-2" : ""
=======
                  onClick={() => setActiveLink('/login')}
                  className={`flex items-center gap-3 text-lg ${
                    activeLink === '/login' ? 'text-primary-2' : ''
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
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
<<<<<<< HEAD
              activeLink === "/login" ? "w-full" : "w-[85%]"
            } fixed right-0`}
          >
            {activeLink === "/login" ? null : (
=======
              activeLink === '/login' ? 'w-full' : 'w-[85%]'
            } fixed right-0`}
          >
            {activeLink === '/login' ? null : (
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
              <div className="flex bg-black relative h-[158px] p-4 items-center">
                <img
                  src={headerBg}
                  alt="header-bg"
                  className="absolute top-0 left-0 overflow-hidden w-full bg-cover h-full z-0"
                />
                <div className="z-10 text-white text-2xl">
                  <p>Hello, John</p>
                  <p>Selasa, 1 Agustus 2023</p>
                </div>
              </div>
            )}
            <div className={`${activeLink === "/login" ? "" : "p-3"}`}>
              <Routes>
<<<<<<< HEAD
                <Route exact path="/" element={<PageDashboard />} />
                <Route exact path="/absensi" element={<PageAbsensi />} />
                <Route exact path="/akun" element={<PageAkun />} />
                <Route exact path="/pengumuman" element={<PagePengumuman />} />
                <Route exact path="/shift" element={<PageShift />} />
                <Route exact path="/login" element={<LoginPage />} />
=======
                <Route exact path='/' element={<PageDashboard />} />
                <Route exact path='/absensi' element={<PageAbsensi />} />
                <Route exact path='/akun' element={<PageAkun />} />
                <Route exact path='/pengumuman' element={<PagePengumuman />} />
                <Route exact path='/shift' element={<PageShift />} />
                <Route
                  exact
                  path='/shift/:employeeid'
                  element={<PageEmployeeSchedule />}
                />
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path="/example" element={<PageExample />} />
                <Route
                  exact
                  path="/example-client"
                  element={<PageExampleClient />}
                />
>>>>>>> cde74084c99b796c2b8cb8f8c680cdca1fd47708
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
