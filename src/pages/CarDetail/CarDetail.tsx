import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../components/context";

interface Features {
  display: string;
  safety_system: string;
  comfort: string;
  interior: string;
}

interface TestResults {
  safety: string;
  reliability: string;
  fuel_efficiency: string;
  driving_experience: string;
}

interface Car {
  id: number;
  model: string;
  image: string;
  year: string;
  color: string;
  body_type: string;
  engine: string;
  power: string;
  transmission: string;
  prive: string;
  price: string;
  features: Features;
  test_results: TestResults;
}

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useData();
  const [loading, setLoading] = useState<boolean>(true);
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    console.log("Data:", data);
    console.log("ID from params:", id);

    if (data) {
      const foundCar = data.find((car: Car) => Number(car.id) === Number(id));
      console.log("Found Car:", foundCar);
      setCar(foundCar ?? null);
      setLoading(false);
    }
  }, [data, id]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!car) {
    return <div className="container">Car not found</div>;
  }

  console.log(car);

  return (
    <div className="container">
      <div className="flex items-center gap-2">
        Модель: <p>{car.model}</p>
      </div>
      <img src={car.image} alt="car image" />
    </div>
  );
};

export default CarDetail;
