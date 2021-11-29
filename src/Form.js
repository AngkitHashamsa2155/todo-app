import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleFormInput,
  handleFormChecked,
  handleFormDate,
  handleSubmit,
} from './Redux/createActions';
const Form = () => {
  const formInputs = useSelector((state) => {
    const {
      todoReducer: { formInput, startDate, complete, isEdit },
    } = state;
    return { formInput, startDate, complete, isEdit };
  });

  const dispatch = useDispatch();
  return (
    <div className='shadow-lg rounded-lg p-4 px-5 border'>
      <header className='text-center mb-2'>
        <h1 className='font-semibold text-base'>Todo App</h1>
      </header>
      <form
        className='md:flex md:flex-col '
        onSubmit={(e) => dispatch(handleSubmit(e))}
      >
        <input
          type='text'
          className=' flex-1 focus:outline-none p-2 px-3 w-full  rounded-lg shadow-lg'
          placeholder='Add your list'
          name='data'
          value={formInputs.formInput}
          onChange={(e) => dispatch(handleFormInput(e))}
        />

        <section className='my-10 flex'>
          {/* <label htmlFor='date' className='mr-1'>
            Date:
          </label> */}
          <DatePicker
            selected={formInputs.startDate}
            onChange={(e) => dispatch(handleFormDate(e))}
            type='date'
            className='border-2 '
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
            className='border border-blue-400 rounded-md shadow-lg ml-2'
            name='check'
            checked={formInputs.complete}
            onChange={() => dispatch(handleFormChecked())}
          />
        </section>

        <button
          type='submit'
          className='py-1 px-3 md:w-3/4 rounded-lg bg-blue-400 text-white w-full text-center mx-auto '
        >
          {formInputs.isEdit ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default Form;
