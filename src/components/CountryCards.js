/* eslint-disable array-callback-return */
import Loader from "./Loader";

const CountryCards = ({ isFetchedAfterMount, loading, error, data, query }) => (
  <>
    {!isFetchedAfterMount || loading ? (
      <Loader />
    ) : (
      <>
        <p className="font-bold text-center mt-10">
          {error?.response.data.message}
        </p>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 px-8 justify-items-center duration-300 dark:bg-[#1F2D36] bg-[#FAFAFA]">
          {data?.data
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.name.common.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((data) => (
              <a href={`/country/${data?.name?.common}`} key={data?.name.common}>
                <div
                  className="bg-white border-[1px] dark:bg-[#2b3945] dark:text-white hover:rounded-none mt-10 md:w-fit cursor-pointer hover:scale-105 hover:shadow-xl duration-150 lg:w-[60vw]"
                  key={data?.name.common}
                >
                  <div className=" h-[200px] xl:w-[300px] lg:w-[450px] md:w-[320px] w-[100%] ">
                    <img
                      src={data?.flags.png}
                      alt={data?.name.common}
                      className="hover:rounded-none h-full w-full"
                    />
                  </div>
                  <div className="text-left p-4">
                    <h3 className="font-extrabold text-xl my-2">
                      {data?.name.common}
                    </h3>
                    <p className="font-semibold">
                      Population:{" "}
                      <span className="font-light">{data?.population}</span>
                    </p>
                    <p className="font-semibold">
                      Region: <span className="font-light">{data?.region}</span>
                    </p>
                    <p className="font-semibold">
                      Capital:{" "}
                      <span className="font-light">{data?.capital}</span>
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </>
    )}
  </>
);

export default CountryCards;
