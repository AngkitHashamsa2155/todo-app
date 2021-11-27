import Form from './Form';
import Table from './Table';
import Filter from './Filter';

function App() {
  return (
    <main className='min-h-full'>
      <div className='section-center  pt-16 text-center'>
        <Form />
        {/* {filterItem.length > 0 && <Filter />}
        {filterItem.length > 0 && <Table />} */}
      </div>
    </main>
  );
}

export default App;
