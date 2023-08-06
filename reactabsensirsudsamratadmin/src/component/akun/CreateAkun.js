import "../../App.css";
import CreateAkunLogo from "../../img/Vector.png";
import CrtAccountModal from "./CreateAccountModal";
import EdtAccountModal from "./EditAccountModal";
import CrtAnnouncementModal from "./CreateAnnouncementModal";
import React, { useState } from "react";

const CreateAkun = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col mt-10 gap-5">
      <div className="flex justify-between items-center pl-4 pr-4">
        <h1>Account Users</h1>
        <div className="flex flex-col justify-between items-center">
          <button onClick={setModal}>
            <img src={CreateAkunLogo} alt="logo-create-akun" />
          </button>
          <p className=" text-teal-500">Create Akun</p>
        </div>
        {isOpen && <CrtAccountModal setModal={setModal} />}
      </div>
      <input
        type="text"
        className="CreateAccount-search-bar"
        placeholder="Cari..."
      />
    </div>
  );
};

export default CreateAkun;
