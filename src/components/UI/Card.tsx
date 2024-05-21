import React from "react";
import { useData, DataProvider } from "../context";
import { Link } from "react-router-dom";

const CardDisplay = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data ? (
        <div className="w-full flex flex-wrap gap-10 items-center justify-center">
          {data.map((el) => (
            <div key={el.id} className="w-80 h-96 p-2.5  flex flex-col justify-between">
              <div className="w-full h-60">
                <img
                  className="w-full h-full object-contain"
                  src={el.image}
                  alt="car image"
                />
              </div>
              <div className="text-center">
                <h2>{el.model}</h2>
                <p>{el.price}</p>
              </div>
              <div className="flex justify-center">
                <Link to={`/${el.id}`} className="w-48 h-12 bg-[#05141f] text-white flex items-center justify-center">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

const Card: React.FC = () => {
  return (
    <DataProvider>
      <CardDisplay />
    </DataProvider>
  );
};

export default Card;
