import React, { useState, useRef, useEffect } from 'react';
import { HiSearch, HiOutlineTrash, HiChevronDown } from 'react-icons/hi';
import DataTable from 'react-data-table-component';
// import api from '../../config/axios';
import ModalShift from './ModalShift';
import api from '../../config/axios';
import { useNavigate } from 'react-router-dom';

export default function PageShift() {
  const [reloadApi, setReloadApi] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const [absences, setAbsences] = useState([]);
  const [scheduleTime, setscheduleTime] = useState('Shift');
  const [isOpen, setIsOpen] = useState(false);
  const modalShiftRef = useRef(null);
  const [schedule, setSchedule] = useState([]);
  const [modalType, setModalType] = useState('location');
  const dummyString = 'null';

  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setscheduleTime(option);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.scheduleId
    },
    {
      name: 'Date',
      selector: (row) => row.scheduleDate
    },
    {
      name: 'Shift',
      cell: (row) => {
        const startTime = row.shift.start_time;
        let shiftLabel = '';

        if (startTime === '08:00:00') {
          shiftLabel = 'Pagi';
        } else if (startTime === '14:00:00') {
          shiftLabel = 'Siang';
        } else if (startTime === '16:00:00') {
          shiftLabel = 'Malam';
        }

        return <span>{shiftLabel}</span>;
      }
    },
    {
      name: 'Time',
      cell: (row) => `${row.shift.start_time} - ${row.shift.end_time}`
    },
    {
      name: 'Location',
      cell: (row) => row.location ?? dummyString
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <button
            type='button'
            className='text-white bg-red-600 btn btn-sm hover:bg-red-700'
            onClick={() => handleDelete(row.id)}>
            <HiOutlineTrash />
          </button>
        </div>
      )
    }
  ];

  const handleShowId = (id) => {
    console.log(`Edit button clicked for row with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete button clicked for row with id: ${id}`);
  };

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold'
      }
    }
  };
  useEffect(() => {
    // Fetch data from API
    api
      .get('/api/v1/dev/schedule')
      .then((res) => {
        setSchedule(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadApi]);

  return (
    <div>
      <ModalShift
        ref={modalShiftRef}
        onClose={() => {
          setReloadApi(!reloadApi);
          // setSelectedAkun(null);
          console.log('Modal closed');
        }}
        schedule={schedule}
        type={modalType}
      />
      <h1 className='text-xl font-medium'>Schedule</h1>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-end'>
          <div className='w-fit'>
            Tanggal:
            <div className='flex justify-center items-center gap-2'>
              <input
                type='date'
                defaultValue={new Date().toISOString().slice(0, 10)}
                className='input input-bordered'
              />
              <p>-</p>
              <input
                type='date'
                defaultValue={new Date().toISOString().slice(0, 10)}
                className='input input-bordered'
              />
              <div className='relative inline-block text-left w-48'>
                <button
                  type='button'
                  className='dropdown-button btn h-12 justify-between w-full text-primary-2 bg-white border border-primary-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-2'
                  onClick={toggleDropdown}>
                  {scheduleTime}
                  <HiChevronDown />
                </button>
                <ul
                  className={`dropdown-content absolute z-10 ${
                    isOpen ? 'block' : 'hidden'
                  } w-full mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-lg transition ease-in-out duration-200 transform ${
                    isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'
                  }`}>
                  <li
                    className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-200 rounded-md'
                    onClick={() => handleOptionClick('Pagi')}>
                    Pagi
                  </li>
                  <li
                    className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-200 rounded-md'
                    onClick={() => handleOptionClick('Siang')}>
                    Siang
                  </li>
                  <li
                    className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-200 rounded-md'
                    onClick={() => handleOptionClick('Malam')}>
                    Malam
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <details className='dropdown dropdown-bottom dropdown-end relative'>
            <summary className=' btn bg-primary-2 py-3 rounded-md font-semibold text-white'>
              Buat sif
              <HiChevronDown className='inline-block ml-2' />
            </summary>
            <ul className='dropdown-content z-10 menu p-2 gap-2 shadow-xl bg-white rounded-md absolute border w-full'>
              <li>
                <button
                  onClick={() => {
                    modalShiftRef.current.open();
                    setModalType('schedule');
                  }}>
                  Buat jadwal
                </button>
              </li>
              <li>
                <a>Buat jadwal THL</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    modalShiftRef.current.open();
                    setModalType('location');
                  }}>
                  Buat Lokasi
                </button>
              </li>
            </ul>
          </details>
        </div>
        {/* Search Bar */}
        <div className='flex items-center relative w-full'>
          <HiSearch className='absolute left-4' />
          <input
            type='text'
            placeholder='Cari...'
            className='w-full pl-10 input input-bordered'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p className='text-xs text-slate-500'>{schedule.length} sif</p>
        <div className=' overflow-auto max-h-[60vh]'>
          <DataTable
            columns={columns}
            data={schedule}
            customStyles={customStyles}
            onRowClicked={(row) => navigate(`/shift/${row.scheduleId}`)}
          />
        </div>
      </div>
    </div>
  );
}
