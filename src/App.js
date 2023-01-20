import './App.css';
import './dist/output.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import CountryDetails from './pages/CountryDetails';
import NavBar from './components/Nav';

function App() {
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <NavBar />
      <div className='px-8 lg:py-10'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/details' element={<CountryDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </QueryClientProvider>
    </>
  );
}

export default App;
