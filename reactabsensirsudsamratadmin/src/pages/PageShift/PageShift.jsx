import React, { useState } from 'react';
import {
  HiSearch,
  HiOutlineEye,
  HiOutlinePencil,
  HiOutlineTrash
} from 'react-icons/hi';
import DataTable from 'react-data-table-component';
// import api from '../../config/axios';

export default function PageShift() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [absences, setAbsences] = useState([]);

  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.name
    },
    {
      name: 'NIK',
      selector: (row) => row.nik
    },
    {
      name: 'Sif',
      selector: (row) => row.shift
    },
    {
      name: 'Bidang/Jabatan',
      selector: (row) => row.role
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <button
            type='button'
            className='mr-2 text-white btn btn-sm bg-primary-2 hover:bg-primary-3'
            onClick={() => handleEdit(row.employeeId)}>
            <HiOutlinePencil />
          </button>
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

  const data = [
    {
      name: 'John Doe',
      nik: '123456',
      shift: 'Pagi',
      role: 'Software Engineer',
      employeeId: 1,
      id: 101
    },
    {
      name: 'Jane Smith',
      nik: '789012',
      shift: 'Siang',
      role: 'Data Analyst',
      employeeId: 2,
      id: 102
    },
    {
      name: 'Michael Johnson',
      nik: '345678',
      shift: 'Malam',
      role: 'Product Manager',
      employeeId: 3,
      id: 103
    }
  ];
  const handleEdit = (id) => {
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

  return (
    <div>
      <h1 className='text-xl font-medium'>Buat sif THL</h1>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-end items-end gap-3'>
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
          {/* <button
            type='button'
            className='bg-primary-2 py-3 px-10 rounded-md font-semibold text-white'>
            
          </button> */}
          <details className='dropdown dropdown-bottom dropdown-end relative'>
            <summary className=' btn bg-primary-2 py-3 px-10 rounded-md font-semibold text-white'>
              Buat sif
            </summary>
            <ul className='dropdown-content z-10 menu p-2 gap-2 shadow-xl bg-white rounded-md absolute border w-full'>
              <li>
                <button>Buat jadwal</button>
              </li>
              <li>
                <a>Buat jadwal THL</a>
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
        <p className='text-xs text-slate-500'>{data.length} sif</p>
        <div>
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}
