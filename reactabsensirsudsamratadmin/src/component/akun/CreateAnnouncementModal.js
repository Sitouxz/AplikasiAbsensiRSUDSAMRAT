import React, { useState } from "react";
import pPicture from "../../img/ProfilePicture.png";
import uploadButton from "../../img/uploadButton.png";
import dateLogo from "../../img/dateLogo.png";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const CrtAnnouncementModal = ({ setModal }) => {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [judul, setJudul] = useState("");
  const [desc, setDesc] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const handlePasswordLogo = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "judul":
        setJudul(value);
        break;
      case "description":
        setDesc(value);
        break;
      default:
        break;
    }
  };

  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCalendarButtonClick = () => {
    setShowCalendar(!showCalendar); // Toggle the visibility of the calendar
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50">
      <div
        onClick={setModal}
        className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-80"
      ></div>
      <div className="modalbgImage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-height[1.4] rounded-[3px] flex p-8 m-2 gap-28 items-center justify-between bg-[#fafafa] bg-cover pb-32">
        <div className="flex flex-col gap-4 mb-72 w-96">
          <input
            type="text"
            name="Judul"
            placeholder="Masukan Judul"
            value={judul}
            onChange={handleInputChange}
            className="flex-grow w-full py-1 bg-transparent border border-black rounded-lg pl-4"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={desc}
            onChange={handleInputChange}
            className="flex-grow w-15rem py-1 bg-transparent border border-black rounded-lg pl-4 pb-12"
          />
        </div>

        <div className="flex flex-col justify-center item-start gap-8 pr-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-3xl">Date :</h1>
            <button
              className="flex items-center justify-center bg-none flex-grow border-b-2 border-teal-500"
              onClick={handleCalendarButtonClick}
            >
              <img
                src={dateLogo}
                alt="date-logo"
                className="border rounded-lg p-2 w-12 h-12"
              />
              <div className=" text-xl">{currentDate}</div>
            </button>
          </div>
          <div className="flex flex-col items-end gap-2 w-72 h-64">
            {showCalendar ? (
              <Calendar
                onChange={handleDateChange}
                value={date}
                className=" m-0 bg-transparent"
              />
            ) : (
              <div className=""></div>
            )}
            <button className="pl-3 pr-3 pt-3 pb-3 text-white bg-teal-500 border-none rounded-lg w-48 mt-4">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrtAnnouncementModal;
