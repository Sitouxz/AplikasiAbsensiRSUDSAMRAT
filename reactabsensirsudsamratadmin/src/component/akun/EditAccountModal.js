import React, { useState } from "react";
import pPicture from "../../img/ProfilePicture.png";
import uploadButton from "../../img/uploadButton.png";
import hidePassLogo from "../../img/hide-password.png";
import viewPassLogo from "../../img/view-password.png";

const EdtAccountModal = ({ setModal }) => {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [bidang, setBidang] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordLogo = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "nik":
        setNik(value);
        break;
      case "bidang":
        setBidang(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50">
      <div
        onClick={setModal}
        className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-80"
      ></div>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-height[1.4] rounded-[3px] flex p-8 m-2 gap-28 items-center justify-between modalbgImage bg-white bg-top bg-cover pb-10 pl-16 pr-16">
        <div className="flex flex-col w-full gap-4 mb-20">
          <div className="flex flex-col w-72">
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="flex-grow w-full py-1 bg-transparent border border-black rounded-lg pl-4"
            />
          </div>
          <div className="flex flex-col">
            <p>NIK</p>
            <input
              type="text"
              value={nik}
              onChange={handleInputChange}
              className="flex-grow w-full py-1 bg-transparent border border-black rounded-lg pl-4"
            />
          </div>
          <div className="flex flex-col">
            <p>Bidang/Jabatan</p>
            <input
              type="text"
              value={bidang}
              onChange={handleInputChange}
              className="flex-grow w-full py-1 bg-transparent border border-black rounded-lg pl-4"
            />
          </div>
          <div className="flex flex-col">
            <p>Password</p>
            <div className="flex align-middle">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleInputChange}
                className="w-full py-1 bg-transparent border border-black rounded-lg pl-4"
              />
              <button
                onClick={handlePasswordLogo}
                className="absolute inset-y-0 right-80 top-40 transform -translate-x-full flex-grow bg-none border-none flex items-center"
              >
                <img
                  src={showPassword ? hidePassLogo : viewPassLogo}
                  alt="view-hide-password-logo"
                  className=" fill-black"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between align-middle gap-28">
          <div className="flex flex-col items-center gap-4">
            <img src={pPicture} alt="Profile" className=" w-36 h-40" />
            <button>
              <img
                src={uploadButton}
                alt="upload-logo"
                className="border-none rounded-full mx-auto bg-blue-500 p-2 w-3/4"
              />
            </button>
          </div>
          <button className="pl-3 pr-3 pt-3 pb-3 text-white bg-teal-500 border-none rounded-lg w-40 mt-4">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdtAccountModal;
