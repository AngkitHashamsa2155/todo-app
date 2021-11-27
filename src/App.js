import Form from './Form'
import Table from './Table'
import { useGlobalContext } from './context'
function App() {
  const { handleFilter, filterItem } = useGlobalContext()
  return (
    <main className='min-h-full'>
      <div className='section-center  pt-16 text-center'>
        <Form />
        {filterItem.length > 0 && (
          <div className='mt-12 '>
            <label htmlFor='filter' className='pr-2'>
              filter:
            </label>
            <select
              name='filter'
              id='filter'
              onClick={handleFilter}
              className='bg-blue-400 text-white rounded-lg px-3 py-2 focus:outline-none'
            >
              <option value='all'>all</option>
              <option value='incomplete'>incomplete</option>
              <option value='completed'>completed</option>
            </select>
          </div>
        )}
        {filterItem.length > 0 && <Table />}
      </div>
    </main>
  )
}

export default App
