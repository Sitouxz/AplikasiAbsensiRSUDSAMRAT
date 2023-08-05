// import React, { useEffect, useState } from 'react';
import {
  HiOutlinePlusSm,
  HiSearch,
  HiOutlinePencil,
  HiOutlineTrash
} from 'react-icons/hi';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name
  },
  {
    name: 'Password',
    selector: (row) => row.password
  },
  {
    name: 'NIK',
    selector: (row) => row.nik
  },
  {
    name: 'Bidang/Jabatan',
    selector: (row) => row.bidangJabatan
  },
  {
    name: 'Action',
    cell: (row) => (
      <div>
        <button
          type='button'
          className='btn btn-sm bg-primary-2 text-white hover:bg-primary-3 mr-2'
          onClick={() => handleEdit(row.id)}>
          <HiOutlinePencil />
        </button>
        <button
          type='button'
          className='btn btn-sm bg-red-600 text-white hover:bg-red-700'
          onClick={() => handleDelete(row.id)}>
          <HiOutlineTrash />
        </button>
      </div>
    )
  }
];

const data = [
  {
    id: 1,
    name: 'John Doe',
    password: '********', // Replace this with actual password hash if applicable
    nik: '123456789',
    bidangJabatan: 'Software Engineer',
    presence: 'red'
  },
  {
    id: 2,
    name: 'Jane Smith',
    password: '********',
    nik: '987654321',
    bidangJabatan: 'UI/UX Designer',
    presence: 'green'
  }
  // Add more data objects as needed
];

const customStyles = {
  // rows: {
  //   style: {
  //     minHeight: '72px' // override the row height
  //   }
  // },
  headCells: {
    style: {
      fontWeight: 'bold'
    }
  }
  // cells: {
  //   style: {
  //     paddingLeft: '8px', // override the cell padding for data cells
  //     paddingRight: '8px'
  //   }
  // }
};

// You can define handleEdit and handleDelete functions to handle edit and delete actions
const handleEdit = (id) => {
  console.log(`Edit button clicked for row with id: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Delete button clicked for row with id: ${id}`);
};

export default function PageAkun() {
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   // get data here using axios
  // }, []);
  return (
    <div>
      <h1 className='text-xl font-medium'>Akun</h1>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-end items-center gap-3'>
          <button
            type='button'
            className='bg-primary-2 py-3 px-8 rounded-md font-semibold text-white flex justify-center items-center gap-2'>
            <HiOutlinePlusSm />
            Buat Akun
          </button>
        </div>
        {/* Search Bar */}
        <div className='flex items-center relative w-full'>
          <HiSearch className='absolute left-4' />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full pl-10'
          />
        </div>
        <p className='text-xs text-slate-500'>12 Akun</p>
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
