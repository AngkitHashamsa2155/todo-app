import Form from './Form';
import Table from './Table';
import Filter from './Filter';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => {
    const {
      todoReducer: { filterItem },
    } = state;
    return { filterItem };
  });

  return (
    <main className='min-h-full'>
      <div className='section-center  pt-16 text-center'>
        <Form />
        <Filter />
        <Table />
      </div>
    </main>
  );
}

export default App;
