import React, { useRef } from 'react';
import {
  HiOutlinePlusSm,
  HiSearch,
  HiOutlinePencil,
  HiOutlineTrash
} from 'react-icons/hi';
import ModalPengumuman from './ModalPengumuman';

export default function PagePengumuman() {
  const modalPengumumanRef = useRef(null);

  return (
    <>
      <ModalPengumuman ref={modalPengumumanRef} />
      <div>
        <h1 className='text-xl font-medium'>Pengumuman</h1>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-end gap-3'>
            <div className='w-fit'>
              Tanggal:
              <div className='flex items-center justify-center gap-2'>
                {/* Aug 21, 2021 */}
                <input
                  type='date'
                  defaultValue={new Date().toISOString().slice(0, 10)}
                />
              </div>
            </div>
            <button
              type='button'
              className='flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white rounded-md bg-primary-2'
              onClick={() => modalPengumumanRef.current.open()}>
              <HiOutlinePlusSm />
              Buat Pengumuman
            </button>
          </div>
          {/* Search Bar */}
          <div className='relative flex items-center w-full'>
            <HiSearch className='absolute left-4' />
            <input
              type='text'
              placeholder='Type here'
              className='w-full pl-10 input input-bordered'
            />
          </div>
          <p className='text-xs text-slate-500'>12 Pengumuman</p>
          <div className='flex p-4 border border-slate-300 rounded-xl'>
            <div className='flex flex-col flex-1 gap-2'>
              <h1 className='font-bold'>Holiday HUT RI</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                consequuntur iure aliquam reiciendis, alias illo.
              </p>
              <span className='text-xs text-slate-500'>
                Selasa, 17 Agustus 2023
              </span>
            </div>
            <div className='flex'>
              <button
                type='button'
                className='mr-2 text-white btn btn-sm bg-primary-2 hover:bg-primary-3'
                // onClick={() => handleEdit(row.id)}
              >
                <HiOutlinePencil />
              </button>
              <button
                type='button'
                className='text-white bg-red-600 btn btn-sm hover:bg-red-700'
                // onClick={() => handleDelete(row.id)}
              >
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
