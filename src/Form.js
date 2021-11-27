import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from './context'
const Form = () => {
  const {
    startDate,
    setStartDate,
    data,
    setData,
    completed,
    setComplete,
    handleSubmit,
  } = useGlobalContext()

  return (
    <div className='shadow-lg rounded-lg p-4 px-5 border'>
      <header className='text-center mb-2'>
        <h1 className='font-semibold text-base'>Todo App</h1>
      </header>
      <form className='md:flex md:flex-col ' onSubmit={handleSubmit}>
        <input
          type='text'
          className=' flex-1 focus:outline-none p-2 px-3 w-full  rounded-lg shadow-lg'
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder='Add your list'
        />

        <section className='my-10 mr-auto'>
          <label htmlFor='date' className='mr-1'>
            Date:
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            type='date'
            className='border-2 w-1/3 ml-0'
            id='date'
          />
        </section>

        <section className='mr-auto mb-3'>
          <label htmlFor='completed' className='mr-1'>
            completed:
          </label>
          <input
            id='completed'
            type='checkbox'
            className='ml-2'
            checked={completed}
            onChange={() => setComplete(!completed)}
            className='border border-blue-400 rounded-md shadow-lg'
          />
        </section>

        <button
          type='submit'
          className='py-1 px-3 md:w-3/4 rounded-lg bg-blue-400 text-white w-full text-center mx-auto '
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Form
