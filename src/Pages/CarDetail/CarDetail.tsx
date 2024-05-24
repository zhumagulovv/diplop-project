import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../Components/Context";
import Button from "../../Components/UI/Button";
import { ItemType } from "../../interfaces";

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, handleClick } = useData();
  const [loading, setLoading] = useState<boolean>(true);
  const [car, setCar] = useState<ItemType | null>(null);

  useEffect(() => {
    if (data) {
      const foundCar = data.find(
        (car: ItemType) => Number(car.id) === Number(id)
      );
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

  const handleClickId = () => {
    handleClick(car.id);
  };

  return (
    <div className="container py-5">
      <div className="flex items-start">
        <img className="w-2/5" src={car.image} alt="car image" />
        <div className="W-88">
          <div className="w-full">
            <div className="flex items-center gap-2">
              Модель: <p>{car.model}</p>
            </div>
            <div className="flex items-center gap-2">
              Год выпуска: <p>{car.year}</p>
            </div>
            <div className="flex items-center gap-2">
              Цвет: <p>{car.color}</p>
            </div>
            <div className="flex items-center gap-2">
              Тип кузова: <p>{car.body_type}</p>
            </div>
            <div className="flex items-center gap-2">
              Двигатель: <p>{car.engine}</p>
            </div>
            <div className="flex items-center gap-2">
              Мощность: <p>{car.power}</p>
            </div>
            <div className="flex items-center gap-2">
              Трансмиссия: <p>{car.transmission}</p>
            </div>
            <div className="flex items-center gap-2">
              Привод: <p>{car.drive}</p>
            </div>
            <div className="flex items-center gap-2">
              Цена: <p>{car.price}</p>
            </div>
            <dl>
              <dt>Характеристики:</dt>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Дисплей: <p>{car.features.display}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Система безопасности: <p>{car.features.safety_system}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Комфорт: <p>{car.features.comfort}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Салон: <p>{car.features.interior}</p>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>Результаты тестирования</dt>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Безопасность: <p>{car.test_results.safety}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Надежность: <p>{car.test_results.reliability}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Эффективность топлива:{" "}
                  <p>{car.test_results.fuel_efficiency}</p>
                </div>
              </dd>
              <dd className="mx-3">
                <div className="flex items-center gap-2">
                  Удовольствие от вожления:{" "}
                  <p>{car.test_results.driving_experience}</p>
                </div>
              </dd>
            </dl>
          </div>
          <div className="flex items-center gap-10 my-5">
            <Button title="Назад" to="/" />
            <Button
              title="В корзину"
              action={() => {
                handleClickId;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
