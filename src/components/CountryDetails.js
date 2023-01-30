import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const CountryDetails = (props) => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="absolute w-full dark:bg-[#1F2D36] bg-[#FAFAFA]">
      <div className="pb-10">
        <div className="mt-28 mb-16 ml-10">
          <button
            className="bg-white dark:bg-[#2b3945] dark:text-white rounded-sm flex items-center gap-2 px-6 py-1 shadow-md hover:scale-105 duration-150"
            onClick={() => navigate(-1)}
          >
            <Icon icon="mdi:arrow-left-thin" className="text-2xl" />
            <p>Back</p>
          </button>
        </div>
        <div className="items-center grid md:grid-cols-2 md:gap-10 md:items-start px-8 dark:text-white sm:max-w-lg sm:mx-auto md:max-w-none">
          <div className="w-full h-full xl:max-w-lg xl:mx-auto xl:max-h-80">
            <img
              src={props.imgSrc}
              alt={props.imgAlt}
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="py-2 font-bold text-xl mt-6">{props.countryName}</h2>
            <div className="md:grid md:grid-cols-2">
              <div className="[&>p]:capitalize [&>p]:text-sm [&>p]:my-2 [&>p]:font-bold">
                <p>
                  native name:
                  {props.nativeName.map((name) => (
                    <span className="font-light" key={name.common}>
                      {" "}
                      {name.common}
                    </span>
                  ))}
                </p>
                <p>
                  population:{" "}
                  <span className="font-light">{props.population}</span>
                </p>
                <p>
                  region: <span className="font-light">{props.region}</span>
                </p>
                <p>
                  sub region:{" "}
                  <span className="font-light">{props.subregion}</span>
                </p>
                <p>
                  capital: <span className="font-light">{props.capital}</span>
                </p>
              </div>
              <div className="[&>p]:capitalize [&>p]:text-sm [&>p]:my-2 [&>p]:font-bold my-8 md:m-0">
                <p>
                  top level domain:{" "}
                  <span className="font-light">{props.tld}</span>
                </p>
                <p>
                  currencies:
                  {props.currency.map((currency) => (
                    <span className="font-light" key={currency.name}>
                      {" "}
                      {currency.name},
                    </span>
                  ))}
                </p>
                <p>
                  languages:
                  {props.lang.map((lang) => (
                    <span className="font-light" key={lang}>
                      {" "}
                      {lang},
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="mt-6 lg:my-6">
              <p className="capitalize font-semibold">border countries:</p>
              {!props.borders && (
                <p className="bg-white dark:bg-[#2b3945] duration-300 py-1 px-6 shadow-sm text-sm w-fit inline-block mr-2 mt-2 rounded-sm">
                  None
                </p>
              )}
              <div className="md:w-[35vw]">
                {props.borders?.map((country) => (
                  <a href={`/country/${name}/${country}`} key={country}>
                    <p
                      className="bg-white dark:bg-[#2b3945] duration-300 py-1 px-6 shadow-sm text-sm w-fit inline-block mr-2 mt-2 rounded-sm hover:scale-110 hover:shadow-md cursor-pointer"
                    >
                      {country}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
