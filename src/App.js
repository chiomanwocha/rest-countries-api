import './App.css';
import './dist/output.css'
import NavBar from './components/Nav';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import CountryCards from './components/CountryCards';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <NavBar />
      <div className='px-12'>
        <SearchBox />
        <FilterBox />
        <CountryCards />
      </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
