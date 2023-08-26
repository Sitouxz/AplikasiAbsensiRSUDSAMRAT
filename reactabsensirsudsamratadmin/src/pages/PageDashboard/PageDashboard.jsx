import { apiCheckToken, apiLogin } from '../../config/axios';
import Cookies from 'js-cookie';
import React from 'react';
import { HiSearch, HiOutlineEye } from 'react-icons/hi';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { expiredToken } from '../../config/authState/authSlice';

export default function PageDashboard() {
  const [absences, setAbsences] = useState([]);
  const [filteredAbsences, setFilteredAbsences] = useState([]);

  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.name,
    },
    {
      name: 'Waktu',
      selector: (row) => row.time,
    },
    {
      name: 'Sif',
      selector: (row) => row.shift,
    },
    {
      name: 'Kategori',
      selector: (row) => row.category,
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
      ),
    },
    {
      name: 'Bukti',
      cell: (row) => (
        <button
          type="button"
          className="btn btn-sm bg-primary-2 text-white hover:bg-primary-3"
        >
          <HiOutlineEye />
        </button>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const exampleData = [
    {
      name: 'Tiger Nixon',
      time: 'System Architect',
      shift: 'Edinburgh',
      category: '61',
      presence: 'red',
    },
    {
      name: 'Garrett Winters',
      time: 'Accountant',
      shift: 'Tokyo',
      category: '63',
      presence: 'green',
    },
    {
      name: 'Ashton Cox',
      time: 'Junior Technical Author',
      shift: 'San Francisco',
      category: '66',
      presence: 'yellow',
    },
    {
      name: 'Cedric Kelly',
      time: 'Senior Javascript Developer',
      shift: 'Edinburgh',
      category: '22',
      presence: 'blue',
    },
    {
      name: 'Airi Satou',
      time: 'Accountant',
      shift: 'Tokyo',
      category: '33',
      presence: 'red',
    },
    {
      name: 'Brielle Williamson',
      time: 'Integration Specialist',
      shift: 'New York',
      category: '61',
      presence: 'green',
    },
    {
      name: 'Herrod Chandler',
      time: 'Sales Assistant',
      shift: 'San Francisco',
      category: '59',
      presence: 'yellow',
    },
    {
      name: 'Rhona Davidson',
      time: 'Integration Specialist',
      shift: 'Tokyo',
      category: '55',
      presence: 'blue',
    },
    {
      name: 'Colleen Hurst',
      time: 'Javascript Developer',
      shift: 'San Francisco',
      category: '39',
      presence: 'red',
    },
    {
      name: 'Sonya Frost',
      time: 'Software Engineer',
      shift: 'Edinburgh',
      category: '23',
      presence: 'green',
    },
    {
      name: 'Jena Gaines',
      time: 'Office Manager',
      shift: 'London',
      category: '30',
      presence: 'yellow',
    },
    {
      name: 'Quinn Flynn',
      time: 'Support Lead',
      shift: 'Edinburgh',
      category: '22',
      presence: 'blue',
    },
    {
      name: 'Charde Marshall',
      time: 'Regional Director',
      shift: 'San Francisco',
      category: '36',
      presence: 'red',
    },
  ];

  const handleSearch = (e) => {
    const { value } = e.target;
    const newData = absences.filter((item) => {
      const itemData = `${item.name.toUpperCase()} ${item.category.toUpperCase()}`;
      const textData = value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredAbsences(newData);
  };

  useEffect(() => {
    setAbsences(exampleData);
    setFilteredAbsences(exampleData);
  }, []);

  console.log(filteredAbsences);
  console.log(absences);

  return (
    <div className="flex flex-col">
      {/* <p>Page Dashboard</p> */}
      <div className="flex flex-1 flex-row">
        <div className="flex-1"> Grafik </div>
        <div>
          <div className="flex-1">Pemberitahuan</div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center relative w-full">
          <HiSearch className="absolute left-4" />
          <input
            type="text"
            placeholder="Cari..."
            className="w-full pl-10 input input-bordered"
            onChange={handleSearch}
          />
        </div>
        <p className="text-xs text-slate-500">3 Absen</p>
        <div>
          <DataTable
            columns={columns}
            data={filteredAbsences}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}
