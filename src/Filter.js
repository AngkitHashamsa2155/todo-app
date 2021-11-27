import React from 'react';

const Filter = () => {
  return (
    <div className='mt-12 '>
      <label htmlFor='filter' className='pr-2'>
        filter:
      </label>
      <select
        name='filter'
        id='filter'
        className='bg-blue-400 text-white rounded-lg px-3 py-2 focus:outline-none'
      >
        <option value='all'>all</option>
        <option value='incomplete'>incomplete</option>
        <option value='completed'>completed</option>
      </select>
    </div>
  );
};

export default Filter;
