import {useQuery} from "react-query";
import axios from "axios";
import Loader from "./Loader";
import { useState } from "react";
// import { Navigate } from "react-router-dom";

const CountryCards = () => {
    const [name, setName] = useState('')
    const [redirect, setRedirect] = useState(false)
    const getCountries = () => {
        return axios.get('https://restcountries.com/v3.1/all')
    }
    const {data, status, error} = useQuery('getCountries', getCountries, { refetchOnWindowFocus: false })

    // if(redirect){
    //     return <Navigate to={`/name/${name}`}>
    // }

    return ( 
        <>
        {status === "loading" ?
            <Loader />
        :
        <>
        <p className="font-bold text-center mt-10">{error?.response.data.message}</p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 justify-items-center">
            {data?.data.map((data) => (
                <div className="bg-white rounded-xl mt-10 w-fit" key={data?.altSpellings[0]} onClick={() => [setName(data?.name.common), setRedirect(true)]}>
                    <div className="rounded-tr-xl rounded-tl-xl h-[200px] xl:w-[300px] lg:w-[400px] w-[250px]">
                        <img src={data?.flags.png} alt={data?.name.common} className="rounded-tr-lg h-full w-full rounded-tl-lg"/>
                    </div>
                    <div className="text-left p-4">
                        <h3 className="font-extrabold text-xl my-2">{data?.name.common}</h3>
                        <p className="font-semibold">Population: <span className="font-light">{data?.population}</span></p><p className="font-semibold">Region: <span className="font-light">{data?.region}</span></p><p className="font-semibold">Capital: <span className="font-light">{data?.capital}</span></p>
                    </div>
                </div>
                ))
            }
        </div>

        </>
        }
        </>
     );
}
 
export default CountryCards;


