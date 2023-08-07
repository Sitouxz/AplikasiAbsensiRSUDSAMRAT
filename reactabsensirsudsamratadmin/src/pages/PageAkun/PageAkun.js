// import React, { useEffect, useState } from 'react';
import {
  HiOutlinePlusSm,
  HiSearch,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi';
import DataTable from 'react-data-table-component';
import ModalCreate from './ModalCreate';
import ModalEdit from './ModalEdit';
import { useState, useEffect } from 'react';
import axiosInstance from '../../config/axios/index';

export default function PageAkun() {
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [dataTable, setDataTable] = useState([]);

  const openModalCreate = () => {
    setModalOpenCreate(true);
  };
  const closeModalCreate = () => {
    setModalOpenCreate(false);
  };
  const openModalEdit = (dataUser) => {
    setModalOpenEdit(true);
    setSelectedData(dataUser);
  };
  const closeModalEdit = () => {
    setModalOpenEdit(false);
  };

  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      password: '123456',
      nik: '123456789',
      bidang: 'Marketing',
    },
    {
      id: 2,
      name: 'Jane Smith',
      password: 'abcdef',
      nik: '987654321',
      bidang: 'Finance',
    },
  ];

  async function getData() {
    try {
      const response = await axiosInstance.get('/api/v1/dev/employees');
      const dataMap = response.data.map((item) => {
        return {
          id: item.employeeId,
          name: item.name,
          password: 'Example Password',
          //if have password : item.password.replace(/./g, '*')
          nik: 'Example NIK',
          bidang: item.role,
        };
      });
      setDataTable(dataMap);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data:', error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-medium">Akun</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            onClick={openModalCreate}
            className="bg-primary-2 py-3 px-8 rounded-md font-semibold text-white flex justify-center items-center gap-2"
          >
            <HiOutlinePlusSm />
            Buat Akun
          </button>
        </div>
        {/* Search Bar */}
        <div className="flex items-center relative w-full">
          <HiSearch className="absolute left-4" />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full pl-10"
          />
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>password</th>
                <th>nik</th>
                <th>bidang</th>
                <th>Actions</th>
              </tr>
            </thead>
            {dataTable.map((data) => (
              <tbody>
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.password.replace(/./g, '*')}</td>
                  <td>{data.nik}</td>
                  <td>{data.bidang}</td>
                  <td>
                    <div className="flex gap-3">
                      <button
                        className="text-lg"
                        onClick={() => openModalEdit(data)}
                      >
                        <HiOutlinePencil />
                      </button>
                      <button className="text-lg">
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {modalOpenCreate && (
          <ModalCreate isOpen={modalOpenCreate} onClose={closeModalCreate} />
        )}
        {modalOpenEdit && (
          <ModalEdit
            data={selectedData}
            isOpen={modalOpenEdit}
            onClose={closeModalEdit}
          />
        )}
      </div>
    </div>
  );
}
