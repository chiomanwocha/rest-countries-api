import "./App.css";
import "./dist/output.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainCountryDetails from "./pages/MainCountryDetails";
import BorderDetails from "./pages/BorderDetails";
import NavBar from "./components/Nav";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App bg-[#FAFAFA] dark:bg-[#1F2D36]">
          <div className="min-h-screen">
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/country/:name"
                  element={<MainCountryDetails />}
                ></Route>
                <Route
                  exact
                  path="/country/:name/:countryCode"
                  element={<BorderDetails />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
