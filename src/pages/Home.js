import SearchBox from "../components/SearchBox";
import CountryCards from "../components/CountryCards";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getCountries = () => {
    return axios.get("https://restcountries.com/v3.1/all");
  };
  const { status, error, isFetchedAfterMount } = useQuery(
    "getCountries",
    getCountries,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setData(data);
      },
    }
  );
  const handleOnChange = (value) => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/region/${value}`)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleInput = (value) => {
    setQuery(value);
  };

  return (
    <div className="pt-20">
      <SearchBox handleOnChange={handleOnChange} handleInput={handleInput} />
      <CountryCards
        setData={setData}
        data={data}
        status={status}
        error={error}
        isFetchedAfterMount={isFetchedAfterMount}
        loading={loading}
        query={query}
      />
    </div>
  );
};

export default Home;
