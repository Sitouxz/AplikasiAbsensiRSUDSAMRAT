import React from 'react';
import { HiSearch, HiOutlineEye } from 'react-icons/hi';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { api, apiCheckToken } from '../../config/axios';
import { useDispatch } from 'react-redux';
import { expiredToken } from '../../config/authState/authSlice'

export default function PageAbsensi() {
  const [searchTerm, setSearchTerm] = useState('');
  const [absences, setAbsences] = useState([]);
  const dispatch = useDispatch();

  const filteredData = absences.filter((data) => {
    const nameLower = data.name.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    // Menggunakan ekspresi reguler untuk pencocokan yang lebih akurat
    const searchRegex = new RegExp(searchTermLower, 'g');
    return nameLower.match(searchRegex);
  });

  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.name
    },
    {
      name: 'Waktu',
      selector: (row) => row.time
    },
    {
      name: 'Sif',
      selector: (row) => row.shift
    },
    {
      name: 'Kategori',
      selector: (row) => row.category
    },
    {
      name: 'Presensi',
      cell: (row) => (
        <div
          className={`w-3 rounded-full h-3   ${
            row.presence === 'red'
              ? 'bg-red-600'
              : row.presence === 'green'
              ? 'bg-green-600'
              : row.presence === 'yellow'
              ? 'bg-yellow-600'
              : row.presence === 'blue'
              ? 'bg-blue-600'
              : 'bg-transparent'
          }`}
        />
      )
    },
    {
      name: 'Bukti',
      cell: (row) => (
        <button
          type='button'
          className='btn btn-sm bg-primary-2 text-white hover:bg-primary-3'>
          <HiOutlineEye />
        </button>
      )
    }
  ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold'
      }
    }
  };

  console.log(filteredData);
  console.log(searchTerm);

  useEffect(() => {
    const fetchAbsences = async () => {
      try {
        const response = await apiCheckToken.get('/ping');
        console.log(response.data)
        if(response.data) {
          try {
            const response = await api.get(
              '/api/v1/dev/attendances/all-with-schedule'
            );
            const data = response.data;
    
            const ExtractData = data.map((attendance) => {
              const shiftStartTime = attendance.shift.start_time;
              const shiftEndTime = attendance.shift.end_time;
    
              const clockIn = attendance.attendances[0]?.clockIn
                ? new Date(attendance.attendances[0].clockIn)
                : null;
              const clockOut = attendance.attendances[0]?.clockOut
                ? new Date(attendance.attendances[0].clockOut)
                : null;
    
              const formatWaktu = (waktu) => {
                const options = {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false
                };
                return waktu.toLocaleTimeString('en-US', options);
              };
              const clockInTime = clockIn ? formatWaktu(clockIn) : null;
              const clockOutTime = clockOut ? formatWaktu(clockOut) : null;
    
              let statusPenilaian = 'red'; // Default: Tidak ada data clock in atau clock out
    
              if (clockInTime && clockOutTime) {
                if (clockInTime <= shiftStartTime && clockOutTime >= shiftEndTime) {
                  statusPenilaian = 'green'; // Clock in sebelum start_time dan clock out setelah end_time
                } else if (clockInTime > shiftStartTime) {
                  statusPenilaian = 'yellow'; // Clock in setelah start_time
                }
              } else if (clockInTime) {
                if (clockInTime > shiftStartTime) {
                  statusPenilaian = 'yellow'; // Clock in setelah start_time
                }
              }
    
              const employeeNamesString = attendance.attendances
                .map((attendance) => attendance.employee.name)
                .join(', ')
                .replace(
                  /\w\S*/g,
                  (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
    
              return {
                clockInTime: clockInTime,
                clockOutTime: clockOutTime,
                shiftStartTime: shiftStartTime,
                shiftEndTime: shiftEndTime,
                presence: statusPenilaian,
                id: attendance.scheduleId,
                category: attendance.attendances.map(
                  (attendance) => attendance.attendanceType
                ),
                name: employeeNamesString,
                time: attendance.scheduleDate,
                shift: attendance.shift.name
              };
            });
            console.log(ExtractData);
    
            setAbsences(ExtractData);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
        dispatch(expiredToken())
      }
    };

    fetchAbsences();
  }, []);

  return (
    <div>
      <h1 className='text-xl font-medium'>Absensi</h1>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-end items-end gap-3'>
          <div className='flex justify-center items-center gap-3'>
            <div className='w-fit'>
              Tanggal:
              <div className='flex justify-center items-center gap-2'>
                {/* Aug 21, 2021 */}
                <input
                  type='date'
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  className='input input-bordered'
                />
              </div>
            </div>
            <span>Sampai</span>
            <div className='w-fit'>
              Tanggal:
              <div className='flex justify-center items-center gap-2'>
                {/* Aug 21, 2021 */}
                <input
                  type='date'
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  className='input input-bordered'
                />
              </div>
            </div>
          </div>
          <button
            type='button'
            className='bg-primary-2 py-3 px-10 rounded-md font-semibold text-white'>
            Print PDF
          </button>
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
        <p className='text-xs text-slate-500'>{absences.length} Absen</p>
        <div>
          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}
