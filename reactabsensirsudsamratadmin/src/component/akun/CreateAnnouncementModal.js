import React, { useState } from 'react';
// import pPicture from "../../img/ProfilePicture.png";
// import uploadButton from "../../img/uploadButton.png";
// import dateLogo from "../../img/dateLogo.png";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { HiOutlineCalendar } from 'react-icons/hi';

const CrtAnnouncementModal = ({ setModal }) => {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const [judul, setJudul] = useState('');
  const [desc, setDesc] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'judul':
        setJudul(value);
        break;
      case 'description':
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
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen'>
      <div
        onClick={setModal}
        className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-gray-800 bg-opacity-80'></div>
      <div className='modalbgImage absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-height[1.4] rounded-[3px] flex p-8 m-2 gap-28 items-center justify-between bg-[#fafafa] bg-cover pb-32'>
        <div className='flex flex-col gap-4 mb-72 w-96'>
          <input
            type='text'
            name='Judul'
            placeholder='Masukan Judul'
            value={judul}
            onChange={handleInputChange}
            className='flex-grow w-full py-1 pl-4 bg-transparent border border-black rounded-lg'
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={desc}
            onChange={handleInputChange}
            className='flex-grow py-1 pb-12 pl-4 bg-transparent border border-black rounded-lg w-15rem'
          />
        </div>

        <div className='flex flex-col justify-center gap-8 pr-2 item-start'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl '>Date :</h1>
            <button
              className='flex items-center justify-center flex-grow border-b-2 border-teal-500 bg-none'
              onClick={handleCalendarButtonClick}>
              <HiOutlineCalendar className='text-3xl ' />
              <div className='text-xl '>{currentDate}</div>
            </button>
          </div>
          <div className='flex flex-col items-end h-64 gap-2 w-72'>
            {showCalendar ? (
              <Calendar
                onChange={handleDateChange}
                value={date}
                className='m-0 bg-transparent '
              />
            ) : (
              <div className=''></div>
            )}
            <button className='w-48 pt-3 pb-3 pl-3 pr-3 mt-4 text-white bg-teal-500 border-none rounded-lg'>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrtAnnouncementModal;
