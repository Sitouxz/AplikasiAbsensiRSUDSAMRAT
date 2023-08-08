import React from 'react';
import {
  HiOutlinePlusSm,
  HiSearch,
  HiOutlinePencil,
  HiOutlineTrash
} from 'react-icons/hi';

export default function PagePengumuman() {
  return (
    <div>
      <h1 className='text-xl font-medium'>Pengumuman</h1>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-end items-center gap-3'>
          <div className='w-fit'>
            Tanggal:
            <div className='flex justify-center items-center gap-2'>
              {/* Aug 21, 2021 */}
              <input
                type='date'
                defaultValue={new Date().toISOString().slice(0, 10)}
              />
            </div>
          </div>
          <button
            type='button'
            className='bg-primary-2 py-3 px-8 rounded-md font-semibold text-white flex justify-center items-center gap-2'>
            <HiOutlinePlusSm />
            Buat Pengumuman
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
        <p className='text-xs text-slate-500'>12 Pengumuman</p>
        <div className='border border-slate-300 p-4 rounded-xl flex'>
          <div className='flex flex-col gap-2 flex-1'>
            <h1 className='font-bold'>Holiday HUT RI</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              consequuntur iure aliquam reiciendis, alias illo.
            </p>
            <span className='text-slate-500 text-xs'>
              Selasa, 17 Agustus 2023
            </span>
          </div>
          <div className='flex'>
            <button
              type='button'
              className='btn btn-sm bg-primary-2 text-white hover:bg-primary-3 mr-2'
              // onClick={() => handleEdit(row.id)}
            >
              <HiOutlinePencil />
            </button>
            <button
              type='button'
              className='btn btn-sm bg-red-600 text-white hover:bg-red-700'
              // onClick={() => handleDelete(row.id)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
