import React, { useEffect } from 'react';
import moment from 'moment';
import * as actions from './Redux/constant';
import { useSelector, useDispatch } from 'react-redux';
const Table = () => {
  const data = useSelector((state) => {
    const {
      todoReducer: { filterItem, todo },
    } = state;
    return { filterItem, todo };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actions.HANDLE_TABLE_DATA });
  }, [data.todo]);

  return (
    <div className='mt-12 mx-auto grid grid-cols-1 justify-center mb-20'>
      <table className='text-center border-2 w-full'>
        <thead className='border-2'>
          <tr className='p4'>
            <th>Todo</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.filterItem.map((item) => {
            const { id, formInput, startDate, complete } = item;

            return (
              <tr key={id} className='border-2 '>
                <td className='p-3 border-2'>{formInput}</td>
                <td>{moment(startDate).format('MMMM d, YYYY')}</td>
                <td className='p-3 border-2'>
                  {complete ? 'completed' : 'incomplete'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
