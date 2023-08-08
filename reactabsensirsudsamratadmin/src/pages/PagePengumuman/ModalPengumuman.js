import React, { useState, forwardRef } from 'react';
import Popup from 'reactjs-popup';
import modalBg from '../../assets/modal-bg.png';
import { HiOutlineX } from 'react-icons/hi';

const ModalPengumuman = forwardRef((props, ref) => {
  const [judul, setJudul] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState(new Date());

  console.log('date', date);

  const handleDateChange = (date) => {
    setDate(date);
  };

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

  return (
    <Popup
      ref={ref}
      modal
      onClose={() => ref.current.close()}
      contentStyle={{ borderRadius: '12px', padding: '0' }}>
      {(close) => (
        <div className='relative p-6 overflow-hidden h-[400px]'>
          <img
            src={modalBg}
            alt='modal-background'
            className='absolute bottom-0 z-0 -translate-x-1/2 left-1/2'
            width='70%'
          />
          <button
            className='absolute block cursor-pointer top-1 right-1'
            onClick={close}>
            <HiOutlineX className='text-2xl text-gray-500' />
          </button>
          <div className='flex gap-2 mb-2'>
            <div className='flex flex-col flex-1 gap-4'>
              <input
                type='text'
                name='judul'
                value={judul}
                onChange={handleInputChange}
                placeholder='Masukan judul'
                className='input input-bordered'
              />
            </div>
            <div className='flex-1'>
              <input
                type='date'
                onChange={handleDateChange}
                className='w-full text-gray-400 input input-bordered'
              />
            </div>
          </div>
          <div className='w-full'>
            <textarea
              name='description'
              value={desc}
              onChange={handleInputChange}
              placeholder='Masukan deskripsi'
              rows={5}
              className='w-full textarea textarea-bordered'
            />
          </div>
          <div className='absolute bottom-6 right-6'>
            <button className='text-white btn bg-primary-2 hover:bg-primary-3'>
              Post
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
});

export default ModalPengumuman;
