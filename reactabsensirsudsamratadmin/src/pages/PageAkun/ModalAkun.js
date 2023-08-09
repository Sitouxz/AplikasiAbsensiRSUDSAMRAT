import React, { useState, forwardRef, useEffect } from "react";
import Popup from "reactjs-popup";
import modalBg from "../../assets/modal-bg.png";
import profilePicture from "../../assets/profile-picture.png";
import { HiUpload, HiEye, HiEyeOff, HiOutlineX } from "react-icons/hi";
import api from "../../config/axios";

const ModalAkun = forwardRef(({ data, type, onClose }, ref) => {
  const [akunData, setAkunData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordLogo = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (type === "edit") {
      setAkunData(data);
    }
  }, [data, type]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAkunData({ ...akunData, [name]: value });
  };

  const postAkunData = () => {
    const data = {
      name: akunData?.name,
      role: akunData?.role,
      placementId: akunData?.placement?.placement_id ?? 1,
    };
    if (type === "create") {
      api
        .post("/api/v1/dev/employees", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "edit") {
      api
        .put(`/api/v1/dev/employees/${akunData?.employeeId}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Popup
      ref={ref}
      modal
      onClose={onClose}
      contentStyle={{ borderRadius: "12px", padding: "0" }}
    >
      {(close) => (
        <div className="relative p-6 overflow-hidden h-[500px]">
          <img
            src={modalBg}
            alt="modal-background"
            className="absolute bottom-0 -translate-x-1/2 -z-10 left-1/2"
            width="70%"
          />
          <button
            className="absolute block cursor-pointer top-1 right-1"
            onClick={close}
          >
            <HiOutlineX className="text-2xl text-gray-500" />
          </button>
          <h3 className="mb-3 text-lg font-bold">
            {type === "create" ? "Buat Akun" : "Edit Akun"}
          </h3>
          <div className="flex gap-2 mb-2">
            <div className="flex justify-between flex-1">
              <div className="grid flex-1 w-full gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full input input-bordered"
                  defaultValue={akunData?.name}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="nik"
                  placeholder="NIK"
                  className="w-full input input-bordered"
                  defaultValue={akunData?.nik}
                  // onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Bidang / Jabatan"
                  className="w-full input input-bordered"
                  defaultValue={akunData?.role}
                  onChange={handleInputChange}
                />
                <div className="relative flex flex-col gap-5">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full input input-bordered"
                    defaultValue={akunData?.password}
                    // onChange={handleInputChange}
                  />
                  <button
                    onClick={handlePasswordLogo}
                    className="absolute -translate-y-1/2 right-4 top-1/2"
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-3">
                <img src={profilePicture} className="w-52 h-52" alt="Profile" />
                <button
                  type="button"
                  className="p-2 text-2xl text-white rounded-full bg-primary-2"
                >
                  <HiUpload />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <button
              onClick={() => {
                if (type === "create") {
                  setAkunData({ ...akunData, placementId: 1 });
                }
                postAkunData();
                onClose();
              }}
              className="text-white btn bg-primary-2 hover:bg-primary-3"
            >
              {type === "create" ? "Buat" : "Edit"}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
});

export default ModalAkun;
